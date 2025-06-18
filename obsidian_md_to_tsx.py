import os
import re
import base64
import argparse
import markdown
from bs4 import BeautifulSoup, NavigableString, Tag


# ---------- UTILS ----------

def encode_image_to_base64(file_path):
    with open(file_path, "rb") as f:
        encoded = base64.b64encode(f.read()).decode("utf-8")
    ext = os.path.splitext(file_path)[1][1:].lower()
    return f"data:image/{ext};base64,{encoded}"

def escape_jsx_text(text):
    return (text.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("{", "&#123;")
                .replace("}", "&#125;"))

def split_text_with_links(text: str):
    url_pattern = re.compile(r"(https?://[^\s)]+)")
    parts = []
    last_end = 0
    for match in url_pattern.finditer(text):
        start, end = match.span()
        if start > last_end:
            parts.append(("text", text[last_end:start]))
        parts.append(("link", match.group()))
        last_end = end
    if last_end < len(text):
        parts.append(("text", text[last_end:]))
    return parts

# ---------- MARKDOWN HANDLING ----------

def inline_images(markdown_text, attachments_path):
    def replace_obsidian(match):
        filename = match.group(1)
        path = os.path.join(attachments_path, filename)
        return f'![]({encode_image_to_base64(path)})' if os.path.exists(path) else match.group(0)
    return re.sub(r'!\[\[(.*?)\]\]', replace_obsidian, markdown_text)

def markdown_to_html(md_text):
    return markdown.markdown(md_text, extensions=["fenced_code", "codehilite", "tables"])

# ---------- HTML → JSX CONVERSION ----------

link_css_classes = "text-secondary-foreground underline hover:text-secondary-foreground/80 transition-colors duration-100"

def html_to_jsx(soup: BeautifulSoup, indent=2):
    heading_classes = {
        "h1": "text-2xl font-bold my-4 text-secondary",
        "h2": "text-xl font-semibold my-3 text-secondary",
        "h3": "text-lg font-medium my-2 text-secondary",
        "h4": "text-base font-medium my-2 text-secondary",
        "h5": "text-base font-medium my-1 text-secondary",
        "h6": "text-sm font-medium my-1 text-secondary"
    }

    def process_tag(tag: Tag, indent=2):
        indent_str = " " * indent

        if isinstance(tag, NavigableString):
            return escape_jsx_text(str(tag))

        tag_name = tag.name

        if tag_name == "pre":
            code = tag.find("code")
            lang_class = code.get("class", [""])[0].replace("language-", "") if code else ""
            code_text = (code or tag).get_text().rstrip("\n").replace("\\", "\\\\").replace("`", "\\`").replace("{", "\\{").replace("}", "\\}")
            return f'{indent_str}<Code language="{lang_class}" code={{`{code_text}`}} />'

        if tag_name in heading_classes:
            return f'{indent_str}<{tag_name} className="{heading_classes[tag_name]}">{escape_jsx_text(tag.get_text())}</{tag_name}>'

        if tag_name == "code" and tag.parent.name != "pre":
            return f'{indent_str}<code className="bg-black/50 text-white px-2 py-1 rounded text-sm font-mono">{escape_jsx_text(tag.get_text())}</code>'


        if tag_name in {"ul", "ol"}:
            list_type_class = "list-disc" if tag_name == "ul" else "list-decimal"
            children = ''.join(process_tag(child, indent + 2) for child in tag.children)
            return f'{indent_str}<{tag_name} className="ml-6 my-2 {list_type_class} space-y-1">\n{children}\n{indent_str}</{tag_name}>'

        if tag_name == "li":
            children = ''.join(process_tag(child, indent + 2) for child in tag.children)
            return f'{indent_str}<li>{children}</li>'


        if tag_name == "hr":
            return f'{indent_str}<hr className="bg-secondary/50 my-8 h-0.5" />'

        if tag_name == "a":
            href = tag.get("href", "#")
            link_text = "".join(
                escape_jsx_text(str(c)) if isinstance(c, NavigableString) else process_tag(c, indent + 2)
                for c in tag.contents
            )
            return (
                f'{indent_str}<Link href="{href}" target="_blank" rel="noopener noreferrer" '
                f'className="{link_css_classes}">{link_text}</Link>'
            )

        if tag_name == "img":
            src = tag.get("src", "")
            alt = tag.get("alt", "")
            if tag.parent.name == "p" and len(tag.parent.contents) == 1:
                return f'{indent_str}<div className="flex justify-center my-4"><img src="{src}" alt="{alt}" className="max-w-full h-auto" /></div>'
            return f'{indent_str}<img src="{src}" alt="{alt}" className="inline-block max-w-full h-auto mx-2" />'

        if tag_name == "p" and len(tag.contents) == 1 and getattr(tag.contents[0], "name", None) == "img":
            return process_tag(tag.contents[0], indent)

        if tag_name == "table":
            rows = ''.join(process_tag(child, indent + 4) for child in tag.children)
            return f"""{indent_str}<div className="overflow-x-auto my-4">
{indent_str}  <table className="table-auto border-collapse border border-gray-300 w-full text-left">
{rows}
{indent_str}  </table>
{indent_str}</div>"""

        if tag_name in {"thead", "tbody"}:
            body = ''.join(process_tag(c, indent + 2) for c in tag.children)
            return f"{indent_str}<{tag_name}>\n{body}\n{indent_str}</{tag_name}>"

        if tag_name == "tr":
            body = ''.join(process_tag(c, indent + 2) for c in tag.children)
            return f"{indent_str}<tr>\n{body}\n{indent_str}</tr>"

        if tag_name == "th":
            text = ''.join(escape_jsx_text(str(c)) for c in tag.contents)
            return f'{indent_str}<th className="border px-4 py-2 bg-secondary-foreground/40 font-semibold">{text}</th>'

        if tag_name == "td":
            text = ''.join(escape_jsx_text(str(c)) for c in tag.contents)
            return f'{indent_str}<td className="border px-4 py-2">{text}</td>'

        children = []
        for child in tag.contents:
            if isinstance(child, NavigableString):
                for kind, val in split_text_with_links(str(child)):
                    if kind == "text":
                        children.append(escape_jsx_text(val))
                    else:
                        children.append(
                            f'<Link href="{val}" target="_blank" rel="noopener noreferrer" className="{link_css_classes}">{val}</Link>'
                        )
            else:
                children.append(process_tag(child, indent + 2))

        attr_str = ""
        if tag.get("class"):
            attr_str = f' className="{" ".join(tag["class"])}"'

        if tag_name == "p":
            return f"{indent_str}<{tag_name}{attr_str} className='my-2'>{''.join(children)}</{tag_name}>"

        return f"{indent_str}<{tag_name}{attr_str}>{''.join(children)}</{tag_name}>"

    jsx_lines = [
        process_tag(el, indent) if isinstance(el, Tag) else escape_jsx_text(str(el))
        for el in soup.contents if str(el).strip()
    ]
    return "\n".join(jsx_lines)

# ---------- COMPONENT GENERATION ----------

def generate_tsx_component(jsx: str, component_name: str):
    return f"""import React from "react";
import Code from "@/components/Code";
import Link from "next/link";

const {component_name} = () => {{
  return (
    <>
{jsx}
    </>
  );
}};

export default {component_name};
"""

# ---------- MAIN LOGIC ----------

def convert(md_path, attachments_path, output_path, component_name):
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    md_text = inline_images(md_text, attachments_path)
    html = markdown_to_html(md_text)
    soup = BeautifulSoup(html, "html.parser")
    jsx = html_to_jsx(soup)
    tsx = generate_tsx_component(jsx, component_name)

    with open(output_path, "w", encoding="utf-8") as f:
        f.write(tsx)

    print(f"✅ Saved TSX component to: {output_path}")

def main():
    parser = argparse.ArgumentParser(description="Convert Markdown to React TSX component.")
    parser.add_argument("-i", "--input", required=True, help="Markdown input file")
    parser.add_argument("-a", "--attachments", required=True, help="Attachments folder")
    parser.add_argument("-o", "--output", required=True, help="Output .tsx file")
    parser.add_argument("-c", "--component", default="NoteComponent", help="Component name")
    args = parser.parse_args()
    convert(args.input, args.attachments, args.output, args.component)

if __name__ == "__main__":
    main()

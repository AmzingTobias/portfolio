import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const DROP_DOWN_ITEMS = [
  {
    title: "CTFs",
    description: "CTF walkthroughs.",
    link: "/posts/ctf",
  },
  {
    title: "Blog",
    description: "Blog posts about topics I've found interesting.",
    link: "/posts/blog",
  },
  {
    title: "Projects",
    description: "Projects / Tools I've created.",
    link: "/posts/projects",
  },
];

interface DropDownProps {
  dropdownShown: boolean;
  showDropdown: () => void;
  hideDropdown: () => void;
  position?: "left" | "right";
}

const DropDown: React.FC<DropDownProps> = ({
  dropdownShown,
  showDropdown,
  hideDropdown,
  position = "left",
}) => {
  return (
    <div
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className={cn(
        "bg-[#181818] p-3 mt-2 z-50 rounded-xl w-[340px] absolute shadow-lg transition-all duration-200",
        position === "left" ? "left-0" : "-right-3",
        dropdownShown
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <ul className="grid gap-2 w-full">
        {DROP_DOWN_ITEMS.map((item, index) => (
          <li
            key={index}
            className="bg-accent p-2 hover:bg-accent/70 rounded-md transition-colors"
          >
            <Link href={item.link}>
              <div className="text-sm">{item.title}</div>
              <div className="text-muted-foreground text-sm">
                {item.description}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;

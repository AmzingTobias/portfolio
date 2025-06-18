import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export enum TAGS {
  BLOG,
  CTF,
  PROJECTS,
}

export const ALL_TAGS = [TAGS.CTF, TAGS.PROJECTS, TAGS.BLOG];

interface TagProps {
  tag_for_post: TAGS;
  selectable?: {
    selected: boolean;
  };
}

const Tag: React.FC<TagProps> = ({ tag_for_post, selectable }) => {
  let displayText: string;
  let gradient: string;
  let href: string;

  switch (tag_for_post) {
    case TAGS.BLOG:
      displayText = "#Blog";
      gradient = "linear-gradient(30deg, #1CB5E0 0%, #000851 100%)";
      href = "/posts/blogs";
      break;
    case TAGS.CTF:
      displayText = "#CTF";
      gradient = "linear-gradient(30deg, #d53369 0%, #daae51 100%)";
      href = "/posts/ctf";
      break;
    case TAGS.PROJECTS:
      displayText = "#Project";
      gradient = "linear-gradient(30deg, #efd5ff 0%, #515ada 100%)";
      href = "/posts/projects";
      break;
    default:
      displayText = "";
      gradient = "";
      href = "/";
  }

  return (
    <div
      className={cn(
        "w-fit p-1 rounded-2xl cursor-pointer",
        selectable === undefined
          ? "opacity-100"
          : selectable.selected === true
          ? "opacity-100 hover:opacity-50 transition-opacity duration-400"
          : "opacity-20"
      )}
      style={{
        background: gradient,
      }}
    >
      <div className="text-sm text-white">{displayText}</div>
    </div>
  );
};

export default Tag;

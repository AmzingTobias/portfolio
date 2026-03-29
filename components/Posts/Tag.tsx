import { cn } from "@/lib/utils";
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

  switch (tag_for_post) {
    case TAGS.BLOG:
      displayText = "#Blog";
      gradient = "linear-gradient(30deg, #1CB5E0 0%, #000851 100%)";
      break;
    case TAGS.CTF:
      displayText = "#CTF";
      gradient = "linear-gradient(30deg, #d53369 0%, #daae51 100%)";
      break;
    case TAGS.PROJECTS:
      displayText = "#Project";
      gradient = "linear-gradient(30deg, #efd5ff 0%, #515ada 100%)";
      break;
    default:
      displayText = "";
      gradient = "";
  }

  return (
    <div
      className={cn(
        "w-fit px-2 py-1 rounded-2xl",
        selectable !== undefined && "cursor-pointer",
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

"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type CodeProps = {
  language?: string;
  code: string;
};

const Code: React.FC<CodeProps> = ({ language = "", code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="relative my-6 bg-accent text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-black-700">
        <span className="text-xs font-mono text-zinc-400 uppercase">
          {language || ""}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            "text-xs text-secondary hover:text-secondary/80 transition-colors",
            copied ? "cursor-default" : "cursor-pointer"
          )}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code Block */}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed font-mono whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default Code;

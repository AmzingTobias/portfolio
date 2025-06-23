"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About Me", href: "/#about-me" },
  { label: "Experience", href: "/#experience" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Education", href: "/#education" },
  { label: "CTFs", href: "/ctf" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
];

const VerticalNavbar: React.FC<{ className?: string }> = ({ className }) => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  return (
    <div
      className={cn(
        "w-full flex flex-col sticky top-0 z-10 bg-background",
        className
      )}
    >
      <div className="flex justify-between items-center p-4 border-b border-secondary w-full">
        <Link href="/" className="text-2xl font-bold text-secondary">
          Tobias Dunn
        </Link>
        <button
          onClick={() => setMobileNavbarOpen(!mobileNavbarOpen)}
          className="text-secondary text-2xl cursor-pointer"
        >
          {mobileNavbarOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {mobileNavbarOpen && (
        <nav className="flex flex-col p-4 bg-background border-b border-secondary z-50">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileNavbarOpen(false)}
              className="py-2 text-base text-secondary hover:text-secondary/90 transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default VerticalNavbar;

"use client";

import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About Me", href: "/#about-me" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "CTFs", href: "/ctf" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
];

const VerticalNavbar: React.FC<{ className?: string }> = ({ className }) => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const pathname = usePathname();

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileNavbarOpen(false);
  };

  return (
    <div
      className={cn(
        "w-full flex flex-col sticky top-0 z-50 bg-background/90 backdrop-blur-md",
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
          <div className="relative w-6 h-6">
            <RiMenu3Line
              className={cn(
                "absolute inset-0 transition-all duration-200",
                mobileNavbarOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
              )}
            />
            <RiCloseLine
              className={cn(
                "absolute inset-0 transition-all duration-200",
                mobileNavbarOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
              )}
            />
          </div>
        </button>
      </div>

      {mobileNavbarOpen && (
        <nav className="flex flex-col p-4 bg-background border-b border-secondary z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleAnchorClick(e, href)}
              className="py-2 text-base text-secondary transition-colors duration-150 hover:text-secondary/90"
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

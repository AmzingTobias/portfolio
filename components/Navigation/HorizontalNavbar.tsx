"use client";

import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import DropDown from "./Dropdown";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const HorizontalNavbar: React.FC<{ className?: string }> = ({ className }) => {
  const [dropdownShown, setDropdownShown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleAnchorClick = (e: React.MouseEvent, hash: string) => {
    if (pathname === "/") {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownShown(true);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownShown(false);
    }, 150);
  };

  const linkClass =
    "text-base transition-colors duration-150 hover:text-secondary/90 focus:text-secondary/90";

  return (
    <header
      className={cn(
        "bg-background/90 backdrop-blur-md min-w-screen flex flex-col md:flex-row items-center p-3 justify-between max-w-screen sticky top-0 z-50 border-b border-secondary/80 shadow-[0_2px_10px_var(--tw-shadow-color)] shadow-secondary/50",
        className
      )}
    >
      <h1 className="flex font-bold text-2xl text-secondary select-none">
        <Link href={"/"}>Tobias Dunn</Link>
      </h1>
      <div className="flex items-center gap-4">
        <div className="w-px h-6 bg-secondary/30" />
        <NavigationMenu className="flex">
          <NavigationMenuList className="justify-end text-secondary gap-3">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={linkClass}
              >
                <Link href="/#about-me" onClick={(e) => handleAnchorClick(e, "#about-me")}>About Me</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={linkClass}
              >
                <Link href="/#certifications" onClick={(e) => handleAnchorClick(e, "#certifications")}>Certifications</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={linkClass}
              >
                <Link href="/#experience" onClick={(e) => handleAnchorClick(e, "#experience")}>Experience</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={linkClass}
              >
                <Link href="/#education" onClick={(e) => handleAnchorClick(e, "#education")}>Education</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <div
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                className="relative"
              >
                <NavigationMenuLink
                  asChild
                  className={linkClass}
                >
                  <Link href="/posts" className="flex flex-row gap-2 items-center">
                    Posts
                    <RiArrowDownSLine
                      className={cn(
                        "text-secondary transition-transform duration-200",
                        dropdownShown ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </Link>
                </NavigationMenuLink>
                <DropDown
                  dropdownShown={dropdownShown}
                  showDropdown={showDropdown}
                  hideDropdown={hideDropdown}
                  position="right"
                />
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default HorizontalNavbar;

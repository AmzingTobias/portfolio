"use client";

import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import DropDown from "./Dropdown";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

function Navigation() {
  const [dropdownShown, setDropdownShown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownShown(true);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownShown(false);
    }, 150);
  };

  return (
    <header className="bg-background min-w-screen flex flex-row items-center p-3 justify-between max-w-screen sticky top-0 z-10 border-secondary/80 border-2">
      <h1 className="flex font-bold text-2xl text-secondary select-none">
        <Link href={"/"}>Tobias Dunn</Link>
      </h1>
      <div className="flex flex-col items-end mr-1">
        <NavigationMenu className="flex">
          <NavigationMenuList className="justify-end text-secondary gap-3">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base hover:text-secondary/90 focus:text-secondary/90"
              >
                <Link href="/#about-me">About Me</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base hover:text-secondary/90 focus:text-secondary/90"
              >
                <Link href="/#experience">Experience</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base hover:text-secondary/90 focus:text-secondary/90"
              >
                <Link href="/#certifications">Certifications</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-base hover:text-secondary/90 focus:text-secondary/90"
              >
                <Link href="/#education">Education</Link>
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
                  className="text-base hover:text-secondary/90 focus:text-secondary/90"
                >
                  <div className="flex flex-row gap-2 items-center">
                    <Link href="/posts">Posts</Link>
                    <RiArrowDownSLine
                      className={cn(
                        "text-secondary transition-transform duration-200",
                        dropdownShown ? "rotate-180" : "rotate-0"
                      )}
                    />
                  </div>
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
}

export default Navigation;

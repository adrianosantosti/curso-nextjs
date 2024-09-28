"use client"
import { cn } from "@/helpers/cn";
import { NavbarListItemButtonProps } from "./types";
import { NavbarListItem } from "./NavbarListItem";

export const NavbarListItemButton = ({ children, className, ...props }: NavbarListItemButtonProps) => {
    return (
      <NavbarListItem className={ cn("p-0", className)}>
        <button className="flex gap-2 items-center p-2 w-full" {...props}>
          {children}
        </button>
      </NavbarListItem>
    );
  };
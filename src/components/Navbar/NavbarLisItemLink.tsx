import { cn } from "@/helpers/cn";
import { NavbarLisItemLinkProps } from "./types";
import { NavbarListItem } from "./NavbarListItem";
import Link from "next/link";

export const NavbarLisItemLink = ({ href = "", children, className, ...props }: NavbarLisItemLinkProps) => {
  return (
    <NavbarListItem className={ cn("p-0", className)}>
      <Link href={href} className="flex gap-2 items-center rounded-lg p-2 w-full" {...props}>
        {children}
      </Link>
    </NavbarListItem>
  );
};
    
    
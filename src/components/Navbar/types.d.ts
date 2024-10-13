import { User } from "@prisma/client";

export type NavbarProps = React.ComponentProps<"nav"> & { user?: JWTPayload };
export type NavbarListProps = React.ComponentProps<"ul">;
export type NavbarListItemProps = React.ComponentProps<"li">;
export type NavbarLisItemLinkProps = React.ComponentProps<typeof Link>;
export type NavbarListItemButtonProps = React.ComponentProps<"button">;
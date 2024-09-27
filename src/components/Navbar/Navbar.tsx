import { HomeIcon, GamePadIcon, Top10, WalkIcon, FaceHappyIcon } from "@/components";
import { cn } from "@/helpers/cn";

type NavbarProps = React.ComponentProps<"nav">;
type NavbarListProps = React.ComponentProps<"ul">;
type NavbarListItemProps = React.ComponentProps<"li">;

const NavbarList = ({ children, className, ...props }: NavbarListProps) => {
  return (
    <ul className={ cn ("my-4 border-t border-indigo-400/20 hover:border-indigo-400/40", className)} {...props}>
      {children}
    </ul>
  );
};

const NavbarListItem = ({ children, className, ...props }: NavbarListItemProps) => {
  return (
    <li {...props} className={ cn("my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-400/40 hover:text-slate-100 cursor-pointer flex gap-2 items-center", className)}>
      {children}
    </li>
  );
};

export const Navbar = ({ className, ...props } : NavbarProps) => {
    return (
        <nav {...props} className={ cn("h-screen flex flex-col bg-slate-900 border-r border-indigo-400/20 w-72 p2 hover:border-indico-400/40 text-slate-300", className) }> 
          <div className="flex items-center justify-center my-4"> 
            
            <img 
              className="w-auto h-12 p-2" 
              src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" 
              alt="Logo Emerson Broga" />
          </div>
          <NavbarList className={"flex-grow"}>
            <NavbarListItem>
              <HomeIcon className="w-4 h-4" />Home
            </NavbarListItem>
            <NavbarListItem>
              <GamePadIcon className="w-4 h-4" />Games
            </NavbarListItem>
            <NavbarListItem>
              <Top10 className="w-4 h-4" />Top 10
            </NavbarListItem>
            <NavbarListItem>
              <WalkIcon className="w-4 h-4" />Walkthroughs
            </NavbarListItem>
          </NavbarList>
          <NavbarList>
            <NavbarListItem>
              <FaceHappyIcon className="w-4 h-4" />User
            </NavbarListItem>
          </NavbarList>
        </nav>
    )
}
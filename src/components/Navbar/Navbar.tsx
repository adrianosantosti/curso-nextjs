import { HomeIcon, GamePadIcon, Top10, WalkIcon, FaceHappyIcon } from "@/components";
import { cn } from "@/helpers/cn";
import { NavbarList } from "./NavbarList";
import { NavbarLisItemLink } from "./NavbarLisItemLink";
import { NavbarProps } from "./types";
import Image from 'next/image';

export const Navbar = ({ className, ...props } : NavbarProps) => {
    return (
        <nav {...props} className={ cn(
          "fixed top-0 left-0 h-screen flex flex-col bg-slate-900 border-r border-indigo-400/20 w-72 p2 hover:border-indico-400/40 text-slate-300", className) }> 
          <div className="flex items-center justify-center my-4"> 
            
            <Image width={112} height={32}
              className="w-auto h-12 p-2" 
              src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" 
              alt="Logo Emerson Broga" />
          </div>

          <NavbarList className={"flex-grow"}>

            <NavbarLisItemLink href="/">
              <HomeIcon className="w-4 h-4" />Home
            </NavbarLisItemLink>

            <NavbarLisItemLink href="/games">
              <GamePadIcon className="w-4 h-4" />Games
            </NavbarLisItemLink>

            <NavbarLisItemLink href="/top-10">
              <Top10 className="w-4 h-4" />Top 10
            </NavbarLisItemLink>

            <NavbarLisItemLink href="/walkthroughs">
              <WalkIcon className="w-4 h-4" />Walkthroughs
            </NavbarLisItemLink>

            {/* <NavbarListItemButton>
              <WalkIcon className="w-4 h-4" />Botão teste
            </NavbarListItemButton> */}

          </NavbarList>

          <NavbarList>
            <NavbarLisItemLink href="user">
              <FaceHappyIcon className="w-4 h-4" />User
            </NavbarLisItemLink>
          </NavbarList>
        </nav>
    )
}
import React from "react";
import { NavLink } from "@remix-run/react";
import { UserIcon, LogOutIcon, SettingsIcon } from "lucide-react";
import { Button } from "~/components/_shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/_shadcn/ui/dropdown-menu";
// ///////////////////////////////////////////////
import { PATH } from "~/constants/PATH";

const HeaderAvatarMenu: React.FC = () => {
  console.log("🚀 ~ HeaderAvatarMenu");
  return (
    <DropdownMenu>
      <DropdownMenuLabel className="-mr-3 hidden sm:flex">
        Hi, Admin
      </DropdownMenuLabel>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <img src="/images/avatar.png" className="dim-6 rounded-full" alt="" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <NavLink to={PATH.profile} className="flex-center gap-2">
            <UserIcon className="dim-4" />
            My Profile
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to={PATH.settings} className="flex-center gap-2">
            <SettingsIcon className="dim-4" />
            Settings
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex-center gap-2 text-red-500">
          <LogOutIcon className="dim-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default React.memo(HeaderAvatarMenu);

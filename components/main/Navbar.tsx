// SPDX-License-Identifier: LicenseRef-BRH-1.0
import Link from "next/link";
import { ModeToggle } from "@/components/toggles/toggle-mode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarHeader } from "@/components/main/navbar-header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import LanguageSwitcher from "@/components/toggles/language-switcher";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { UserSearch } from "@/components/search/user-search";
import { getAvatarUrl, getUserInitials } from "@/utils/avatar";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <NavbarHeader />
      <ul className="flex items-center justify-between gap-4">
        <li className="border-r-2 pr-4">
          {!user ? (
            <div></div>
          ) : (
            <Link href="/dashboard" className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={getAvatarUrl(user.picture)} alt="you" />
                <AvatarFallback>
                  {getUserInitials(user.given_name, user.family_name)}
                </AvatarFallback>
              </Avatar>
              <Tooltip>
                <TooltipTrigger>
                  {user.given_name || user.username}
                </TooltipTrigger>
                <TooltipContent>
                  <p>Profile</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          )}
        </li>
        <li className="flex gap-2 border-r-2 pr-4">
          {!user ? (
            <Button variant="ghost">
              <LoginLink postLoginRedirectURL="/dashboard">Sign In</LoginLink>
            </Button>
          ) : (
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" asChild>
                  <LogoutLink>
                    <LogOut />
                  </LogoutLink>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Log out</p>
              </TooltipContent>
            </Tooltip>
          )}
        </li>
        <li>
          <ModeToggle />
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
      <div>
        <UserSearch />
      </div>
    </>
  );
}

// SPDX-License-Identifier: LicenseRef-BRH-1.0
import Link from "next/link";
import { ModeToggle } from "@/components/toggles/toggle-mode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BrainCircuit, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarHeader } from "@/components/navbar/navbar-header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import LanguageSwitcher from "@/components/toggles/language-switcher";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { UserSearch } from "@/components/search/user-search";
import { getAvatarUrl, getUserInitials } from "@/utils/avatar";
import { MobileNavbar } from "@/components/navbar/mobile-navbar";
import { MobileBrand } from "@/components/navbar/mobile-brand";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  

  return (
    <div className="flex items-center justify-between w-full px-4">
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between w-full">
        <MobileNavbar user={user} />
        <div className="flex items-center gap-2">
          <MobileBrand />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex items-center gap-4 justify-between">
          <Link href="/">
            <span className="border-r-2 border-gray-500 pr-2">beRich.Hub</span>
          </Link>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <Link
                href="/berich-llm"
                aria-label="berich-llm"
                className="flex items-center gap-2"
              >
                <BrainCircuit className="text-blue-400 font-bold drop-shadow" />
                <span className="text-xs">Try our AI Assistant</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>AI Assistant</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <NavbarHeader />
        <div className="flex items-center gap-4">
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
                  <LoginLink postLoginRedirectURL="/dashboard">
                    Sign In
                  </LoginLink>
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
        </div>
      </div>
    </div>
  );
}

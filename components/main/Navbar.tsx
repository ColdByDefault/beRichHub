import Link from "next/link"
import { ModeToggle } from "@/components/themes/toggle-mode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarHeader } from "@/components/main/navbar-header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";      
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"; 


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
                <Link href="/dashboard">
                  <Avatar>
                    <AvatarImage src={user.picture || "https://github.com/shadcn.png"} alt="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
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
              <Button variant="outline" asChild>
                <LogoutLink>
                  <LogOut />
                </LogoutLink>
              </Button>
            )}
          </li>
          <li className="border-r-2 pr-4 h-8 items-center flex">
          <Link href="/" className="flex shadow h-9 px-4 py-2 max-w-52 rounded-md
          hover:bg-black/90  hover:text-white dark:hover:bg-zinc-700 dark:hover:text-black">
              <FaGithub className="text-xl"/>
          </Link>
          </li>
          <li><ModeToggle /></li>
      </ul>
    </>
  )
}

/* another version */
/* 
"use client";
import Link from "next/link";
import { ModeToggle } from "@/components/themes/toggle-mode";
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  LoginLink,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/components";
import { NavbarHeader } from "@/components/main/navbar-header";
export function Navbar() {
  const { isAuthenticated, user, isLoading } = useKindeBrowserClient();
  // Optionally render nothing while loading
  if (isLoading) return null;
  return (
    <>
      <NavbarHeader />
      <ul className="flex items-center justify-between gap-4">
        {!isAuthenticated ? (
          <li>
            <Button variant="ghost">
              <LoginLink postLoginRedirectURL="/dashboard">
                Sign In
              </LoginLink>
            </Button>
          </li>
        ) : (
          <>
            <li className="border-r-2 pr-4">
              <Link href="/dashboard">
                <Avatar>
                  <AvatarImage
                    src={user.picture ?? "https://github.com/shadcn.png"}
                    alt={user.given_name}
                  />
                  <AvatarFallback>
                    {user.given_name?.[0] ?? "U"}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </li>
            <li className="border-r-2 pr-4">
              <Button variant="outline" asChild>
                <LogoutLink>
                  <LogOut />
                </LogoutLink>
              </Button>
            </li>
          </>
        )}
        <li className="border-r-2 pr-4 h-8 flex items-center">
          <Link
            href="/"
            className="flex shadow h-9 px-4 py-2 max-w-52 rounded-md
                       hover:bg-black/90 hover:text-white
                       dark:hover:bg-zinc-700 dark:hover:text-black">
            <FaGithub className="text-xl" />
          </Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </>
  );
}
 */
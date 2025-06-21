import Link from "next/link"
import { ModeToggle } from "@/components/themes/toggle-mode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarHeader } from "@/components/main/navbar-header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";      
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"; 
import LanguageSwitcher from "@/components/languages/language-switcher";


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
                    <AvatarImage src={user.picture || "/avatars/avatar.png"} alt="you" />
                    <AvatarFallback>YOU</AvatarFallback>
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
              <Button variant="ghost" asChild>
                <LogoutLink>
                  <LogOut />
                </LogoutLink>
              </Button>
            )}
          </li>
          <li className="border-r-2 pr-4 h-8 items-center flex">
          <Link href="https://github.com/ColdByDefault/simple-LLM-Agent" target="_blanck" 
            rel='noopener noreferrer'
            aria-label="GitHub"
           className="flex shadow h-9 px-4 py-2 max-w-52 rounded-md
          hover:bg-black/90  hover:text-white dark:hover:bg-zinc-700 dark:hover:text-black">
              <FaGithub className="text-xl"/>
          </Link>
          </li>
          <li><ModeToggle /></li>
          <li><LanguageSwitcher currentLang="en"/></li>
      </ul>
    </>
  )
}

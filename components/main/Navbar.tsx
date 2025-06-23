import Link from "next/link"
import { ModeToggle } from "@/components/toggles/toggle-mode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarHeader } from "@/components/main/navbar-header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";      
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components"; 
import LanguageSwitcher from "@/components/toggles/language-switcher";


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
          <li><ModeToggle /></li>
          <li><LanguageSwitcher/></li>
      </ul>
    </>
  )
}

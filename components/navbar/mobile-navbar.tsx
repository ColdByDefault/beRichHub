// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/toggles/toggle-mode";
import LanguageSwitcher from "@/components/toggles/language-switcher";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { UserSearch } from "@/components/search/user-search";
import { getAvatarUrl, getUserInitials } from "@/utils/avatar";

interface MobileNavbarProps {
  user?: {
    picture?: string | null;
    given_name?: string | null;
    family_name?: string | null;
    username?: string | null;
  } | null;
}

export function MobileNavbar({ user }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Navbar");

  const handleClose = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="-translate-x-8">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 overflow-y-auto">
          <SheetHeader className="border-b pb-4">
            <SheetTitle className="text-left">
              <Link
                href="/"
                onClick={handleClose}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {t("brand")}
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6 space-y-6 pb-6 px-4">
            {/* User Profile Section */}
            {user && (
              <div className="space-y-3">
                <Link
                  href="/dashboard"
                  onClick={handleClose}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors border"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={getAvatarUrl(user.picture)}
                      alt="Profile"
                    />
                    <AvatarFallback>
                      {getUserInitials(user.given_name, user.family_name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-sm">
                      {user.given_name || user.username}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Go to Dashboard
                    </p>
                  </div>
                </Link>
                <Separator />
              </div>
            )}

            {/* Search Section */}
            <div className="space-y-3">
              <h3 className="font-medium text-xs text-muted-foreground uppercase tracking-wider">
                Search
              </h3>
              <div className="px-1">
                <UserSearch preventAutoFocus={true} />
              </div>
            </div>

            <Separator />

            {/* AI Assistant */}
            <div className="space-y-3">
              <h3 className="font-medium text-xs text-muted-foreground uppercase tracking-wider">
                AI Assistant
              </h3>
              <Link
                href="/berich-llm"
                onClick={handleClose}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors border"
              >
                <div className="h-8 w-8 bg-primary/10 rounded-md flex items-center justify-center">
                  <Image
                    src="/icons/brain.png"
                    width={18}
                    height={18}
                    alt={t("brainAlt")}
                  />
                </div>
                <span className="font-medium text-sm">AI Assistant</span>
              </Link>
            </div>

            <Separator />

            {/* LLM Menu Items */}
            <div className="space-y-3">
              <h3 className="font-medium text-xs text-muted-foreground uppercase tracking-wider">
                {t("llm.trigger")}
              </h3>
              <div className="space-y-2">
                <Link
                  href="/llm-starter"
                  onClick={handleClose}
                  className="block p-3 rounded-lg hover:bg-muted transition-colors border"
                >
                  <div className="font-medium text-sm">{t("llm.intro")}</div>
                </Link>
                <Link
                  href="/how-to-use"
                  onClick={handleClose}
                  className="block p-3 rounded-lg hover:bg-muted transition-colors border"
                >
                  <div className="font-medium text-sm">
                    beRichHub LLM locally
                  </div>
                </Link>
              </div>
            </div>

            <Separator />

            {/* Docs Menu */}
            <div className="space-y-3">
              <h3 className="font-medium text-xs text-muted-foreground uppercase tracking-wider">
                Documentation
              </h3>
              <div className="space-y-2">
                <Link
                  href={t("docs.item1.href")}
                  onClick={handleClose}
                  className="block p-3 rounded-lg hover:bg-muted transition-colors border"
                >
                  <div className="font-medium text-sm">
                    {t("docs.item1.title")}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {t("docs.item1.description")}
                  </div>
                </Link>
              </div>
            </div>

            <Separator />

            {/* Settings & Controls */}
            <div className="space-y-4">
              <h3 className="font-medium text-xs text-muted-foreground uppercase tracking-wider">
                Settings
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 rounded-lg border">
                  <span className="text-sm font-medium">Theme</span>
                  <ModeToggle />
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg border">
                  <span className="text-sm font-medium">Language</span>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>

            {/* Auth Section */}
            <div className="pt-4 border-t">
              {!user ? (
                <Button className="w-full h-10" asChild>
                  <LoginLink postLoginRedirectURL="/dashboard">
                    Sign In
                  </LoginLink>
                </Button>
              ) : (
                <Button variant="outline" className="w-full h-10" asChild>
                  <LogoutLink>
                    <LogOut className="h-4 w-4 mr-2" />
                    Log out
                  </LogoutLink>
                </Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

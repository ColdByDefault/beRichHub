// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function NavbarHeader() {
  const t = useTranslations("Navbar");

  return (
    <NavigationMenu viewport={false} className="list-none gap-2">
      <NavigationMenuItem>
        <ListItem href="/llm-starter">{t("llm.trigger")}</ListItem>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <ListItem href="/how-to-use">Get LLM-Agent locally</ListItem>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <ListItem href="/roadmaps">{t("docs.item1.title")}</ListItem>
      </NavigationMenuItem>
      {/*       <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} className={className} {...props}>
        <div className="text-sm leading-none">{title}</div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  );
}

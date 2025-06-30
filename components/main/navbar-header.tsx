// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const docKeys = ["item1"] as const;

export function NavbarHeader() {
  const t = useTranslations("Navbar");

  const docsData = docKeys.map((key) => ({
    title: t(`docs.${key}.title`),
    href: t(`docs.${key}.href`),
    description: t(`docs.${key}.description`),
  }));

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* Brand */}
        <NavigationMenuItem>
          <ul className="flex gap-2 items-center">
            <li>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">{t("brand")}</Link>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <Link href="/berich-llm" aria-label="berich-llm">
                      <Image
                        src="/icons/brain.png"
                        width={24}
                        height={24}
                        alt={t("brainAlt")}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>AI Assistant</p>
                  </TooltipContent>
                </Tooltip>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuItem>

        {/* LLM Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("llm.trigger")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline"
                    href="/berich-llm"
                  >
                    <span className="mt-4 mb-2 text-lg">
                      {t("llm.mainTitle")}
                    </span>
                    <p className="text-muted-foreground text-sm leading-tight">
                      {t("llm.mainDesc")}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <ListItem href="/berich-llm#intro" title={t("llm.intro")}>
                {t("llm.introDesc")}
              </ListItem>
              <ListItem href="/berich-llm#offline" title={t("llm.offline")}>
                {t("llm.offlineDesc")}
              </ListItem>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Docs Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {t("docs.item1.title") /* or a separate label */}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {docsData.map((item) => (
                <li key={item.title} className="p-2">
                  <Link href={item.href}>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-tight">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

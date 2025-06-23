"use client"
import Link from "next/link"
import Image from "next/image";
import { navbarMenuDocs } from "@/data/navbarMenu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"




export function NavbarHeader() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
            <ul className="flex gap-2 flex-row items-center">
              <li>          
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">beRich.Hub&#174;</Link>
                </NavigationMenuLink>
              </li>
              <li className="items-center flex">          
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/berich-llm" rel='noopener noreferrer'
                  aria-label="berich-llm">
                    <Image src="/icons/brain.png" width={24} height={24} alt="AI"/>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>LLM</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md 
                  bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                   href="/">
                    <span className="mt-4 mb-2 text-lg">
                      Online LLM-Agent with RAG
                    </span>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Online LLM-Agent with a RAG system, using both its trained 
                      knowledge and up-to-date information from databases.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
                <ListItem href="/" title="Introduction">
                  Learn about the features and capabilities of the beRichHub-LLM-Agent,
                  including how it leverages RAG systems to provide accurate and up-to-date answers.
                </ListItem>
              <ListItem href="/" title="Offline RAG-Agent">
                Discover how to set up and use the offline version of the beRichHub-LLM-Agent,
                including how to install dependencies and structure a local app.
              </ListItem>
              <ListItem href="/" title="Usage with LangFlow">
                LangFlow is a visual programming tool for LLMs.
                Learn how to integrate the beRichHub-LLM-Agent with LangFlow to create custom workflows and applications.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navbarMenuDocs.map((navbarMenuDocs) => (
                <li key={navbarMenuDocs.title} className="p-2">
                  <Link href={navbarMenuDocs.href}>
                    <span className="block">
                      <h3 className="text-lg font-semibold">
                        {navbarMenuDocs.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-tight">
                        {navbarMenuDocs.description}
                      </p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Projects</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
)}


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
  )
}
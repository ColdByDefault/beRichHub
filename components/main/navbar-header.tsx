"use client"
import Link from "next/link"
import { House, Brain } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Roadmaps",
    href: "/getting-started-roadmap",
    description:
      "Collection of roadmaps to help you navigate your learning journey in software development.",
  },
  {
    title: "Basic PC Knowledge",
    href: "/getting-started-pc",
    description:
      "Essential knowledge about personal computers, including hardware components, software, and troubleshooting.",
  },
  {
    title: "Programming Langiuages",
    href: "/basic-programming",
    description:
      "Overview of popular programming languages, their syntax, and use cases.",
  },
  {
    title: "Algorithms",
    href: "/basic-algorithms",
    description:
      "Introduction to common algorithms and data structures, including their implementation and use cases.",
  }
]

export function NavbarHeader() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/"><House /></Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/berich-llm"><Brain className="text-blue-600"/></Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>LLM</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md 
                  bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                   href="/berich-llm">
                    <span className="mt-4 mb-2 text-lg">
                      Online LLM-Agent with RAG
                    </span>
                    <p className="text-muted-foreground text-sm leading-tight">
                      An online LLM-Agent with a RAG system, answer questions using both its trained 
                      knowledge and up-to-date information from documents and databases.
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
              {components.map((component) => (
                <li key={component.title} className="p-2">
                  <Link href={component.href}>
                    <span className="block">
                      <h3 className="text-lg font-semibold">
                        {component.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-tight">
                        {component.description}
                      </p>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Projects</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <span className="">Components</span>
                    <span className="text-muted-foreground">
                      Browse all components in the library.
                    </span>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <span className="">Documentation</span>
                    <span className="text-muted-foreground">
                      Learn how to use the library.
                    </span>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <span className="">Blog</span>
                    <span className="text-muted-foreground">
                      Read our latest blog posts.
                    </span>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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
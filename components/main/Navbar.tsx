"use client"
import Link from "next/link"
import { ModeToggle } from "@/components/themes/toggle-mode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaGithub } from "react-icons/fa";
//import { useSession } from "next-auth/react"



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
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Basic PC Knowledge",
    href: "/getting-started-pc",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Programming",
    href: "/basic-programming",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  }
]

export function Navbar() {
  //const { data: session, status } = useSession()
  return (
    <>
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>AI</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md 
                  bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                   href="/">
                    <span className="mt-4 mb-2 text-lg">
                      LLM-Agent
                    </span>
                    <p className="text-muted-foreground text-sm leading-tight">
                      An LLM-Agent with a RAG system, answer questions using both its trained knowledge and up-to-date information from documents or databases.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
                <ListItem href="/" title="Introduction">
                  Learn about the features and capabilities of the LLM-Agent, including how it leverages RAG systems to provide accurate and up-to-date answers.
                </ListItem>
              <ListItem href="/" title="Installation">
                How to install dependencies and structure a local app.
              </ListItem>
              <ListItem href="/" title="Use beRichHub-Agent">
                Explore something
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
                      <p className="text-sm text-gray-600">
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
              <ul className="flex items-center justify-between gap-4">
            <li className="border-r-2 pr-4">
                <Link href="/">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Link>
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


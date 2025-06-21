"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

interface LanguageSwitcherProps {
  currentLang: "en" | "de"
}

const languages = {
  en: { name: "English", flag: "🇺🇸" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  es: { name: "Español", flag: "🇪🇸" },
  sv: { name: "Svenska", flag: "🇸🇪" },
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: "en" | "de") => {
    // Replace the current language in the pathname with the new one
    const newPathname = pathname.replace(`/${currentLang}`, `/${newLang}`)
    router.push(newPathname)
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center w-12 h-10">
          <Languages/>
          <span>{languages[currentLang].flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([lang, { name, flag }]) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => switchLanguage(lang as "en" | "de")}
            className={`flex items-center space-x-2 ${lang === currentLang ? "bg-accent" : ""}`}
          >
            <span>{flag}</span>
            <span>{name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

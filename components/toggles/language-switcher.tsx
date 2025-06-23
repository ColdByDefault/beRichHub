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


/* 'use client'

import React, { useEffect, useState} from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


const LanguageSwitcher = () => {
  const [ locale, setLocale ] = useState<string>("")
  const router = useRouter()
  useEffect(() => {
    const cookiesLocale = document.cookie
    .split("; ")
    .find((row) => row.startsWith("BERICHHUBVERSIONLATEST_LOCALE="))
    ?.split("=")[1];
    if(cookiesLocale) {
      setLocale(cookiesLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `BERICHHUBVERSIONLATEST_LOCALE=${browserLocale};`;
      router.refresh();
    }
  }, [router])

  return (
    <div>
      <Button variant="outline">
        EN
      </Button>
      <Button variant="outline">
        DE
      </Button>
    </div>
  )
} */
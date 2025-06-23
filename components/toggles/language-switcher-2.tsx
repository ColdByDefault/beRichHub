'use client'

import React, { useEffect, useState} from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"


const LanguageSwitcher2 = () => {
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

  const changeLocale = (newLocale: string) => {
    setLocale(newLocale);
    document.cookie = `BERICHHUBVERSIONLATEST_LOCALE=${newLocale}`
    router.refresh();
  }

  return (
    <div>
      <Button variant="outline" onClick={() => changeLocale("en")}>
        EN
      </Button>
      <Button variant="outline" onClick={() => changeLocale("de")}>
        DE
      </Button>
    </div>
  )
}

export default LanguageSwitcher2
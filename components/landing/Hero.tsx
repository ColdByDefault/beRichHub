"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";
import {useTranslations} from 'next-intl';



export default function BeRichHome() {
  const { theme, resolvedTheme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const t = useTranslations('BeRichHome');

   const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

    useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  /* img logo */
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark"); 

  /* bg logo */
 const logoGradient   = isDark
  ? "bg-gradient-to-r from-blue-400/20 to-purple-400/20"
  : "bg-gradient-to-r from-blue-300/20 to-purple-300/20";

const logoGradient2  = isDark
  ? "bg-gradient-to-r from-pink-600/10 to-yellow-400/10"
  : "bg-gradient-to-r from-blue-300/20 to-amber-300/20";

const logoGradient3  = isDark
  ? "bg-gradient-to-r from-green-400/10 to-blue-400/10"
  : "bg-gradient-to-r from-blue-300/20 to-cyan-500/20";

  const light = "from-black/90 to-gray-500"


  return (
    <div className="flex flex-col flex-grow p-4 mt-12">
      <div className="fixed inset-0 pointer-events-none -z-1">
          <div className={`absolute w-96 h-96  rounded-full blur-3xl animate-pulse ${logoGradient}`}
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
              transition: "all 0.3s ease-out",
            }}/>
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-2xl animate-bounce ${logoGradient2}`}
            style={{ animationDuration: "3s" }}/>
          <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-2xl animate-pulse ${logoGradient3}`}
            style={{ animationDelay: "3s" }}/>
      </div>
      <div className={`bg-gradient-to-r text-transparent flex justify-center text-8xl
           ${light} bg-clip-text font-extrabold
         dark:from-gray-400 dark:to-gray-100`}>
            <span>beRich</span>
            <span className="text-blue-400">.</span>
            <span>Hub</span>
      </div>
      <section className="py-16 px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Rocket className="h-4 w-4 mr-2" />
            beRichHub
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            {/* Your Digital Hub for <span className="text-primary">Developer Success</span> */}
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform from coding beginner to confident developer with personalized roadmaps, comprehensive documentation,
            and a supportive learning ecosystem designed for your success.
          </p>
        </div>
      </section>
    </div>
  );
}

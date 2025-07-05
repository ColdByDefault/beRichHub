// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import { Github, Link, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BeRichHome() {
  const { theme, resolvedTheme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const t = useTranslations("BeRichHome");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* img logo */
  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  /* bg logo */
  const logoGradient = isDark
    ? "bg-gradient-to-r from-blue-400/20 to-purple-400/20"
    : "bg-gradient-to-r from-blue-300/20 to-purple-300/20";

  const logoGradient2 = isDark
    ? "bg-gradient-to-r from-pink-600/10 to-yellow-400/10"
    : "bg-gradient-to-r from-blue-300/20 to-amber-300/20";

  const logoGradient3 = isDark
    ? "bg-gradient-to-r from-green-400/10 to-blue-400/10"
    : "bg-gradient-to-r from-blue-300/20 to-cyan-500/20";

  const light = "from-black/90 to-gray-500";

  return (
    <div className="flex flex-col flex-grow p-2 mr-8 sm:p-4 mt-16">
      <div className="fixed inset-0 pointer-events-none -z-1">
        <div
          className={`absolute w-96 h-96  rounded-full blur-3xl animate-pulse ${logoGradient}`}
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className={`absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full blur-2xl animate-bounce ${logoGradient2}`}
          style={{ animationDuration: "3s" }}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full blur-2xl animate-pulse ${logoGradient3}`}
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div
        className={`bg-gradient-to-r text-transparent flex justify-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          ${light} bg-clip-text font-extrabold
        dark:from-gray-600 dark:to-gray-100`}
      >
        <span>beRich</span>
        <span className="text-blue-400">.</span>
        <span>Hub</span>
      </div>

      <section className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 flex flex-col items-center">
        <div className="text-center mb-8 sm:mb-12">
          <Badge
            variant="secondary"
            className="mb-3 sm:mb-4 text-xs sm:text-sm"
          >
            <Rocket className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            For Developers, by Developers
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 px-2">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4">
            {t("description")}
          </p>
        </div>

        <div className="flex items-center text-sm sm:text-base px-4 text-center">
          <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
          <span className="mr-1">Source Code on</span>
          <a
            href="https://github.com/ColdByDefault/beRichHub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center ml-1 text-blue-500 hover:underline"
          >
            <Link className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}




/*        */
"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";



export default function BeRichHome() {
  const { theme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  const logoSrc = isDark ? "/logos/logoDark.png" : "/logos/logoLight.png";

  return (
    <div className="flex flex-col flex-grow p-4 mt-12">
      <div className="mb-4 lg:mb-8 text-center">
      </div>
      <section className="mb-8">
        <div className="relative bg-white bg-opacity-30 backdrop-blur-md shadow-md shadow-[#25252566] rounded-lg p-6 flex flex-col items-center
        dark:bg-prime dark:backdrop-blur-3xl dark:bg-opacity-30 dark:shadow-lg dark:shadow-zinc-900/50">
          <div className="h-48 w-full flex justify-center items-center mb-4">
            {mounted && (
              <Image
                src={logoSrc}
                width={400}
                height={400}
                alt="beRich.Hub Logo"
              />
            )}
          </div>
          <h4 className="text-sm text-center">
            &quot;For Developers, By Developers&quot;
          </h4>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose beRich.Hub?</h2>
            <p className="text-lg   max-w-2xl mx-auto">
              A digital library created to serve as a free, accessible, and open-source hub for
              expanding your knowledge and skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

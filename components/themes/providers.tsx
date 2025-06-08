"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";



export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={true}
        disableTransitionOnChange={true}
        storageKey="theme"
      >
        {children}
      </NextThemesProvider>
  );
}


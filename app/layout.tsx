// SPDX-License-Identifier: LicenseRef-BRH-1.0
/**
 * ColdByDefault www.coldbydefault.com
 * <!-- Leve Palestina -->
 * Root layout component for the beRich-Hub Next.js application.
 *
 * This component sets up the global HTML structure, metadata, font, and providers for the app.
 * It includes:
 * - Global metadata for SEO and social sharing.
 * - Urbanist Google font integration.
 * - Internationalization support using NextIntlClientProvider.
 * - Theme and context providers.
 * - Persistent Navbar and Footer components.
 * - Vercel Analytics integration.
 *
 * @param children - The React node(s) to be rendered within the layout.
 * @returns The root HTML structure with global providers and layout components.
 *
 * @remarks
 * - The layout dynamically sets the language and locale based on server-side detection.
 * - Includes structured data (JSON-LD) for organization schema.
 * - Applies global CSS and animated loader class to the body.
 */
//
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/themes/providers";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Urbanist as Urbanist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "beRich-Hub",
  description: "Hub For Developers, By Developers",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${urbanist.className}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="beRich.Hub" />
        <meta name="author" content="ColdByDefault" />
        <meta
          name="keywords"
          content="ColdByDefault, beRichHub, LLM, Next.Js, Web Development"
        />
        <meta property="og:title" content="ColdByDefault" />
        <meta property="og:description" content="beRich.Hub" />
        <meta property="og:image" content="/logoDark.png" />
        <meta property="og:url" content="https://www.berich-hub.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ColdByDefault" />
        <meta name="twitter:description" content="beRich.Hub" />
        <meta name="twitter:image" content="/logoDark.png" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          hrefLang={locale}
          href="https://www.berich-hub.org/de"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ColdByDefault",
              "url": "https://www.berich-hub.org",
              "logo": "https://www.berich-hub.org/logoDark.png",
              "sameAs": [
                "https://github.com/ColdByDefault"
              ]
            }
          `}
        </script>
        <title>beRichHub</title>
      </head>
      <body suppressHydrationWarning className="animated-loader">
        <Providers>
          <NextIntlClientProvider messages={messages}>
            <div
              className="z-50 fixed flex items-center justify-between top-0 left-0 right-0
                px-12 py-2 shadow-md bg-white dark:bg-prime"
            >
              <Navbar />
            </div>
            {children}
            <div className="shadow-md bg-white dark:bg-prime">
              <Footer />
            </div>
          </NextIntlClientProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}

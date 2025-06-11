import type { Metadata } from "next";
import "./globals.css";
import { Providers  } from "@/components/themes/providers";
import { Orbitron } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import {Navbar} from "@/components/main/Navbar";




const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-orbitron', 
});


export const metadata: Metadata = {
  title: "beRich-Hub",
  description: "Hub For Developers, By Developers",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  const defaultLang = 'en'; 
  const alternateLang = 'de';


  return (
    <html lang={defaultLang} className={`${orbitron.variable}`} suppressHydrationWarning>
            <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="beRich.Hub" />
        <meta name="author" content="ColdByDefault" />
        <meta name="keywords" content="ColdByDefault, beRichHub, LLM, Next.Js, Web Development" />
        <meta property="og:title" content="ColdByDefault" />
        <meta property="og:description" content="beRich.Hub" />
        <meta property="og:image" content="/logoDark.png" />
        <meta property="og:url" content="https://www.berich-hub.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ColdByDefault" />
        <meta name="twitter:description" content="beRich.Hub" />
        <meta name="twitter:image" content="/logoDark.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" hrefLang={alternateLang} href="https://www.berich-hub.org/de" /> 
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
          <div className="z-50 fixed flex items-center justify-between top-0 left-0 right-0
          px-12 py-2 shadow-md bg-white dark:bg-prime">
            <Navbar />
          </div>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
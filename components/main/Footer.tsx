// SPDX-License-Identifier: LicenseRef-BRH-1.0
"use client";
import Link from "next/link";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  if (pathname.startsWith("/berich-llm") || pathname.startsWith("/reeed")) {
    return null;
  }

  return (
    <footer className="w-full bg-gray-50 dark:bg-prime border-t ">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-prime dark:text-gray-600 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                >
                  {t("cookiePolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                >
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                >
                  {t("termsofService")}
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                >
                  {t("impressum")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-prime dark:text-gray-600 uppercase tracking-wider">
              {t("resources")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li>
                  <Link
                    target="_blanck"
                    rel="noopener noreferrer"
                    href="https://nextjs.org"
                    className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white 
                        transition-colors duration-200"
                  >
                    Next.js
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blanck"
                    rel="noopener noreferrer"
                    href="https://react.dev"
                    className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                  >
                    React
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blanck"
                    rel="noopener noreferrer"
                    href="https://ui.shadcn.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                  >
                    Shadcn-UI
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blanck"
                    rel="noopener noreferrer"
                    href="https://vercel.com/"
                    className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                  >
                    Vercel
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link
                  target="_blanck"
                  rel="noopener noreferrer"
                    href="https://ai-sdk.dev/docs/introduction"
                    className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                  >
                    Vercel AI SDK
                  </Link>
                </li>
                <li>
                  <Link
                  target="_blanck"
                  rel="noopener noreferrer"
                    href="https://ollama.com/"
                    className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white 
                        transition-colors duration-200"
                  >
                    Ollama
                  </Link>
                </li>
                <li>
                  <Link
                  target="_blanck"
                  rel="noopener noreferrer"
                    href="https://www.langchain.com/"
                    className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                  >
                    LangChain
                  </Link>
                </li>
                <li>
                  <Link
                  target="_blanck"
                  rel="noopener noreferrer"
                    href="https://openai.com/"
                    className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                  >
                    OpenAI
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-prime dark:text-gray-600 uppercase tracking-wider">
              {t("moreAbout")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  target="_blanck"
                  rel="noopener noreferrer"
                  href="hhtps://www.coldbydefault.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200"
                >
                  ColdByDefault
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date().getFullYear()} beRich.Hub&#174;. {t("allRights")} © .
              <span className="text-xs text-gray-600">
                {" "}
                Dedicated to the one who sparked the journey - Stockholm, 2021.
              </span>
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://x.com/ccoldbydefault"
                target="_blanck"
                rel="noopener noreferrer"
                aria-label="x"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <span className="sr-only">X</span>
                <FaSquareXTwitter />
              </Link>
              <Link
                href="https://www.instagram.com/cold.by.default/#"
                target="_blanck"
                rel="noopener noreferrer"
                aria-label="instagram"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagramSquare />
              </Link>
              <Link
                href="https://github.com/ColdByDefault"
                target="_blanck"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yazan-a-a-465b44312/"
                target="_blanck"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link"
import { FaGithub, FaSquareXTwitter  } from "react-icons/fa6";
import { FaLinkedin, FaInstagramSquare  } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-prime">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="space-y-4">
                <h3 className="text-sm font-semibold text-prime dark:text-white uppercase tracking-wider">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/cookies"
                      className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy"
                      className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms"
                      className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
            </div>
          <div className="space-y-4">
              <h3 className="text-sm font-semibold text-prime dark:text-white uppercase tracking-wider">Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li>
                      <Link href="https://nextjs.org"
                        className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white 
                        transition-colors duration-200">
                        Next.js
                      </Link>
                    </li>
                    <li>
                      <Link href="https://react.dev"
                        className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                        React
                      </Link>
                    </li>
                    <li>
                      <Link href="https://ui.shadcn.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                        Shadcn-UI
                      </Link>
                    </li>
                    <li>
                      <Link href="https://vercel.com/"
                        className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                        Vercel
                      </Link>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li>
                      <Link href="https://ai-sdk.dev/docs/introduction"
                        className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                        Vercel AI SDK
                      </Link>
                    </li>
                    <li>
                      <Link href="https://ollama.com/"
                        className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white 
                        transition-colors duration-200">
                        Ollama
                      </Link>
                    </li>

                    <li>
                      <Link href="https://www.langflow.org/"
                        className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                        LangFlow
                      </Link>
                    </li>
                    <li>
                      <Link href="https://openai.com/"
                        className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                        OpenAI
                      </Link>
                    </li>
                  </ul>
               </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-prime dark:text-white uppercase tracking-wider">More about</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-prime dark:hover:text-white transition-colors duration-200">
                  ColdByDefault
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} beRich.Hub. All rights reserved.
              <span className="text-xs text-gray-600"> Stockholm - Sweden</span>
            </p>
            <div className="flex space-x-6">
              <Link href="#"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <FaSquareXTwitter />
              </Link>
              <Link href="#"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <FaInstagramSquare />
              </Link>
              <Link href="#"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <FaGithub />
              </Link>
              <Link href="#"
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

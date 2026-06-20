import { Text, clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    // Wrapper provides bottom padding so the glass panel floats
    <footer className="w-full px-4 sm:px-6 md:px-8 pb-8 pt-16 flex justify-center relative z-10">
      
      {/* The Grounding Glass Panel */}
      <div className="w-full max-w-[1440px] glass-panel p-10 md:p-16 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Brand & Mission */}
          <div className="max-w-sm">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold tracking-widest uppercase text-white hover:text-bruteks-accent transition-colors duration-300"
            >
              BRUTEKS
            </LocalizedClientLink>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed font-light">
              Enterprise-grade IT infrastructure and high-end digital asset creation. Built for performance, designed for impact.
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="flex gap-16 sm:gap-24">
            <div className="flex flex-col gap-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-white">
                Store
              </span>
              <ul className="flex flex-col gap-y-3 text-sm text-gray-400">
                <li>
                  <LocalizedClientLink href="/store" className="hover:text-bruteks-accent transition-colors">
                    All Products
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/account" className="hover:text-bruteks-accent transition-colors">
                    Client Portal
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-white">
                Legal
              </span>
              <ul className="flex flex-col gap-y-3 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-bruteks-accent transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-bruteks-accent transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <Text className="text-xs text-gray-500 tracking-wide">
            © {new Date().getFullYear()} Bruteks. All rights reserved.
          </Text>
          <Text className="text-xs text-gray-500">
            Powered by Medusa & Next.js
          </Text>
        </div>

      </div>
    </footer>
  )
}
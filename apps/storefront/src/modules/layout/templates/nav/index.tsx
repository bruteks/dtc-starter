import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    // Wrapper creates the floating gap at the top and centers the pill
    <div className="sticky top-4 inset-x-0 z-50 group px-4 sm:px-6 md:px-8 flex justify-center">
      
      {/* The Enterprise Glass Pill */}
      <header className="relative h-16 w-full max-w-[1440px] mx-auto transition-all duration-300 ease-out bg-bruteks-card backdrop-blur-glass border border-bruteks-border shadow-glass rounded-2xl">
        <nav className="text-white flex items-center justify-between w-full h-full px-6 text-sm font-semibold tracking-wide">
          
          {/* Left: Mobile / Side Menu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full flex items-center">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
          </div>

          {/* Center: Bruteks Brand Mark */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold tracking-widest hover:text-bruteks-accent transition-colors duration-300 uppercase"
              data-testid="nav-store-link"
            >
              BRUTEKS
            </LocalizedClientLink>
          </div>

          {/* Right: Account & Cart Actions */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-bruteks-accent transition-colors duration-300"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-bruteks-accent transition-colors duration-300 flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>

        </nav>
      </header>
    </div>
  )
}
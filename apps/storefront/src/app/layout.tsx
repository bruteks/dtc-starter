import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "styles/globals.css"

// Initialize Open Sans with a CSS variable
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    // Inject the font variable and switch the default mode to dark
    <html lang="en" className={`${openSans.variable} font-sans`} data-mode="dark">
      <body className="bg-bruteks-dark text-white antialiased min-h-screen">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { siteConfig } from "../../site.config"

export const metadata: Metadata = {
  title: { default: "Пантеон Наук — Дослідження акустики та ергономіки робочого простору", template: "%s | Пантеон Наук" },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  openGraph: { type: "website", locale: "uk_UA", siteName: siteConfig.name },
  robots: { index: true, follow: true },
  icons: { icon: "/images/favicon.svg" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head><script defer src="http://46.224.111.10:3100/script.js" data-website-id="1f8b4bdf-6804-4f45-8cc7-80c4f0b0567e"></script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

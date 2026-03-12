import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { siteConfig } from "../../site.config"
import { generateWebsiteJsonLd, generateOrganizationJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  title: { default: "Пантеон Наук — Дослідження акустики та ергономіки робочого простору", template: "%s | Пантеон Наук" },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  icons: { icon: siteConfig.favicon || "/images/favicon.svg" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale || "uk_UA",
    siteName: siteConfig.name,
    ...(siteConfig.ogImage && {
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    }),
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    ...(siteConfig.ogImage && { images: [siteConfig.ogImage] }),
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <script defer src="http://46.224.111.10:3100/script.js" data-website-id="1f8b4bdf-6804-4f45-8cc7-80c4f0b0567e"></script>
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([generateWebsiteJsonLd(), generateOrganizationJsonLd()]),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

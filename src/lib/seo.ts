import type { Metadata } from "next"
import { siteConfig } from "../../site.config"

interface PageMetaProps {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function generatePageMetadata({ title, description, path, keywords }: PageMetaProps): Metadata {
  const url = `${siteConfig.url}${path}`
  return {
    title,
    description,
    keywords: keywords || siteConfig.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "uk_UA",
    },
    robots: { index: true, follow: true },
  }
}

export function generateArticleJsonLd(post: { title: string; excerpt: string; publishedAt: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}/`,
  }
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Київ",
      addressCountry: "UA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "editorial",
    },
  }
}

import type { Metadata } from 'next'
import { siteConfig } from '../../site.config'
import type { BlogPost } from './blog'

interface PageMetadataInput {
  title: string
  description: string
  path?: string
  keywords?: string[]
  ogImage?: string
}

export function generatePageMetadata(page: PageMetadataInput): Metadata {
  const url = page.path ? `${siteConfig.url}${page.path}` : siteConfig.url
  const ogImage = page.ogImage
    ? `${siteConfig.url}${page.ogImage}`
    : siteConfig.ogImage
      ? `${siteConfig.url}${siteConfig.ogImage}`
      : undefined

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale || 'uk_UA',
      type: 'website',
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630 }],
      }),
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title: page.title,
      description: page.description,
      ...(ogImage && { images: [ogImage] }),
    },
  }
}

export function generateArticleJsonLd(post: BlogPost): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.publishedAt,
    inLanguage: siteConfig.language,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}/`,
    },
    keywords: post.keywords?.join(', '),
  }
}

export function generateWebsiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }
}

export function generateOrganizationJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  }
}

import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { siteConfig } from "../../site.config"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const blogUrls = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}/`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/blog/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogUrls,
  ]
}

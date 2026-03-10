import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts, getPostBySlug, getPostBySlugWithHtml } from "@/lib/blog"
import { generatePageMetadata, generateArticleJsonLd } from "@/lib/seo"
import PostContent from "@/components/blog/PostContent"

interface PageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return generatePageMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}/`,
    keywords: post.keywords,
  })
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlugWithHtml(slug)
  const jsonLd = generateArticleJsonLd(post)
  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="w-full max-w-3xl mx-auto px-4">
        <div className="mb-6">
          <Link href="/blog/" className="text-[var(--primary)] text-sm font-medium hover:underline no-underline">{"\u2190 Назад до публікацій"}</Link>
        </div>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <header className="mb-8">
            {post.category && <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">{post.category}</span>}
            <h1 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4" style={{ fontFamily: "Merriweather, serif" }}>{post.title}</h1>
            <time className="text-[var(--text-muted)] text-sm" dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </header>
          {post.htmlContent && <PostContent htmlContent={post.htmlContent} />}
        </div>
      </article>
    </div>
  )
}

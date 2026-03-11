import type { Metadata } from "next"
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
    <main className="max-w-3xl mx-auto px-4 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="mb-8">
          {post.category && (
            <span className="text-xs text-[var(--accent,var(--primary))] uppercase tracking-wider font-bold">{post.category}</span>
          )}
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{post.title}</h1>
          <time className="text-[var(--text-muted)] mt-2 block text-sm" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
          </time>
        </header>
        {post.image && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              width={768}
              height={432}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        {post.htmlContent && <PostContent htmlContent={post.htmlContent} />}
      </article>
    </main>
  )
}

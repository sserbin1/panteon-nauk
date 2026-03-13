import type { Metadata } from "next"
import { getAllPosts, getPostBySlug, getPostBySlugWithHtml } from "@/lib/blog"
import { generatePageMetadata, generateArticleJsonLd } from "@/lib/seo"
import Link from "next/link"

interface PageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return generatePageMetadata({
    ogType: 'article',
    ogImage: post.image || undefined,
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
  const allPosts = getAllPosts()
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 5)

  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--text-muted)] mb-6">
          <Link href="/" className="hover:text-[var(--primary)] no-underline text-[var(--text-muted)]">Головна</Link>
          <span className="mx-2">→</span>
          <Link href="/blog/" className="hover:text-[var(--primary)] no-underline text-[var(--text-muted)]">Публікації</Link>
          <span className="mx-2">→</span>
          <span className="text-[var(--text)]">{post.title.substring(0, 40)}…</span>
        </nav>

        {/* Academic 2-column layout */}
        <div className="academic-layout">
          {/* Main column — article */}
          <article className="academic-layout__main">
            {/* Article header */}
            <header className="mb-8">
              {post.category && (
                <span className="text-xs px-2 py-1 rounded bg-[var(--bg-alt)] text-[var(--text-muted)] border border-[var(--border)] mb-3 inline-block">
                  {post.category}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.2 }}>
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                <time dateTime={String(post.publishedAt)}>
                  {new Date(post.publishedAt).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
                </time>
              </div>
              <div className="section-rule mt-4" />
            </header>

            {/* Key finding */}
            {post.excerpt && (
              <div className="key-finding-box mb-8">
                <p className="text-sm m-0"><strong>Ключовий висновок:</strong> {post.excerpt}</p>
              </div>
            )}

            {/* Article image */}
            {post.image && (
              <div className="mb-8 overflow-hidden border border-[var(--border)]">
                <img
                  src={post.image}
                  alt={post.title}
                  width={768}
                  height={432}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Article content — academic prose */}
            {post.htmlContent && (
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[var(--text)] prose-headings:border-b prose-headings:border-[var(--border)] prose-headings:pb-2 prose-a:text-[var(--primary)] prose-blockquote:border-l-4 prose-blockquote:border-[var(--primary)] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[var(--text-muted)] prose-li:marker:text-[var(--primary)]"
                dangerouslySetInnerHTML={{ __html: post.htmlContent }}
              />
            )}
          </article>

          {/* Sidebar — metadata & related */}
          <aside className="academic-layout__sidebar">
            {/* Article metadata */}
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>Метадані</h3>
              <div className="section-rule mb-3" />
              <dl className="text-sm space-y-2">
                <div>
                  <dt className="text-[var(--text-muted)]">Дата публікації</dt>
                  <dd className="font-medium text-[var(--text)] m-0">
                    {new Date(post.publishedAt).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
                  </dd>
                </div>
                {post.category && (
                  <div>
                    <dt className="text-[var(--text-muted)]">Категорія</dt>
                    <dd className="font-medium text-[var(--text)] m-0">{post.category}</dd>
                  </div>
                )}
                {post.keywords && post.keywords.length > 0 && (
                  <div>
                    <dt className="text-[var(--text-muted)]">Ключові слова</dt>
                    <dd className="m-0">
                      <div className="flex flex-wrap gap-1 mt-1">
                        {post.keywords.slice(0, 5).map((kw: string) => (
                          <span key={kw} className="text-xs px-2 py-0.5 bg-[var(--bg-alt)] border border-[var(--border)] rounded text-[var(--text-muted)]">{kw}</span>
                        ))}
                      </div>
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="section-rule mb-6" />

            {/* Related publications */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>Пов&apos;язані публікації</h3>
              <div className="section-rule mb-3" />
              <ul className="list-none p-0 m-0 space-y-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}/`} className="text-sm text-[var(--text)] hover:text-[var(--primary)] no-underline transition-colors leading-snug block">
                      {p.title}
                    </Link>
                    <time className="text-xs text-[var(--text-muted)]" dateTime={String(p.publishedAt)}>
                      {new Date(p.publishedAt).toLocaleDateString("uk-UA", { year: "numeric", month: "2-digit", day: "2-digit" })}
                    </time>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

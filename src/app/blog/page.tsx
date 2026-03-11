import { getAllPosts } from "@/lib/blog"
import { generatePageMetadata } from "@/lib/seo"
import Link from "next/link"

export const metadata = generatePageMetadata({
  title: "Публікації",
  description: "Наукові статті та дослідження у сфері акустики офісних просторів, звукоізоляційних кабін та ергономіки робочого середовища.",
  path: "/blog/",
  keywords: ["акустичні кабіни для офісу", "звукоізоляційні кабіни", "офісні кабіни", "дослідження акустики"],
})

export default function BlogListPage() {
  const posts = getAllPosts()
  const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))]

  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Journal-style header */}
        <div className="text-left mb-2">
          <h1 className="text-4xl font-bold text-[var(--text)]" style={{ fontFamily: "var(--font-heading)" }}>Публікації</h1>
        </div>
        <div className="section-rule mb-6" />
        <div className="key-finding-box mb-10">
          <p className="text-sm text-[var(--text-muted)] m-0">
            <strong className="text-[var(--text)]">Архів досліджень:</strong> {posts.length} наукових публікацій у сфері акустики, звукоізоляції та ергономіки офісних просторів.
          </p>
        </div>

        {/* Academic 2-column layout */}
        <div className="academic-layout">
          {/* Main column — publication table */}
          <div className="academic-layout__main">
            <table className="pub-table">
              <thead>
                <tr>
                  <th style={{ width: "120px" }}>Дата</th>
                  <th>Публікація</th>
                  <th style={{ width: "140px" }}>Категорія</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post, i) => (
                  <tr key={post.slug}>
                    <td className="text-sm text-[var(--text-muted)] whitespace-nowrap">
                      {new Date(post.publishedAt).toLocaleDateString("uk-UA", { year: "numeric", month: "2-digit", day: "2-digit" })}
                    </td>
                    <td>
                      {post.image && <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded mb-2" loading="lazy" />}
                      <Link href={`/blog/${post.slug}/`} className="text-[var(--text)] hover:text-[var(--primary)] no-underline font-medium transition-colors">
                        {post.title}
                      </Link>
                      {post.excerpt && (
                        <p className="text-xs text-[var(--text-muted)] mt-1 mb-0 line-clamp-2">{post.excerpt}</p>
                      )}
                    </td>
                    <td>
                      {post.category && (
                        <span className="text-xs px-2 py-1 rounded bg-[var(--bg-alt)] text-[var(--text-muted)] border border-[var(--border)]">
                          {post.category}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sidebar — categories & info */}
          <aside className="academic-layout__sidebar">
            <div className="mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3" style={{ fontFamily: "var(--font-heading)" }}>Категорії</h3>
              <div className="section-rule mb-3" />
              <ul className="list-none p-0 m-0 space-y-2">
                {categories.map((cat) => (
                  <li key={cat} className="text-sm text-[var(--text-muted)] flex justify-between">
                    <span>{cat}</span>
                    <span className="text-[var(--primary)] font-mono text-xs">{posts.filter((p) => p.category === cat).length}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="section-rule mb-6" />

            <div className="data-box data-box--green">
              <div className="data-box__value">{posts.length}</div>
              <div className="data-box__label">публікацій</div>
            </div>

            <div className="pull-quote mt-6">
              <p>«Акустичний комфорт — це не розкіш, а необхідність для продуктивної роботи»</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

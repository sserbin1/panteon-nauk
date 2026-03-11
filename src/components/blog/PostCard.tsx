import Link from "next/link"
import type { BlogPost } from "@/lib/blog"

interface PostCardProps { post: BlogPost }

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card group overflow-hidden">
      {post.image && (
        <Link href={`/blog/${post.slug}/`} className="block overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            width={600}
            height={338}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
      )}
      <div className="p-6">
        {post.category && (
          <span className="text-xs text-[var(--accent,var(--primary))] uppercase tracking-wider font-bold">{post.category}</span>
        )}
        <h2 className="text-lg font-bold mt-2">
          <Link href={`/blog/${post.slug}/`} className="text-[var(--text)] group-hover:text-[var(--accent,var(--primary))] transition-colors no-underline">{post.title}</Link>
        </h2>
        <p className="text-sm text-[var(--text-muted)] mt-2 line-clamp-3">{post.excerpt}</p>
        <time className="text-xs text-[var(--text-light,var(--text-muted))] mt-4 block" dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString("uk-UA", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </div>
    </article>
  )
}

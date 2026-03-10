import { getAllPosts } from "@/lib/blog"
import { generatePageMetadata } from "@/lib/seo"
import PostCard from "@/components/blog/PostCard"

export const metadata = generatePageMetadata({
  title: "Публікації",
  description: "Наукові статті та дослідження у сфері акустики офісних просторів, звукоізоляційних кабін та ергономіки робочого середовища.",
  path: "/blog/",
  keywords: ["акустичні кабіни для офісу", "звукоізоляційні кабіни", "офісні кабіни", "дослідження акустики"],
})

export default function BlogListPage() {
  const posts = getAllPosts()
  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h1 className="section-title mb-4">{"Наші "}<span className="gradient-text">{"публікації"}</span></h1>
        <p className="section-subtitle">{"Наукові статті, дослідження та практичні рекомендації щодо акустики та ергономіки офісних просторів"}</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {posts.map((post) => (<PostCard key={post.slug} post={post} />))}
        </div>
      </div>
    </div>
  )
}

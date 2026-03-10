import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo"

export const metadata = generatePageMetadata({
  title: "Дослідження — наукові статті про акустику та ергономіку",
  description: "Наукові дослідження впливу шуму на продуктивність, аналіз акустичних матеріалів та ергономіка робочих місць.",
  path: "/doslidzhennya/",
  keywords: ["дослідження акустики", "вплив шуму на продуктивність", "акустичні матеріали", "ергономіка робочого місця"],
})

const sectionArticles = [
  { slug: "vplyv-shumu-na-produktyvnist", title: "Вплив офісного шуму на продуктивність", description: "Огляд наукових досліджень Корнелського університету, ВООЗ та інших \u2014 як шум впливає на когнітивні функції та стрес-гормони." },
  { slug: "akustychni-materialy", title: "Акустичні матеріали", description: "Порівняльний аналіз поглиначів, бар\u2019єрів, демпферів та інноваційних матеріалів у звукоізоляційних рішеннях." },
  { slug: "erghonomika-robochykh-mists", title: "Ергономіка робочих місць", description: "Як простір впливає на здоров\u2019я та ефективність. Дослідження Harvard Business Review та нейронаук." },
]

export default function DoslidzhennyaPage() {
  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[var(--primary-light)] rounded-full text-sm font-medium mb-4 text-[var(--primary)]">Науковий розділ</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            {"Наукові "}
            <span className="gradient-text">{"дослідження"}</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Аналітичні та науково-популярні матеріали на перетині акустики, ергономіки та організації сучасних робочих середовищ.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
          {sectionArticles.map((article, i) => (
            <Link key={article.slug} href={`/blog/${article.slug}/`} className="card no-underline group">
              <div className="p-6 md:p-8 flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                  <span className="text-lg font-bold text-[var(--primary)]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2 text-[var(--text)] group-hover:text-[var(--primary)] transition-colors" style={{ fontFamily: "Merriweather, serif" }}>
                    {article.title}
                  </h2>
                  <p className="text-[var(--text-muted)] leading-relaxed">{article.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/blog/" className="btn-secondary">{"Всі публікації"}</Link>
        </div>
      </div>
    </div>
  )
}

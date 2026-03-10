import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo"

export const metadata = generatePageMetadata({
  title: "Акустика офісу — дослідження та рішення",
  description: "Наукові статті про акустичні кабіни для офісу, звукоізоляційні кабіни, офісні кабіни та кабіни для переговорів.",
  path: "/akustyka-ofisu/",
  keywords: ["акустичні кабіни для офісу", "звукоізоляційні кабіни", "офісні кабіни", "кабіни для переговорів"],
})

const sectionArticles = [
  { slug: "akustychni-kabiny-dlya-ofisu", title: "Акустичні кабіни для офісу", description: "Наукове обґрунтування та практичне застосування акустичних кабін у сучасних офісних просторах." },
  { slug: "zvukoizolyatsiyni-kabiny", title: "Звукоізоляційні кабіни", description: "Принципи роботи, матеріали та ефективність звукоізоляційних кабін для офісу." },
  { slug: "ofisni-kabiny", title: "Офісні кабіни", description: "Еволюція від телефонних будок до розумних робочих просторів. Класифікація та ROI." },
  { slug: "kabiny-dlya-perehovoriv", title: "Кабіни для переговорів", description: "Модульні рішення для конфіденційного ділового спілкування замість стаціонарних кімнат." },
]

export default function AkustykaOfisuPage() {
  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[var(--primary-light)] rounded-full text-sm font-medium mb-4 text-[var(--primary)]">Основний розділ</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            {"Акустика "}
            <span className="gradient-text">{"офісу"}</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Дослідження впливу шуму на продуктивність та аналіз сучасних акустичних рішень для офісних просторів — від звукоізоляційних кабін до комплексного акустичного дизайну.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {sectionArticles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}/`} className="card no-underline group">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold mb-3 text-[var(--text)] group-hover:text-[var(--primary)] transition-colors" style={{ fontFamily: "Merriweather, serif" }}>
                  {article.title}
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">{article.description}</p>
                <span className="text-[var(--primary)] font-semibold text-sm">{"Читати дослідження \u2192"}</span>
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

import Link from "next/link"
import { generatePageMetadata } from "@/lib/seo"

export const metadata = generatePageMetadata({
  title: "Практичні рішення — огляди та вибір акустичних кабін",
  description: "Огляди акустичних кабін для офісу, покрокові гіди з вибору та реальні кейси впровадження в українських офісах.",
  path: "/praktychni-rishennya/",
  keywords: ["огляд акустичних кабін", "як обрати офісну кабіну", "кейси впровадження", "офісні кабіни"],
})

const sectionArticles = [
  { slug: "ohlyad-akustychnykh-kabin", title: "Огляд акустичних кабін 2025", description: "Порівняння характеристик, матеріалів, систем вентиляції та комплектації провідних моделей на ринку." },
  { slug: "yak-obraty-ofisnu-kabinu", title: "Як обрати офісну кабіну", description: "Покроковий гід від науковців: від визначення потреби до перевірки сертифікатів." },
  { slug: "vprovadzhennya-ta-keysy", title: "Кейси впровадження", description: "Реальні приклади встановлення акустичних кабін в українських IT-компаніях, банках та коворкінгах." },
]

export default function PraktychniRishennyaPage() {
  return (
    <div className="pt-24 pb-20 bg-[var(--background)]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[var(--accent-light)] rounded-full text-sm font-medium mb-4 text-[var(--accent-dark)]">Комерційний розділ</span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "Merriweather, serif" }}>
            {"Практичні "}
            <span className="gradient-text">{"рішення"}</span>
          </h1>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Від теорії до практики: огляди реальних продуктів, покрокові інструкції з вибору та досвід впровадження акустичних рішень в українських офісах.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 max-w-4xl mx-auto">
          {sectionArticles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}/`} className="card no-underline group">
              <div className="p-6 md:p-8">
                <h2 className="text-xl font-bold mb-3 text-[var(--text)] group-hover:text-[var(--primary)] transition-colors" style={{ fontFamily: "Merriweather, serif" }}>
                  {article.title}
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">{article.description}</p>
                <span className="text-[var(--primary)] font-semibold text-sm">{"Читати \u2192"}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/akustyka-ofisu/" className="btn-primary" style={{ marginRight: "1rem" }}>{"Акустика офісу"}</Link>
          <Link href="/doslidzhennya/" className="btn-secondary">{"Дослідження"}</Link>
        </div>
      </div>
    </div>
  )
}

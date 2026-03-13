import Link from "next/link"
import type { Metadata } from "next"
import { siteConfig } from "../../../site.config"

export const metadata: Metadata = {
  title: `Практичні рішення — ${siteConfig.name}`,
  description:
    "Конкретні акустичні рішення та рекомендації для сучасних офісів",
}

const articles = [
  {
    num: "01",
    title: "Акустичні кабіни для офісу: гід",
    href: "/blog/akustychni-kabiny-dlya-ofisu/",
    image: "/images/blog/akustychni-kabiny-dlya-ofisu.webp",
    summary:
      "Повний посібник з вибору акустичних кабін: класифікація за типом, порівняння характеристик звукоізоляції та рекомендації щодо розміщення.",
  },
  {
    num: "02",
    title: "Кабіни для переговорів",
    href: "/blog/kabiny-dlya-perehovoriv/",
    image: "/images/blog/kabiny-dlya-perehovoriv.webp",
    summary:
      "Огляд рішень для забезпечення приватності переговорів: від компактних телефонних будок до повнорозмірних конференц-модулів з акустичною ізоляцією.",
  },
  {
    num: "03",
    title: "Вентиляція в офісних кабінах",
    href: "/blog/ventylyatsiya-v-akustychniy-kabini/",
    image: "/images/blog/ventylyatsiya-v-akustychniy-kabini.webp",
    summary:
      "Інженерні аспекти забезпечення повітрообміну в герметичних акустичних конструкціях без компромісу у звукоізоляційних характеристиках.",
  },
  {
    num: "04",
    title: "Як встановити офісну кабіну",
    href: "/blog/yak-vstanovyty-ofisnu-kabinu/",
    image: "/images/blog/yak-vstanovyty-ofisnu-kabinu.webp",
    summary:
      "Покрокова інструкція з монтажу: підготовка приміщення, вимоги до підлоги, електропідключення та введення в експлуатацію.",
  },
  {
    num: "05",
    title: "Zoom-кабіна для офісу",
    href: "/blog/zoom-kabina-dlya-ofisu/",
    image: "/images/blog/zoom-kabina-dlya-ofisu.webp",
    summary:
      "Спеціалізовані рішення для відеоконференцій: акустичні вимоги, освітлення, камера та мікрофонне обладнання для якісного зв'язку.",
  },
]

export default function PraktychniRishennyaPage() {
  return (
    <main>
      {/* ================================================================
          HERO — Section title with academic styling
          ================================================================ */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-4xl) 0 var(--space-3xl)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--text-light)",
              marginBottom: "var(--space-lg)",
            }}
          >
            Розділ дослідницького порталу
          </p>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              color: "var(--text)",
              maxWidth: "720px",
              marginBottom: "var(--space-xl)",
              letterSpacing: "-0.02em",
            }}
          >
            Практичні рішення
          </h1>
          <div className="my-8 overflow-hidden border border-[var(--border)]">
            <img src="/images/office-acoustics.webp" alt="Практичні рішення акустики офісу" width={1200} height={675} className="w-full h-auto object-cover" loading="lazy" />
          </div>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-lg)",
              lineHeight: 1.7,
              color: "var(--text-muted)",
              maxWidth: "600px",
              marginBottom: "var(--space-2xl)",
            }}
          >
            Конкретні акустичні рішення та рекомендації для сучасних офісів.
            Від вибору обладнання до монтажу та введення в експлуатацію.
          </p>

          <div className="key-finding-box" style={{ maxWidth: "600px" }}>
            <p>Практичний результат</p>
            <p>
              Впровадження акустичних кабін знижує рівень відволікань на{" "}
              <strong>51%</strong> та підвищує задоволеність працівників
              робочим середовищем на <strong>37%</strong> за даними
              post-occupancy досліджень.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          ARTICLES LIST — Section-rule numbered cards
          ================================================================ */}
      <section
        style={{
          background: "var(--background)",
          padding: "var(--space-3xl) 0",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-rule">01 Посібники та рекомендації</div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-lg)",
            }}
          >
            {articles.map((article) => (
              <Link
                key={article.num}
                href={article.href}
                className="no-underline"
                style={{ display: "block" }}
              >
                <div
                  className="card"
                  style={{
                    padding: "var(--space-xl)",
                    display: "flex",
                    gap: "var(--space-lg)",
                    alignItems: "flex-start",
                    transition: "border-color 0.15s ease",
                  }}
                >
                  {article.image && <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-4" loading="lazy" />}
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-2xl)",
                      fontWeight: 900,
                      color: "var(--primary)",
                      lineHeight: 1.2,
                      flexShrink: 0,
                      width: "2.5rem",
                    }}
                  >
                    {article.num}
                  </span>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "var(--text-xl)",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: "var(--space-xs)",
                        lineHeight: 1.3,
                      }}
                    >
                      {article.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        lineHeight: 1.7,
                        color: "var(--text-muted)",
                        margin: 0,
                      }}
                    >
                      {article.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CROSS-NAVIGATION
          ================================================================ */}
      <section
        style={{
          background: "var(--surface)",
          padding: "var(--space-3xl) 0 var(--space-4xl)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-rule">02 Інші розділи</div>

          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <Link href="/akustyka-ofisu/" className="no-underline">
              <div className="card" style={{ padding: "var(--space-xl)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    color: "var(--primary)",
                    marginBottom: "var(--space-xs)",
                    lineHeight: 1.3,
                  }}
                >
                  Акустика офісу
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.6,
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  Дослідження впливу шуму на продуктивність та когнітивні
                  функції працівників.
                </p>
              </div>
            </Link>

            <Link href="/doslidzhennya/" className="no-underline">
              <div className="card" style={{ padding: "var(--space-xl)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    color: "var(--primary)",
                    marginBottom: "var(--space-xs)",
                    lineHeight: 1.3,
                  }}
                >
                  Дослідження
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.6,
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  Наукові публікації та дослідження у сфері акустики та
                  ергономіки робочих просторів.
                </p>
              </div>
            </Link>

            <Link href="/blog/" className="no-underline">
              <div className="card" style={{ padding: "var(--space-xl)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    color: "var(--primary)",
                    marginBottom: "var(--space-xs)",
                    lineHeight: 1.3,
                  }}
                >
                  Усі публікації
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.6,
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  Повний архів статей та матеріалів порталу {siteConfig.name}.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

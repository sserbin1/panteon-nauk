import Link from "next/link"
import type { Metadata } from "next"
import { siteConfig } from "../../../site.config"

export const metadata: Metadata = {
  title: `Акустика офісу — ${siteConfig.name}`,
  description:
    "Дослідження впливу шуму на продуктивність та когнітивні функції працівників",
}

const articles = [
  {
    num: "01",
    title: "Шум у офісі: 7 способів боротьби",
    href: "/blog/shum-u-ofisi-7-sposobiv-borotby/",
    summary:
      "Практичні методи зниження рівня шуму у відкритих офісних просторах — від архітектурних рішень до індивідуальних засобів захисту.",
  },
  {
    num: "02",
    title: "Основи акустичного дизайну",
    href: "/blog/osnovy-akustychnoho-dyzainu/",
    summary:
      "Фундаментальні принципи акустичного проєктування комерційних приміщень: реверберація, поглинання, ізоляція та маскування.",
  },
  {
    num: "03",
    title: "Децибели простими словами",
    href: "/blog/detsybely-prostymy-slovamy/",
    summary:
      "Доступне пояснення логарифмічної шкали вимірювання звуку та її практичне значення для оцінки акустичного середовища.",
  },
  {
    num: "04",
    title: "Норми шуму в офісі: Україна",
    href: "/blog/normy-shumu-v-ofisi-ukrayina/",
    summary:
      "Огляд чинних нормативних документів України щодо допустимих рівнів шуму на робочих місцях та санітарних вимог.",
  },
]

export default function AkustykaOfisuPage() {
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
            Акустика офісу
          </h1>

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
            Дослідження впливу шуму на продуктивність та когнітивні функції
            працівників. Аналіз акустичних параметрів сучасних офісних просторів.
          </p>

          <div className="key-finding-box" style={{ maxWidth: "600px" }}>
            <p>Ключовий факт</p>
            <p>
              Рівень шуму у відкритих офісах у середньому становить{" "}
              <strong>60-65 дБ</strong>, що на 15-20 дБ перевищує рекомендований
              рівень для інтелектуальної роботи згідно з ДСН 3.3.6.037-99.
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
          <div className="section-rule">01 Публікації розділу</div>

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
          SIDEBAR-STYLE NAVIGATION
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

            <Link href="/praktychni-rishennya/" className="no-underline">
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
                  Практичні рішення
                </h3>
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    lineHeight: 1.6,
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  Конкретні акустичні рішення та рекомендації для сучасних
                  офісів.
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

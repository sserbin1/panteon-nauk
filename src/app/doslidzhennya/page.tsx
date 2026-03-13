import Link from "next/link"
import type { Metadata } from "next"
import { siteConfig } from "../../../site.config"

export const metadata: Metadata = {
  title: `Дослідження — ${siteConfig.name}`,
  description:
    "Наукові публікації та дослідження у сфері акустики та ергономіки робочих просторів",
}

const articles = [
  {
    num: "01",
    title: "Акустичний комфорт: шум та здоров'я",
    href: "/blog/akustychni-materialy/",
    image: "/images/blog/akustychni-materialy.webp",
    summary:
      "Систематичний огляд впливу хронічного шумового навантаження на фізичне та психічне здоров'я офісних працівників. Аналіз кортизолових маркерів стресу.",
  },
  {
    num: "02",
    title: "Як з'явилися відкриті офіси",
    href: "/blog/istoria-akustyky/",
    image: "/images/blog/istoria-akustyky.webp",
    summary:
      "Історичний аналіз еволюції офісних просторів від Bürolandschaft 1950-х до сучасних концепцій activity-based working та їх акустичні наслідки.",
  },
  {
    num: "03",
    title: "Ергономіка робочого місця",
    href: "/blog/erghonomika-robochykh-mists/",
    image: "/images/blog/erghonomika-robochykh-mists.webp",
    summary:
      "Комплексний підхід до організації робочого місця з урахуванням антропометрії, освітлення, мікроклімату та акустичних параметрів згідно ISO 9241.",
  },
  {
    num: "04",
    title: "ROI акустичних кабін",
    href: "/blog/ohlyad-akustychnykh-kabin/",
    image: "/images/blog/ohlyad-akustychnykh-kabin.webp",
    summary:
      "Кількісна оцінка повернення інвестицій у акустичні рішення: методологія розрахунку, кейси впровадження та порівняльний аналіз витрат.",
  },
]

export default function DoslidzhennyaPage() {
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
            Дослідження
          </h1>
          <div className="my-8 overflow-hidden border border-[var(--border)]">
            <img src="/images/research-data.webp" alt="Аналіз акустичних даних" width={1200} height={675} className="w-full h-auto object-cover" loading="lazy" />
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
            Наукові публікації та дослідження у сфері акустики та ергономіки
            робочих просторів. Огляди літератури, метааналізи та оригінальні
            дослідження.
          </p>

          <div className="key-finding-box" style={{ maxWidth: "600px" }}>
            <p>Методологія</p>
            <p>
              Усі публікації базуються на рецензованих джерелах та відповідають
              принципам <strong>evidence-based design</strong>. Середній індекс
              цитування — 12.4 на статтю.
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
          <div className="section-rule">01 Наукові публікації</div>

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

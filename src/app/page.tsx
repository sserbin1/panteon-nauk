import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "https://panteon-nauk.org.ua/" },
}

import Link from "next/link"
import { siteConfig } from "../../site.config"
import { getAllPosts } from "@/lib/blog"
import ContactForm from "@/components/forms/ContactForm"

const estimateReadingTime = (excerpt: string) =>
  Math.max(5, Math.ceil(excerpt.length / 50))

const researchDirections = [
  {
    num: "01",
    title: "Акустика офісу",
    description:
      "Дослідження впливу шумового забруднення на когнітивні функції працівників. Аналіз частотного спектру типових офісних шумів та їх кореляція з продуктивністю.",
  },
  {
    num: "02",
    title: "Звукоізоляція",
    description:
      "Порівняльний аналіз сучасних матеріалів та конструктивних рішень для зниження передачі повітряного та ударного шуму в комерційних приміщеннях.",
  },
  {
    num: "03",
    title: "Ергономіка",
    description:
      "Оптимізація робочого середовища з урахуванням антропометричних даних. Вплив освітлення, температури та організації простору на здоров'я та ефективність.",
  },
  {
    num: "04",
    title: "Продуктивність",
    description:
      "Кількісна оцінка взаємозв'язку між фізичними параметрами робочого середовища та показниками продуктивності. Метааналіз досліджень за 2018\u20132024 рр.",
  },
]

const solutionCards = [
  {
    title: "Акустичні панелі",
    text: "Підбір та розміщення звукопоглинальних матеріалів для оптимального RT60.",
  },
  {
    title: "Зонування простору",
    text: "Планування тихих зон, зон колаборації та транзитних зон в офісі.",
  },
  {
    title: "Звукомаскування",
    text: "Системи білого та рожевого шуму для підвищення приватності розмов.",
  },
  {
    title: "Ергономічний аудит",
    text: "Комплексна оцінка робочих місць за стандартами ISO 9241 та EN 12464.",
  },
]

const keyFindings = [
  "Зниження рівня шуму на 10 дБ підвищує точність виконання задач на 18%",
  "Оптимальна температура 21\u201323\u00b0C знижує кількість помилок на 44%",
  "Природне освітлення покращує якість сну працівників на 46 хвилин",
]

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6)

  return (
    <main>
      {/* ================================================================
          SECTION 1: TEXT-FIRST HERO — White background, no image
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
            Дослідницький портал
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
            Наука про акустику та ергономіку робочого простору
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
            Аналітичні публікації, результати досліджень та практичні
            рекомендації для створення продуктивного робочого середовища.
          </p>

          {/* Key research highlight box */}
          <div className="key-finding-box" style={{ maxWidth: "600px" }}>
            <p>Ключове дослідження</p>
            <p>
              Офісний шум знижує продуктивність на <strong>66%</strong> при
              виконанні задач, що потребують концентрації. Комплексний підхід до
              акустичного проєктування дозволяє повернути до 40% втраченої
              ефективності.
            </p>
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{ marginTop: "var(--space-2xl)" }}
          >
            <Link href="/doslidzhennya/" className="btn-primary no-underline">
              Дослідження
            </Link>
            <Link href="/blog/" className="btn-secondary no-underline">
              Усі публікації
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: DATA STRIP — 4 semantic-colored data boxes
          ================================================================ */}
      <section
        style={{
          background: "var(--background)",
          padding: "0 0 var(--space-3xl)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-rule">01 Ключові дані</div>

          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {/* Red: problem stat */}
            <div className="data-box data-box-red">
              <div className="data-box-value">70%</div>
              <div className="data-box-label">Працівників скаржаться</div>
              <div className="data-box-detail">
                на рівень шуму у відкритих офісах
              </div>
            </div>

            {/* Amber: caution stat */}
            <div className="data-box data-box-amber">
              <div className="data-box-value">86 хв</div>
              <div className="data-box-label">Втрачено щодня</div>
              <div className="data-box-detail">
                через переривання та відволікання шумом
              </div>
            </div>

            {/* Green: optimal range */}
            <div className="data-box data-box-green">
              <div className="data-box-value">35-60 дБ</div>
              <div className="data-box-label">Оптимальний рівень</div>
              <div className="data-box-detail">
                фонового шуму для концентрації
              </div>
            </div>

            {/* Green: improvement stat */}
            <div className="data-box data-box-green">
              <div className="data-box-value">23%</div>
              <div className="data-box-label">Зростання продуктивності</div>
              <div className="data-box-detail">
                після акустичної оптимізації офісу
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: ACADEMIC TWO-COLUMN LAYOUT
          ================================================================ */}
      <section style={{ padding: "var(--space-2xl) 0 var(--space-3xl)" }}>
        <div className="academic-layout">
          {/* ── MAIN COLUMN (65%) ── */}
          <div className="academic-layout-main">
            {/* Research Directions */}
            <div className="section-rule">02 Напрямки досліджень</div>

            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xl)" }}>
              {researchDirections.map((dir) => (
                <div
                  key={dir.num}
                  style={{
                    display: "flex",
                    gap: "var(--space-lg)",
                    alignItems: "flex-start",
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
                    {dir.num}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "var(--text-xl)",
                        fontWeight: 700,
                        color: "var(--text)",
                        marginBottom: "var(--space-xs)",
                        lineHeight: 1.3,
                      }}
                    >
                      {dir.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        lineHeight: 1.7,
                        color: "var(--text-muted)",
                        margin: 0,
                      }}
                    >
                      {dir.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Practical Solutions — 2x2 grid */}
            <div className="section-rule">03 Практичні рішення</div>

            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              }}
            >
              {solutionCards.map((card) => (
                <div
                  key={card.title}
                  className="card"
                  style={{ padding: "var(--space-lg)" }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-base)",
                      fontWeight: 700,
                      color: "var(--primary)",
                      marginBottom: "var(--space-sm)",
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      lineHeight: 1.6,
                      color: "var(--text-muted)",
                      margin: 0,
                    }}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SIDEBAR (35%) ── */}
          <aside className="academic-layout-sidebar">
            {/* Site Navigation */}
            <nav className="sidebar-nav" style={{ marginBottom: "var(--space-2xl)" }}>
              <div className="sidebar-nav-title">Навігація по сайту</div>
              <ul>
                <li>
                  <Link href="/akustyka-ofisu/">Акустика офісу</Link>
                </li>
                <li>
                  <Link href="/doslidzhennya/">Дослідження</Link>
                </li>
                <li>
                  <Link href="/praktychni-rishennya/">Практичні рішення</Link>
                </li>
                <li>
                  <Link href="/blog/">Усі публікації</Link>
                </li>
                <li>
                  <Link href="/#kontakty">Контакти</Link>
                </li>
              </ul>
            </nav>

            {/* Key Findings */}
            <div style={{ marginBottom: "var(--space-2xl)" }}>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--text-light)",
                  marginBottom: "var(--space-md)",
                  paddingBottom: "var(--space-sm)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                Ключові знахідки
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-md)",
                }}
              >
                {keyFindings.map((finding, i) => (
                  <div key={i} className="key-finding-box" style={{ margin: 0 }}>
                    <p style={{ display: "none" }}>Факт</p>
                    <p>{finding}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Articles */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--text-light)",
                  marginBottom: "var(--space-md)",
                  paddingBottom: "var(--space-sm)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                Популярне
              </div>
              <ol
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  counterReset: "popular",
                }}
              >
                {posts.slice(0, 3).map((post) => (
                  <li
                    key={post.slug}
                    style={{
                      counterIncrement: "popular",
                      paddingBottom: "var(--space-sm)",
                      marginBottom: "var(--space-sm)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: "flex",
                        gap: "var(--space-sm)",
                        alignItems: "flex-start",
                        textDecoration: "none",
                        color: "var(--text)",
                        fontSize: "var(--text-sm)",
                        lineHeight: 1.4,
                        fontWeight: 600,
                        transition: "color 0.15s ease",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "var(--text-lg)",
                          fontWeight: 900,
                          color: "var(--primary)",
                          lineHeight: 1.2,
                          flexShrink: 0,
                        }}
                      >
                        {String(posts.indexOf(post) + 1).padStart(2, "0")}
                      </span>
                      <span>{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>

      {/* ================================================================
          SECTION 4: PULL QUOTE
          ================================================================ */}
      <section style={{ background: "var(--surface)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="pull-quote" style={{ textAlign: "center" }}>
            <blockquote>
              Акустичне середовище офісу є найбільш недооціненим фактором, що
              впливає на продуктивність працівників розумової праці.
            </blockquote>
            <span className="pull-quote-source">
              World Green Building Council
              <span className="pull-quote-journal">
                {" "}
                &mdash; Health, Wellbeing &amp; Productivity in Offices, 2023
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: PUBLICATIONS TABLE
          ================================================================ */}
      <section
        style={{
          background: "var(--background)",
          padding: "0 0 var(--space-3xl)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-rule">04 Останні публікації</div>

          <div style={{ overflowX: "auto" }}>
            <table className="pub-table">
              <thead>
                <tr>
                  <th>Категорія</th>
                  <th>Назва</th>
                  <th>Дата</th>
                  <th>Читання</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.slug}>
                    <td>
                      <span className="pub-table-category">
                        {post.category || "Дослідження"}
                      </span>
                    </td>
                    <td>
                      <span className="pub-table-title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </span>
                    </td>
                    <td>
                      <span className="pub-table-date">
                        {new Date(post.publishedAt).toLocaleDateString("uk-UA", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </td>
                    <td>
                      <span className="pub-table-reading-time">
                        {estimateReadingTime(post.excerpt)} хв
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "var(--space-xl)", textAlign: "center" }}>
            <Link href="/blog/" className="btn-secondary no-underline">
              Усі публікації
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6: CONTACT SECTION
          ================================================================ */}
      <section
        id="kontakty"
        style={{
          background: "var(--surface)",
          padding: "var(--space-3xl) 0 var(--space-4xl)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="section-rule">05 Контакти</div>

          <div
            className="grid gap-8"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            }}
          >
            {/* Contact Form */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-2xl)",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                Зв'яжіться з редакцією
              </h2>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-muted)",
                  marginBottom: "var(--space-xl)",
                  lineHeight: 1.7,
                }}
              >
                Надсилайте пропозиції до публікації, запити на рецензування або
                питання щодо співпраці.
              </p>
              <ContactForm />
            </div>

            {/* Editorial Info */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-2xl)",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "var(--space-sm)",
                }}
              >
                Редакція
              </h2>
              <p
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--text-muted)",
                  marginBottom: "var(--space-lg)",
                  lineHeight: 1.7,
                }}
              >
                Портал {siteConfig.name} публікує оригінальні дослідження,
                оглядові статті та практичні рекомендації у сфері акустики та
                ергономіки.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-sm)",
                  fontSize: "var(--text-sm)",
                  color: "var(--text-muted)",
                }}
              >
                <div>
                  <strong style={{ color: "var(--text)" }}>Адреса:</strong>{" "}
                  {siteConfig.address}
                </div>
                <div>
                  <strong style={{ color: "var(--text)" }}>Email:</strong>{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{
                      color: "var(--primary)",
                      textDecoration: "none",
                      borderBottom: "1px solid var(--accent)",
                    }}
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <strong style={{ color: "var(--text)" }}>Години роботи:</strong>{" "}
                  {siteConfig.workingHours}
                </div>
              </div>

              <div className="key-finding-box" style={{ marginTop: "var(--space-xl)" }}>
                <p>Для авторів</p>
                <p>
                  Приймаємо оригінальні статті обсягом 2000-5000 слів з
                  посиланнями на рецензовані джерела. Термін розгляду — до 14
                  робочих днів.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

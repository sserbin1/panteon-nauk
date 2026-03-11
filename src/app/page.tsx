import Link from "next/link"
import { siteConfig } from "../../site.config"
import { getAllPosts } from "@/lib/blog"
import ContactForm from "@/components/forms/ContactForm"

const researchAreas = [
  { icon: "\uD83D\uDD0A", title: "Акустика офісу", description: "Дослідження впливу шуму на продуктивність та когнітивні функції працівників у відкритих офісних просторах" },
  { icon: "\uD83C\uDFDB\uFE0F", title: "Звукоізоляційні рішення", description: "Аналіз ефективності акустичних кабін, звукоізоляційних матеріалів та архітектурних рішень для зниження шуму" },
  { icon: "\uD83E\uDDE0", title: "Ергономіка простору", description: "Вивчення впливу робочого середовища на здоров\u2019я, концентрацію та задоволеність працівників" },
  { icon: "\uD83D\uDCCA", title: "Продуктивність", description: "Кількісний аналіз залежності ефективності роботи від акустичних умов та організації простору" },
]

const solutions = [
  { title: "Акустичні кабіни для офісу", description: "Сучасні акустичні кабіни забезпечують зниження шуму до 35\u201360 дБ, створюючи ідеальні умови для зосередженої роботи та конфіденційних переговорів.", link: "/blog/", features: ["Зниження шуму до 60 дБ", "Автоматична вентиляція", "Датчики руху та LED-освітлення"] },
  { title: "Звукоізоляційні кабіни", description: "Звукоізоляційні кабіни використовують комбінацію повстяних панелей, триплексного скла та мембранних технологій для максимальної ізоляції від зовнішнього шуму.", link: "/blog/", features: ["Повстяні акустичні панелі", "Триплексне скло", "Повна конфіденційність"] },
  { title: "Офісні кабіни для дзвінків", description: "Компактні офісні кабіни для телефонних дзвінків та відеоконференцій \u2014 оптимальне рішення для open space офісів із високим рівнем шуму.", link: "/blog/", features: ["Zoom/Teams-ready", "USB-зарядка", "Швидкий монтаж"] },
  { title: "Кабіни для переговорів", description: "Мобільні кабіни для переговорів на 2\u20134 особи встановлюються за кілька годин без будівельних робіт та забезпечують повну конфіденційність ділового спілкування.", link: "/blog/", features: ["2\u20134 робочих місця", "Без будівельних робіт", "Модульна конструкція"] },
]

const stats = [
  { value: "70%", label: "працівників скаржаться на шум в open space" },
  { value: "86 хв", label: "на день втрачається через відволікання шумом" },
  { value: "35\u201360 дБ", label: "зниження шуму забезпечують акустичні кабіни" },
  { value: "23%", label: "зростання продуктивності після встановлення кабін" },
]

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[var(--primary)]">
        <img src="/images/blog/hero.webp" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--primary)]/80" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-24">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">Дослідницький портал</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: "Merriweather, serif" }}>
            {"Наука про "}
            <span className="text-[var(--accent)]">акустику</span>
            {" та ергономіку робочого простору"}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {"Досліджуємо вплив шуму на продуктивність, аналізуємо акустичні кабіни для офісу та звукоізоляційні рішення для створення комфортного робочого середовища."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#doslidzhennya" className="btn-primary" style={{ background: "var(--accent)", color: "var(--text)" }}>{"Наші дослідження"}</a>
            <a href="#rishennya" className="btn-secondary" style={{ color: "white", borderColor: "white" }}>{"Практичні рішення"}</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-[var(--border)]">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-1">{s.value}</div>
                <p className="text-xs md:text-sm text-[var(--text-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="doslidzhennya" className="py-20 bg-[var(--background)]">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="section-title">{"Напрямки "}<span className="gradient-text">{"досліджень"}</span></h2>
          <p className="section-subtitle">{"Вивчаємо вплив акустичного середовища на людину та шукаємо оптимальні рішення для сучасних офісів"}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-6 border border-[var(--border)] hover:border-[var(--primary)] transition-colors">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="rishennya" className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="section-title">{"Практичні "}<span className="gradient-text">{"рішення"}</span></h2>
          <p className="section-subtitle">{"На основі наших досліджень ми аналізуємо та рекомендуємо найефективніші акустичні рішення для офісних просторів"}</p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {solutions.map((s) => (
              <div key={s.title} className="bg-[var(--background)] rounded-xl p-6 md:p-8 border border-[var(--border)]">
                <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">{s.title}</h3>
                <p className="text-[var(--text-muted)] mb-4 leading-relaxed">{s.description}</p>
                <ul className="space-y-2 mb-4">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <svg className="w-4 h-4 flex-shrink-0" fill="var(--success)" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="py-20 bg-[var(--background)]">
          <div className="w-full max-w-7xl mx-auto px-4">
            <h2 className="section-title">{"Останні "}<span className="gradient-text">{"публікації"}</span></h2>
            <p className="section-subtitle">{"Наукові статті, огляди та дослідження у сфері акустики та ергономіки"}</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}/`} className="card no-underline group">
                  <div className="p-6">
                    {post.category && <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">{post.category}</span>}
                    <h3 className="text-lg font-bold mt-2 mb-3 text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">{post.title}</h3>
                    <p className="text-sm text-[var(--text-muted)] line-clamp-3">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog/" className="text-[var(--primary)] font-semibold hover:underline no-underline">{"Всі публікації \u2192"}</Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <section id="kontakty" className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="section-title"><span className="gradient-text">{"Контакти"}</span></h2>
          <p className="section-subtitle">{"Маєте запитання щодо акустичних рішень? Зв\u2019яжіться з нами"}</p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div><ContactForm /></div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">{"Редакція порталу"}</h3>
                <p className="text-[var(--text-muted)]">{siteConfig.address}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{"Email"}</h3>
                <p><a href={`mailto:${siteConfig.email}`} className="text-[var(--primary)] font-semibold hover:underline no-underline">{siteConfig.email}</a></p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{"Графік роботи"}</h3>
                <p className="text-[var(--text-muted)]">{siteConfig.workingHours}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{"Про портал"}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{"Пантеон Наук — науково-дослідницький портал, створений ініціативою молодих українських дослідників у галузі прикладної акустики та ергономіки робочих просторів."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

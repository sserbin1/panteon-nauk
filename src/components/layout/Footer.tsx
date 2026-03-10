import Link from "next/link"
import { siteConfig } from "../../../site.config"

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white pt-12 pb-6">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "Merriweather, serif" }}>{siteConfig.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{siteConfig.description}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">{"Навігація"}</h4>
            <ul className="space-y-2">
              {[{ href: "/", label: "Головна" }, { href: "/#doslidzhennya", label: "Дослідження" }, { href: "/#rishennya", label: "Рішення" }, { href: "/blog/", label: "Публікації" }, { href: "/#kontakty", label: "Контакти" }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm no-underline transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-300">{"Контакти"}</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.email}</p>
              <p>{siteConfig.workingHours}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          {"\u00A9 "}{new Date().getFullYear()}{" "}{siteConfig.name}{". \u0412\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456."}
        </div>
      </div>
    </footer>
  )
}

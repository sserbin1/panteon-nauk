"use client"

import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "../../../site.config"

const categoryTabs = [
  { href: "/akustyka-ofisu/", label: "Акустика офісу" },
  { href: "/doslidzhennya/", label: "Дослідження" },
  { href: "/praktychni-rishennya/", label: "Практичні рішення" },
  { href: "/kabiny/", label: "Кабіни SilentBox" },
  { href: "/blog/", label: "Публікації" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white" style={{ borderBottom: "1px solid var(--border)" }}>
      {/* ── Top row: Logo + Контакти ── */}
      <div
        className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between"
        style={{ height: "3.5rem", borderBottom: "1px solid var(--border)" }}
      >
        <Link
          href="/"
          className="no-underline"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-xl)",
            fontWeight: 700,
            color: "var(--primary)",
            letterSpacing: "-0.01em",
          }}
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/#kontakty"
            className="hidden md:inline-flex no-underline"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              color: "var(--text-muted)",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Контакти
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Відкрити меню"
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-xl)",
              color: "var(--primary)",
              lineHeight: 1,
            }}
          >
            {mobileOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {/* ── Bottom row: Category tabs (desktop) ── */}
      <nav className="tab-nav hidden md:flex w-full max-w-7xl mx-auto px-4" style={{ marginBottom: 0 }}>
        {categoryTabs.map((tab) => (
          <Link key={tab.href} href={tab.href} className="no-underline">
            {tab.label}
          </Link>
        ))}
      </nav>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <div className="md:hidden" style={{ borderTop: "1px solid var(--border)", background: "white" }}>
          <nav className="w-full max-w-7xl mx-auto px-4 py-3 flex flex-col">
            {categoryTabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className="no-underline"
                style={{
                  display: "block",
                  padding: "var(--space-sm) 0",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-base)",
                  fontWeight: 600,
                  color: "var(--text)",
                  borderBottom: "1px solid var(--border)",
                  transition: "color 0.15s ease",
                }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
              >
                {tab.label}
              </Link>
            ))}
            <Link
              href="/#kontakty"
              className="no-underline"
              style={{
                display: "block",
                padding: "var(--space-sm) 0",
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-base)",
                fontWeight: 600,
                color: "var(--accent-dark)",
                marginTop: "var(--space-xs)",
                transition: "color 0.15s ease",
              }}
              onClick={() => setMobileOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-dark)")}
            >
              Контакти
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "../../../site.config"

const navLinks = [
  { href: "/", label: "Головна" },
  { href: "/akustyka-ofisu/", label: "Акустика офісу" },
  { href: "/doslidzhennya/", label: "Дослідження" },
  { href: "/praktychni-rishennya/", label: "Рішення" },
  { href: "/blog/", label: "Публікації" },
  { href: "/#kontakty", label: "Контакти" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <rect width="36" height="36" rx="8" fill="var(--primary)" opacity="0.1" />
            <path d="M8 28V12l10-6 10 6v16" stroke="var(--primary)" strokeWidth="2" fill="none" />
            <circle cx="18" cy="18" r="4" fill="var(--accent)" />
            <path d="M14 18h8M18 14v8" stroke="var(--primary)" strokeWidth="1.5" />
          </svg>
          <span className="text-lg font-bold" style={{ fontFamily: "Merriweather, serif", color: "var(--primary)" }}>{siteConfig.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium no-underline transition-colors hover:text-[var(--primary)]" style={{ color: "var(--text-muted)" }}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" /> : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[var(--border)] py-4">
          <nav className="w-full max-w-7xl mx-auto px-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-base font-medium no-underline py-2" style={{ color: "var(--text)" }} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

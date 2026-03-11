import Link from "next/link";
import { siteConfig } from "../../../site.config";

const navLinks = [
  { label: "Акустика офісу", href: "/akustyka-ofisu/" },
  { label: "Дослідження", href: "/doslidzhennya/" },
  { label: "Практичні рішення", href: "/praktychni-rishennya/" },
  { label: "Публікації", href: "/blog/" },
];

export default function Footer() {
  return (
    <footer className="footer-journal">
      <div className="footer-journal-accent" />

      <div className="footer-journal-inner">
        <div className="footer-journal-grid">
          {/* Column 1: About */}
          <div>
            <h3 className="footer-journal-heading">Про портал</h3>
            <p className="footer-journal-text">
              {siteConfig.name} — дослідницький портал акустики та ергономіки
              робочого простору. Наукові публікації, аналітика та практичні
              рекомендації.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="footer-journal-heading">Навігація</h3>
            <ul className="footer-journal-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h3 className="footer-journal-heading">Контакти</h3>
            <ul className="footer-journal-contact">
              <li>{siteConfig.address}</li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>{siteConfig.workingHours}</li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="footer-journal-copyright">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Усі права
          захищені.
        </div>
      </div>
    </footer>
  );
}

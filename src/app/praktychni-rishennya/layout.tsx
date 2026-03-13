import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Практичні рішення — кейси впровадження офісних кабін',
  description: 'Практичні рішення для офісу: кейси впровадження акустичних кабін, гіди з вибору та порівняння моделей.',
  alternates: { canonical: 'https://panteon-nauk.org.ua/praktychni-rishennya/' },
  openGraph: {
    title: 'Практичні рішення — кейси впровадження офісних кабін',
    description: 'Практичні рішення для офісу: кейси впровадження акустичних кабін, гіди з вибору та порівняння моделей.',
    url: 'https://panteon-nauk.org.ua/praktychni-rishennya/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

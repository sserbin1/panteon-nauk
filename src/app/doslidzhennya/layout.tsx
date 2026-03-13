import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Дослідження — наукові статті про офісний простір',
  description: 'Наукові дослідження ергономіки, акустики та організації робочого простору. Рецензовані статті та мета-аналізи.',
  alternates: { canonical: 'https://panteon-nauk.org.ua/doslidzhennya/' },
  openGraph: {
    title: 'Дослідження — наукові статті про офісний простір',
    description: 'Наукові дослідження ергономіки, акустики та організації робочого простору. Рецензовані статті та мета-аналізи.',
    url: 'https://panteon-nauk.org.ua/doslidzhennya/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Акустика офісу — дослідження шуму та звукоізоляції',
  description: 'Наукові дослідження акустики офісного простору: рівні шуму, вплив на продуктивність, рішення для звукоізоляції.',
  alternates: { canonical: 'https://panteon-nauk.org.ua/akustyka-ofisu/' },
  openGraph: {
    title: 'Акустика офісу — дослідження шуму та звукоізоляції',
    description: 'Наукові дослідження акустики офісного простору: рівні шуму, вплив на продуктивність, рішення для звукоізоляції.',
    url: 'https://panteon-nauk.org.ua/akustyka-ofisu/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

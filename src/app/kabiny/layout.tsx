import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Акустичні кабіни SilentBox — каталог для офісу',
  description: 'Акустичні кабіни SilentBox: Classic, Duet, Quartet. Звукоізоляція до 35 дБ, LED-освітлення, вентиляція.',
  alternates: { canonical: 'https://panteon-nauk.org.ua/kabiny/' },
  openGraph: {
    title: 'Акустичні кабіни SilentBox — каталог для офісу',
    description: 'Акустичні кабіни SilentBox: Classic, Duet, Quartet. Звукоізоляція до 35 дБ, LED-освітлення, вентиляція.',
    url: 'https://panteon-nauk.org.ua/kabiny/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

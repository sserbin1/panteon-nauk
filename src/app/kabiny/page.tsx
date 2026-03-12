'use client'

import { useState } from 'react'
import Link from 'next/link'
import LeadModal from '@/components/forms/LeadModal'

const PRODUCTS = [
  {
    id: 'solo',
    name: 'SilentBox Classic',
    capacity: '1 особа',
    description: 'Індивідуальна акустична кабіна для телефонних дзвінків та зосередженої роботи. Ідеальна для open-space офісів.',
    features: ['Звукоізоляція 35 дБ', 'LED-освітлення 450 Lux', 'Вентиляція 120 м³/год', 'Розетка 220V + USB-C', 'Датчик руху'],
    dimensions: '120 × 120 × 230 см',
    image: '/images/kabiny/classic.png',
    color: '#3B82F6',
  },
  {
    id: 'duo',
    name: 'SilentBox Duet',
    capacity: '2 особи',
    description: 'Кабіна для невеликих зустрічей та парних відеодзвінків. Комфортний простір для двох.',
    features: ['Звукоізоляція 35 дБ', 'Стіл для ноутбуків', 'Подвійна вентиляція', '2× розетки 220V + USB-C', 'Акустичні панелі'],
    dimensions: '160 × 120 × 230 см',
    image: '/images/kabiny/duet.png',
    color: '#8B5CF6',
  },
  {
    id: 'team',
    name: 'SilentBox Quartet',
    capacity: '4 особи',
    description: 'Просторна кабіна для командних нарад, брейнштормів та відеоконференцій.',
    features: ['Звукоізоляція 35 дБ', 'Конференц-стіл', 'Монітор-кріплення', '4× розетки + USB-C', 'Підсилена вентиляція', 'Скляні стінки'],
    dimensions: '220 × 160 × 230 см',
    image: '/images/kabiny/quartet.png',
    color: '#059669',
  },
]

const GALLERY = [
  { src: '/images/kabiny/office1.jpg', alt: 'Акустична кабіна SilentBox в сучасному офісі' },
  { src: '/images/kabiny/office2.jpg', alt: 'SilentBox в open-space офісі' },
  { src: '/images/kabiny/office3.jpg', alt: 'Кабіна для переговорів в офісному просторі' },
  { src: '/images/kabiny/office4.jpg', alt: 'Звукоізоляційна кабіна в коворкінгу' },
  { src: '/images/kabiny/office5.jpg', alt: 'SilentBox кабіна для дзвінків' },
  { src: '/images/kabiny/office6.jpg', alt: 'Офісна кабіна SilentBox - вигляд зсередини' },
  { src: '/images/kabiny/office7.jpg', alt: 'Кабіна SilentBox в інтер\'єрі офісу' },
  { src: '/images/kabiny/office8.jpg', alt: 'Акустичні кабіни в сучасному робочому просторі' },
  { src: '/images/kabiny/office9.jpg', alt: 'SilentBox кабіна для відеоконференцій' },
  { src: '/images/kabiny/office10.jpg', alt: 'Зона приватності з кабінами SilentBox' },
  { src: '/images/kabiny/office11.jpg', alt: 'SilentBox кабіна в дизайнерському офісі' },
  { src: '/images/kabiny/office12.jpg', alt: 'Кабіна для зосередженої роботи в офісі' },
]

const ADVANTAGES = [
  { title: 'Звукоізоляція 35 дБ', desc: 'Тришарова конструкція за стандартами ISO 9001', icon: '🔇' },
  { title: 'Монтаж за 2-4 години', desc: 'Швидка збірка без капітальних робіт', icon: '⚡' },
  { title: 'Розумна електроніка', desc: 'Автоматичне увімкнення світла та вентиляції', icon: '💡' },
  { title: 'Можна переміщувати', desc: 'Модульна конструкція — легко перевезти', icon: '📦' },
]

export default function CatalogPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>()

  function openModal(product?: string) {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  return (
    <>
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">Головна</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Акустичні кабіни SilentBox</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Акустичні кабіни SilentBox
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Професійні звукоізоляційні кабіни для офісу. Тиша для дзвінків, зустрічей та зосередженої роботи.
          </p>
          <button
            onClick={() => openModal()}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer text-sm"
          >
            Отримати пропозицію
          </button>
        </div>

        {/* Products */}
        <div className="space-y-16 mb-20">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}
            >
              {/* Product image */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={`${product.name} — акустична кабіна для ${product.capacity}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="w-full lg:w-1/2">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ backgroundColor: `${product.color}15`, color: product.color }}>
                  {product.capacity}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-sm text-gray-400 mb-4">Розміри: {product.dimensions}</p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: product.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(product.name)}
                  className="px-6 py-2.5 text-white font-medium rounded-lg transition-colors cursor-pointer text-sm"
                  style={{ backgroundColor: product.color }}
                >
                  Дізнатися ціну
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Office Gallery */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Як виглядають кабіни в офісі</h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            Реальні фотографії акустичних кабін SilentBox в офісних просторах наших клієнтів
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY.map((photo) => (
              <div key={photo.src} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Чому обирають SilentBox</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((adv) => (
              <div key={adv.title} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{adv.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{adv.title}</h3>
                <p className="text-xs text-gray-500">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-900 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Готові до тиші в офісі?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Залиште заявку — ми підберемо оптимальну кабіну для вашого простору та надішлемо комерційну пропозицію.
          </p>
          <button
            onClick={() => openModal()}
            className="px-8 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors cursor-pointer text-sm"
          >
            Залишити заявку
          </button>
        </div>
      </main>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} product={selectedProduct} />
    </>
  )
}

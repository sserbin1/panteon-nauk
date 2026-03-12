'use client'

import { useState, useEffect, type FormEvent } from 'react'
import { siteConfig } from '../../../site.config'

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
  product?: string
}

export default function LeadModal({ isOpen, onClose, product }: LeadModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setStatus('idle')
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const fd = new FormData(e.currentTarget)
    const lead = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone') || undefined,
      company: fd.get('company') || undefined,
      message: fd.get('message') || (product ? `Цікавить: ${product}` : undefined),
    }

    try {
      const res = await fetch(siteConfig.crmWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: siteConfig.domain,
          lead,
          source: {
            page: typeof window !== 'undefined' ? window.location.pathname : '/kabiny/',
          },
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-700 cursor-pointer"
          aria-label="Закрити"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Дякуємо!</h3>
            <p className="text-gray-500">Ми зв&apos;яжемося з вами найближчим часом.</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm font-medium"
            >
              Закрити
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">Залишити заявку</h3>
            <p className="text-sm text-gray-500 mb-6">
              {product
                ? `Вас цікавить: ${product}. Заповніть форму і ми зв'яжемось.`
                : "Заповніть форму і ми зв'яжемося з вами."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="lead-name" className="block text-sm font-medium text-gray-700 mb-1">Ім&apos;я *</label>
                <input
                  type="text" id="lead-name" name="name" required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-sm"
                  placeholder="Ваше ім'я"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="lead-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email" id="lead-email" name="email" required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-sm"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="lead-phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                  <input
                    type="tel" id="lead-phone" name="phone"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-sm"
                    placeholder="+380..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lead-company" className="block text-sm font-medium text-gray-700 mb-1">Компанія</label>
                <input
                  type="text" id="lead-company" name="company"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-sm"
                  placeholder="Назва компанії"
                />
              </div>
              <div>
                <label htmlFor="lead-message" className="block text-sm font-medium text-gray-700 mb-1">Повідомлення</label>
                <textarea
                  id="lead-message" name="message" rows={3}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow text-sm resize-none"
                  placeholder="Ваше питання або побажання..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors cursor-pointer text-sm"
              >
                {status === 'submitting' ? 'Надсилаємо...' : 'Надіслати заявку'}
              </button>

              {status === 'error' && (
                <p className="text-red-600 text-sm text-center">Помилка. Спробуйте ще раз.</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa'
import { BUSINESS } from '../../constants/business'
import { useScrollPosition } from '../../hooks/useScrollPosition'

export default function FloatingButtons() {
  const scrolled = useScrollPosition(400)

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {scrolled && (
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-dark text-white shadow-lg transition hover:-translate-y-1 dark:bg-white dark:text-dark"
        >
          <FaArrowUp />
        </button>
      )}
      <a
        href={`tel:+${BUSINESS.phoneRaw}`}
        aria-label="Call DEV Medical"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition hover:-translate-y-1"
      >
        <FaPhoneAlt />
      </a>
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%20DEV%20Medical%2C%20I%20would%20like%20to%20ask%20about%20a%20medicine.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition hover:-translate-y-1 animate-floatY"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}

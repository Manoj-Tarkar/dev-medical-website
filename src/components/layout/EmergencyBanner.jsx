import { FaPhoneAlt } from 'react-icons/fa'
import { BUSINESS } from '../../constants/business'

export default function EmergencyBanner() {
  return (
    <div className="w-full bg-dark text-white">
      <div className="container-x flex flex-wrap items-center justify-center gap-2 py-2 text-center text-xs sm:text-sm">
        <span className="font-semibold text-accent">Need medicine urgently?</span>
        <span className="text-slate-300">We&apos;re open {BUSINESS.hours}.</span>
        <a href={`tel:+${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-2">
          <FaPhoneAlt className="text-[10px]" /> {BUSINESS.phone}
        </a>
      </div>
    </div>
  )
}

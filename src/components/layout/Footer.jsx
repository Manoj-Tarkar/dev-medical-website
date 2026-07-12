import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaPaperPlane } from 'react-icons/fa'
import { BUSINESS } from '../../constants/business'
import { NAV_LINKS } from '../../constants/navlinks'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    toast.success('Subscribed! You will now receive our health tips & offers.')
    setEmail('')
  }

  return (
    <footer className="bg-dark text-slate-300">
      <div className="container-x grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-display font-bold">+</span>
            <span className="font-display text-lg font-bold text-white">DEV Medical</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {BUSINESS.tagline}. Genuine medicines, expert guidance and reliable home delivery for the Mathura community.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary">
              <FaFacebookF />
            </a>
            <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className="transition hover:text-primary-400">{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-primary-400" /> <span>{BUSINESS.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary-400" /> <a href={`tel:+${BUSINESS.phoneRaw}`} className="hover:text-primary-400">{BUSINESS.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-primary-400" /> <a href={`https://wa.me/${BUSINESS.whatsapp}`} className="hover:text-primary-400">WhatsApp Us</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary-400" /> <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary-400 break-all">{BUSINESS.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-primary-400" /> <span>{BUSINESS.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Health Tips Newsletter</h3>
          <p className="mt-4 text-sm text-slate-400">Get seasonal health tips and special offers in your inbox.</p>
          <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-capsule border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none"
            />
            <button type="submit" aria-label="Subscribe" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-600">
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} DEV Medical. All rights reserved.</p>
          <p>Designed &amp; built with care for a healthier Mathura.</p>
        </div>
      </div>
    </footer>
  )
}

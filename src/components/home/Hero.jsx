import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSearch, FaShieldAlt, FaTruck, FaClock } from 'react-icons/fa'
import { BUSINESS } from '../../constants/business'
import ownerPhoto from '../../assets/owner-photo.png'

export default function Hero() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/medicines${query ? `?q=${encodeURIComponent(query)}` : ''}`)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white dark:from-dark dark:via-dark dark:to-dark">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container-x relative grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="section-eyebrow">{BUSINESS.type} · Lajpat Nagar, Mathura</span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            {BUSINESS.tagline},<br />
            <span className="text-primary">Every Single Day.</span>
          </h1>
          <p className="mt-5 max-w-lg text-slate-500 dark:text-slate-400">
            Genuine medicines, expert pharmacist guidance and reliable home delivery — open every day from {BUSINESS.hours.split(', ')[1]}.
          </p>

          <form onSubmit={handleSearch} className="mt-8 flex max-w-md items-center gap-2 rounded-capsule border border-slate-200 bg-white p-1.5 pl-5 shadow-card dark:border-dark-border dark:bg-dark-card">
            <FaSearch className="shrink-0 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search for medicines, brands…"
              className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-slate-400"
            />
            <button type="submit" className="btn-primary shrink-0 px-5 py-2.5 text-sm">Search</button>
          </form>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { icon: FaShieldAlt, label: '100% Genuine' },
              { icon: FaTruck, label: 'Home Delivery' },
              { icon: FaClock, label: 'Open Till 10 PM' },
            ].map((f) => (
              <div key={f.label} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <f.icon />
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{f.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <div className="glass-card relative mx-auto flex aspect-square max-w-md items-center justify-center overflow-hidden p-3">
            <img
              src={ownerPhoto}
              alt={`${BUSINESS.name} — Pharmacy Owner`}
              className="h-full w-full rounded-xl2 object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl2 bg-white/90 px-4 py-3 shadow-glass backdrop-blur dark:bg-dark/80">
              <div>
                <p className="text-xs text-slate-400">Trusted since</p>
                <p className="font-display text-lg font-bold text-primary">Day One</p>
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-dark-border" />
              <div>
                <p className="text-xs text-slate-400">Pharmacist verified</p>
                <p className="font-display text-lg font-bold text-secondary">Every Order</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

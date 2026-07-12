import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaSun, FaMoon, FaPhoneAlt } from 'react-icons/fa'
import { NAV_LINKS } from '../../constants/navlinks'
import { BUSINESS } from '../../constants/business'
import { useTheme } from '../../context/ThemeContext'
import { useScrollPosition } from '../../hooks/useScrollPosition'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const scrolled = useScrollPosition(20)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-dark/85 backdrop-blur-xl shadow-glass'
          : 'bg-white dark:bg-dark'
      }`}
    >
      <nav className="container-x flex h-16 sm:h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-display font-bold">+</span>
          <span className="font-display text-lg sm:text-xl font-bold text-dark dark:text-white">
            DEV <span className="text-primary">Medical</span>
          </span>
        </NavLink>

        <ul className="hidden xl:flex items-center gap-1 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `rounded-capsule px-3 py-2 transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-dark-border text-slate-500 dark:text-slate-300 transition hover:text-primary"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a href={`tel:+${BUSINESS.phoneRaw}`} className="btn-primary text-sm">
            <FaPhoneAlt className="text-xs" /> {BUSINESS.phone}
          </a>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-dark-border text-slate-500 dark:text-slate-300"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-dark-border text-dark dark:text-white"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/40 xl:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="ml-auto flex h-full w-72 flex-col gap-1 bg-white p-6 dark:bg-dark"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-lg font-bold">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-xl">
                  <FaTimes />
                </button>
              </div>
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      isActive ? 'bg-primary/10 text-primary-600' : 'text-slate-600 dark:text-slate-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a href={`tel:+${BUSINESS.phoneRaw}`} className="btn-primary mt-4 text-sm">
                <FaPhoneAlt className="text-xs" /> Call Now
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

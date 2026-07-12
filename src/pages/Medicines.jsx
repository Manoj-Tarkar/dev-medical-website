import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSearch, FaPills } from 'react-icons/fa'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import { MEDICINE_CATEGORIES } from '../data/categories'
import { FEATURED_MEDICINES } from '../data/medicines'

export default function Medicines() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    return FEATURED_MEDICINES.filter((m) => {
      const matchesQuery = m.name.toLowerCase().includes(query.toLowerCase())
      const matchesCategory = activeCategory === 'all' || m.category === activeCategory
      return matchesQuery && matchesCategory
    })
  }, [query, activeCategory])

  return (
    <>
      <SEO
        title="Medicines"
        description="Browse medicine categories available at DEV Medical, Lajpat Nagar, Mathura — prescription medicines, general medicines, vitamins, Ayurvedic products and more."
        path="/medicines"
      />

      <section className="bg-primary-50/60 py-16 dark:bg-primary-900/10 sm:py-20">
        <div className="container-x text-center">
          <span className="section-eyebrow mx-auto">Medicine Catalogue</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Medicines & Categories</h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-500 dark:text-slate-400">
            Search our catalogue or browse by category. For exact stock and pricing, reach out via call or WhatsApp.
          </p>
          <div className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-capsule border border-slate-200 bg-white p-1.5 pl-5 shadow-card dark:border-dark-border dark:bg-dark-card">
            <FaSearch className="shrink-0 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search medicines…"
              className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`rounded-capsule px-4 py-2 text-xs font-semibold transition ${activeCategory === 'all' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300'}`}
            >
              All
            </button>
            {MEDICINE_CATEGORIES.slice(0, 10).map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.name)}
                className={`rounded-capsule px-4 py-2 text-xs font-semibold transition ${activeCategory === c.name ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300'}`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.length ? filtered.map((med, i) => (
              <motion.div
                key={med.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="glass-card flex flex-col gap-3 p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary"><FaPills /></span>
                <h3 className="font-display font-semibold leading-snug">{med.name}</h3>
                <p className="text-xs text-slate-400">{med.category} · {med.unit}</p>
                <span className="mt-auto font-display text-lg font-bold text-primary">₹{med.price}</span>
              </motion.div>
            )) : (
              <p className="col-span-full text-center text-slate-400">No medicines matched your search. Try a different term or call us directly.</p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 dark:bg-dark-card/30">
        <div className="container-x">
          <SectionHeading eyebrow="Full Range" title="All Medicine Categories" />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {MEDICINE_CATEGORIES.map((cat) => (
              <div key={cat.id} className="flex flex-col items-center gap-2 rounded-xl2 border border-slate-100 p-4 text-center dark:border-dark-border">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><cat.icon /></span>
                <span className="text-xs font-semibold">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

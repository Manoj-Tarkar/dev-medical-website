import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'

const CATEGORIES = ['All', 'Medicine Shelves', 'Healthcare Products', 'Interior', 'Exterior', 'Customer Service']

const IMAGES = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  category: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1],
}))

export default function Gallery() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? IMAGES : IMAGES.filter((img) => img.category === active)

  return (
    <>
      <SEO
        title="Gallery"
        description="Take a look inside DEV Medical — our pharmacy store, medicine shelves, healthcare products, and the team serving Mathura."
        path="/gallery"
      />
      <section className="bg-primary-50/60 py-16 dark:bg-primary-900/10 sm:py-20">
        <div className="container-x text-center">
          <span className="section-eyebrow mx-auto">Take a Look Inside</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Our Store Gallery</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <SectionHeading eyebrow="Photo Gallery" title="Browse by Category" />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-capsule px-4 py-2 text-xs font-semibold transition ${active === cat ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <AnimatePresence>
              {filtered.map((img) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl2 bg-gradient-to-br from-primary-100 to-secondary-100/40 text-center dark:from-primary-900/20 dark:to-secondary-900/10"
                >
                  <span className="text-xs font-semibold text-primary-700 dark:text-primary-300">{img.category}</span>
                  <span className="text-[10px] text-slate-400">Photo {img.id}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  )
}

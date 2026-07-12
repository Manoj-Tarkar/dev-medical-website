import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import { MEDICINE_CATEGORIES } from '../../data/categories'

export default function Categories() {
  return (
    <section className="py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Browse by Category"
          title="Find Exactly What You Need"
          description="Our shelves are organised into clear categories so you can find the right medicine or product quickly."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {MEDICINE_CATEGORIES.slice(0, 12).map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <Link
                to="/medicines"
                className="group flex h-full flex-col items-center gap-3 rounded-xl2 border border-slate-100 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card dark:border-dark-border dark:bg-dark-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <cat.icon />
                </span>
                <span className="text-xs font-semibold leading-tight">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/medicines" className="btn-outline text-sm">View All Categories</Link>
        </div>
      </div>
    </section>
  )
}

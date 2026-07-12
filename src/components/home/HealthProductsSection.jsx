import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import { HEALTH_PRODUCTS } from '../../data/categories'

export default function HealthProductsSection() {
  return (
    <section className="py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Beyond Medicines"
          title="Health & Wellness Products"
          description="Everything from diagnostic devices to daily wellness essentials, all under one roof."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {HEALTH_PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="flex items-center gap-3 rounded-xl2 border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow-card dark:border-dark-border dark:bg-dark-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <p.icon />
              </span>
              <span className="text-sm font-medium">{p.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/health-products" className="btn-outline text-sm">Explore All Health Products</Link>
        </div>
      </div>
    </section>
  )
}

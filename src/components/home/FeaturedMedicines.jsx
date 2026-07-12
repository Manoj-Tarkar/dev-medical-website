import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPills } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import { FEATURED_MEDICINES } from '../../data/medicines'

export default function FeaturedMedicines() {
  return (
    <section className="bg-white py-20 dark:bg-dark-card/30">
      <div className="container-x">
        <SectionHeading
          eyebrow="Featured This Week"
          title="Popular Medicines & Essentials"
          description="A snapshot of what our customers are stocking up on most often."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_MEDICINES.map((med, i) => (
            <motion.div
              key={med.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="glass-card flex flex-col gap-3 p-5"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FaPills />
                </span>
                <span className="rounded-capsule bg-accent/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-700 dark:text-accent">
                  {med.tag}
                </span>
              </div>
              <div>
                <h3 className="font-display font-semibold leading-snug">{med.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{med.category} · {med.unit}</p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-display text-lg font-bold text-primary">₹{med.price}</span>
                <Link to="/contact" className="text-xs font-semibold text-secondary hover:underline">Enquire →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

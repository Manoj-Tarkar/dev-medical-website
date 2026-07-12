import { motion } from 'framer-motion'
import { FaUserMd } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import { DOCTOR_RECOMMENDED } from '../../data/medicines'

export default function DoctorRecommended() {
  return (
    <section className="bg-primary-50/60 py-20 dark:bg-primary-900/10">
      <div className="container-x">
        <SectionHeading
          eyebrow="Pharmacist's Picks"
          title="Doctor Recommended Products"
          description="Products our in-house pharmacists frequently recommend for everyday wellness support."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DOCTOR_RECOMMENDED.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card flex flex-col gap-3 p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <FaUserMd />
              </span>
              <h3 className="font-display font-semibold">{item.name}</h3>
              <p className="text-xs text-slate-400">{item.category}</p>
              <p className="mt-auto text-sm text-primary-700 dark:text-primary-400">{item.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

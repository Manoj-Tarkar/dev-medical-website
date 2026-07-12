import { motion } from 'framer-motion'
import { FaUserMd, FaCertificate, FaHistory, FaHeadset } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import { useCountUp } from '../../hooks/useCountUp'

const REASONS = [
  { icon: FaUserMd, title: 'Experienced Pharmacists', desc: 'Registered pharmacists guiding every purchase with care and accuracy.' },
  { icon: FaCertificate, title: 'Quality Medicines', desc: 'Sourced only from trusted, licensed distributors — never compromised.' },
  { icon: FaHistory, title: 'Trusted Locally', desc: 'A familiar, dependable pharmacy for families across Lajpat Nagar.' },
  { icon: FaHeadset, title: 'Always Reachable', desc: 'Call, WhatsApp, or visit — we\u2019re easy to reach, every day of the week.' },
]

const STATS = [
  { value: 5000, suffix: '+', label: 'Customers Served' },
  { value: 1500, suffix: '+', label: 'Medicines Stocked' },
  { value: 7, suffix: '', label: 'Days a Week Open' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
]

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{count}{suffix}</p>
      <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 dark:bg-dark-card/30">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why DEV Medical"
          title="Healthcare You Can Rely On"
          description="What sets us apart in serving the health needs of Mathura families."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl2 border border-slate-100 p-6 text-center transition hover:shadow-card dark:border-dark-border"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                <r.icon />
              </span>
              <h3 className="mt-4 font-display font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 rounded-xl2 bg-primary-50 p-8 dark:bg-primary-900/10 sm:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

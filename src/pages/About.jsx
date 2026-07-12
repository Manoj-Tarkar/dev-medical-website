import { motion } from 'framer-motion'
import { FaBullseye, FaEye, FaUserMd, FaCertificate, FaHistory, FaHandsHelping } from 'react-icons/fa'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import { BUSINESS } from '../constants/business'
import ownerPhoto from '../assets/owner-photo.png'

const WHY_US = [
  { icon: FaUserMd, title: 'Experienced Pharmacists', desc: 'Our registered pharmacists bring years of experience guiding safe, informed medicine choices.' },
  { icon: FaCertificate, title: 'Quality Medicines', desc: 'Every product on our shelves is sourced from licensed, trusted distributors.' },
  { icon: FaHistory, title: 'Trusted Since Day One', desc: 'A dependable neighbourhood pharmacy that Lajpat Nagar families have come to rely on.' },
  { icon: FaHandsHelping, title: 'Personal Attention', desc: 'We take the time to understand your needs, not just fill a prescription.' },
]

const GALLERY_PLACEHOLDERS = Array.from({ length: 6 })

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about DEV Medical — a trusted pharmacy in Lajpat Nagar, Mathura, committed to quality medicines and genuine, personal healthcare service."
        path="/about"
      />

      <section className="bg-primary-50/60 py-16 dark:bg-primary-900/10 sm:py-20">
        <div className="container-x text-center">
          <span className="section-eyebrow mx-auto">About {BUSINESS.name}</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Caring for Mathura&apos;s Health, One Family at a Time</h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-500 dark:text-slate-400">
            {BUSINESS.name} is a full-service pharmacy in Lajpat Nagar, Mathura, built on a simple promise: genuine medicines, honest advice, and care that goes beyond the counter.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="glass-card p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl text-primary">
              <FaBullseye />
            </span>
            <h2 className="mt-4 text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400">
              To make quality healthcare accessible to every household in Mathura by providing genuine medicines, expert pharmacist guidance, and dependable service — every single day of the year.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }} className="glass-card p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-xl text-secondary">
              <FaEye />
            </span>
            <h2 className="mt-4 text-2xl font-bold">Our Vision</h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400">
              To be the most trusted neighbourhood pharmacy in the region — recognised not just for our product range, but for the personal care and trust we build with every customer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-4">
        <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="glass-card mx-auto w-full max-w-sm overflow-hidden p-3"
          >
            <img
              src={ownerPhoto}
              alt={`${BUSINESS.ownerName} — Owner of ${BUSINESS.name}`}
              className="w-full rounded-xl2 object-cover"
            />
            <div className="px-2 pb-1 pt-4 text-center">
              <p className="font-display text-lg font-bold">{BUSINESS.ownerName}</p>
              <p className="text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400">Owner, {BUSINESS.name}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-eyebrow">Meet the Owner</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The Face Behind {BUSINESS.name}</h2>
            <div className="capsule-divider mt-4" />
            <p className="mt-5 text-slate-500 dark:text-slate-400">
              {BUSINESS.ownerName} is committed to bringing genuine medicines and honest, personal service to every customer who walks through our doors in Lajpat Nagar, Mathura.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-dark-card/30">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us" title="What Makes DEV Medical Different" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl2 border border-slate-100 p-6 text-center dark:border-dark-border"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                  <item.icon />
                </span>
                <h3 className="mt-4 font-display font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Inside Our Store" title="Store Gallery" description="A glimpse of our pharmacy in Lajpat Nagar, Mathura." />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {GALLERY_PLACEHOLDERS.map((_, i) => (
              <div key={i} className="flex aspect-square items-center justify-center rounded-xl2 bg-gradient-to-br from-primary-100 to-secondary-100/40 text-xs font-medium text-primary-700 dark:from-primary-900/20 dark:to-secondary-900/10 dark:text-primary-300">
                Store Photo {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

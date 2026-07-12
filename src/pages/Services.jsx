import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/home/CTASection'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Explore the full range of pharmacy services offered by DEV Medical in Lajpat Nagar, Mathura — from prescription medicines to home delivery and medical equipment."
        path="/services"
      />
      <section className="bg-primary-50/60 py-16 dark:bg-primary-900/10 sm:py-20">
        <div className="container-x text-center">
          <span className="section-eyebrow mx-auto">What We Offer</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Our Pharmacy Services</h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-500 dark:text-slate-400">
            Beyond dispensing medicines, we offer a range of services designed to support your everyday health needs.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Full Service List" title="Everything We Provide" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="glass-card flex flex-col gap-4 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl text-primary">
                  <s.icon />
                </span>
                <h3 className="font-display font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

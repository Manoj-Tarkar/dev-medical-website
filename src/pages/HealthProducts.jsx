import { motion } from 'framer-motion'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import CTASection from '../components/home/CTASection'
import { HEALTH_PRODUCTS } from '../data/categories'

export default function HealthProducts() {
  return (
    <>
      <SEO
        title="Health Products"
        description="Shop health and wellness products at DEV Medical, Mathura — protein supplements, multivitamins, BP monitors, glucometers, nebulizers, wheelchairs and more."
        path="/health-products"
      />
      <section className="bg-primary-50/60 py-16 dark:bg-primary-900/10 sm:py-20">
        <div className="container-x text-center">
          <span className="section-eyebrow mx-auto">Wellness & Devices</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Health & Wellness Products</h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-500 dark:text-slate-400">
            From daily wellness supplements to diagnostic and mobility equipment — all available in-store and for delivery.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Product Range" title="Browse Health Products" />
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {HEALTH_PRODUCTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
                className="glass-card flex flex-col items-center gap-3 p-6 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-2xl text-secondary">
                  <p.icon />
                </span>
                <h3 className="font-display text-sm font-semibold">{p.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

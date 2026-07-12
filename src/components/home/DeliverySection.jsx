import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaMobileAlt, FaFileMedical, FaTruckLoading, FaHome } from 'react-icons/fa'

const STEPS = [
  { icon: FaMobileAlt, title: 'Send Your Request', desc: 'Share your medicine list via WhatsApp, call, or our delivery form.' },
  { icon: FaFileMedical, title: 'We Verify & Prepare', desc: 'Our pharmacist checks availability and prepares your order.' },
  { icon: FaTruckLoading, title: 'Dispatch', desc: 'Your order is packed carefully and dispatched for delivery.' },
  { icon: FaHome, title: 'Delivered to You', desc: 'Receive your medicines safely at your doorstep in Mathura.' },
]

export default function DeliverySection() {
  return (
    <section className="py-20">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Home Delivery</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Medicines Delivered to Your Door</h2>
          <div className="capsule-divider mt-4" />
          <p className="mt-5 text-slate-500 dark:text-slate-400">
            Can&apos;t make it to the store? We deliver across Mathura, so you and your family get the medicines you need without stepping out.
          </p>
          <Link to="/home-delivery" className="btn-primary mt-7 text-sm">Request Home Delivery</Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card flex flex-col gap-3 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon />
              </span>
              <h3 className="font-display text-sm font-semibold">{i + 1}. {step.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import { BUSINESS } from '../../constants/business'

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-xl2 bg-gradient-to-br from-primary to-primary-700 px-8 py-14 text-center text-white sm:px-16"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10" />
          <h2 className="relative font-display text-3xl font-bold sm:text-4xl">Need Help Finding a Medicine?</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-primary-50">
            Reach out to our pharmacy team anytime during store hours — we&apos;re happy to help.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-capsule bg-white px-6 py-3 font-semibold text-primary-700 shadow-lg transition hover:-translate-y-0.5">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
            <a href={`tel:+${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 rounded-capsule border-2 border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-primary-700">
              <FaPhoneAlt /> Call Now
            </a>
          </div>
          <Link to="/contact" className="relative mt-6 inline-block text-sm font-medium text-primary-50 underline underline-offset-4">
            Or send us a message
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

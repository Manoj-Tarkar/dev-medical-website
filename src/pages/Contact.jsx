import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import { sendEmail } from '../services/emailjs'
import { BUSINESS } from '../constants/business'

const CONTACT_CARDS = [
  { icon: FaPhoneAlt, label: 'Phone', value: BUSINESS.phone, href: `tel:+${BUSINESS.phoneRaw}` },
  { icon: FaWhatsapp, label: 'WhatsApp', value: BUSINESS.phone, href: `https://wa.me/${BUSINESS.whatsapp}` },
  { icon: FaEnvelope, label: 'Email', value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
  { icon: FaMapMarkerAlt, label: 'Address', value: BUSINESS.address, href: undefined },
  { icon: FaClock, label: 'Business Hours', value: BUSINESS.hours, href: undefined },
]

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    try {
      await sendEmail({ ...data, form_type: 'Contact Form' })
      toast.success('Message sent! We will get back to you shortly.')
      reset()
    } catch (err) {
      toast.error('Could not send message. Please call or WhatsApp us instead.')
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with DEV Medical, Lajpat Nagar, Mathura — call, WhatsApp, email, or visit us in person. Open 8 AM to 10 PM daily."
        path="/contact"
      />
      <section className="bg-primary-50/60 py-16 dark:bg-primary-900/10 sm:py-20">
        <div className="container-x text-center">
          <span className="section-eyebrow mx-auto">Get in Touch</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Contact DEV Medical</h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-500 dark:text-slate-400">
            Have a question, need to check medicine availability, or want to place a delivery request? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {CONTACT_CARDS.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card flex flex-col items-center gap-3 p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl text-primary"><card.icon /></span>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">{card.label}</h3>
              {card.href ? (
                <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm font-medium hover:text-primary break-all">{card.value}</a>
              ) : (
                <p className="text-sm font-medium">{card.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Send a Message" title="We'd Love to Hear From You" />
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Full Name</label>
                  <input {...register('name', { required: 'Name is required' })} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-border dark:bg-dark" placeholder="Your name" />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium">Phone Number</label>
                  <input {...register('phone', { required: 'Phone number is required' })} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-border dark:bg-dark" placeholder="+91" />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Email Address</label>
                <input type="email" {...register('email', { required: 'Email is required' })} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-border dark:bg-dark" placeholder="you@example.com" />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea {...register('message', { required: 'Please enter a message' })} rows={5} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-border dark:bg-dark" placeholder="How can we help you?" />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="btn-primary mt-2 justify-center text-sm disabled:opacity-60">
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-4">
            <SectionHeading align="left" eyebrow="Find Us" title="Visit Our Store" />
            <div className="overflow-hidden rounded-xl2 border border-slate-100 shadow-card dark:border-dark-border">
              <iframe
                title="DEV Medical location map"
                src={BUSINESS.mapEmbedSrc}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center bg-[#25D366] hover:bg-[#1ebe57] text-sm">
              <FaWhatsapp /> Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FaTruck, FaClock, FaShieldAlt, FaMapMarkedAlt } from 'react-icons/fa'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import { sendEmail } from '../services/emailjs'
import { BUSINESS } from '../constants/business'

const PERKS = [
  { icon: FaTruck, title: 'Doorstep Delivery', desc: 'Delivered safely across Mathura by our own team.' },
  { icon: FaClock, title: 'Quick Turnaround', desc: 'Most orders are dispatched within a few hours.' },
  { icon: FaShieldAlt, title: 'Careful Handling', desc: 'Medicines are packed securely to preserve quality.' },
  { icon: FaMapMarkedAlt, title: 'Wide Coverage', desc: 'Serving Lajpat Nagar and surrounding areas of Mathura.' },
]

export default function HomeDelivery() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async (data) => {
    try {
      await sendEmail({ ...data, form_type: 'Home Delivery Request' })
      toast.success('Delivery request received! We will call to confirm shortly.')
      reset()
    } catch (err) {
      toast.error('Something went wrong. Please call or WhatsApp us directly.')
    }
  }

  return (
    <>
      <SEO
        title="Home Delivery"
        description="Request home delivery of medicines from DEV Medical in Mathura. Fill the delivery form or WhatsApp your medicine list for quick doorstep delivery."
        path="/home-delivery"
      />
      <section className="bg-primary-50/60 py-16 dark:bg-primary-900/10 sm:py-20">
        <div className="container-x text-center">
          <span className="section-eyebrow mx-auto">Doorstep Service</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Request Home Delivery</h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-500 dark:text-slate-400">
            Send us your medicine list and delivery address — our team will confirm availability and get it to your door.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading align="left" eyebrow="Why Use Our Delivery" title="Reliable, Careful, On Time" />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PERKS.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl2 border border-slate-100 p-5 dark:border-dark-border"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"><perk.icon /></span>
                  <h3 className="mt-3 font-display text-sm font-semibold">{perk.title}</h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              Prefer WhatsApp? Message us your medicine list directly at <a href={`https://wa.me/${BUSINESS.whatsapp}`} className="font-semibold text-primary hover:underline">{BUSINESS.phone}</a>.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="glass-card flex flex-col gap-4 p-7">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Full Name</label>
              <input {...register('name', { required: 'Name is required' })} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-border dark:bg-dark" placeholder="Your name" />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Phone Number</label>
                <input {...register('phone', { required: 'Phone number is required' })} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-border dark:bg-dark" placeholder="+91" />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Preferred Time</label>
                <input {...register('preferredTime')} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-border dark:bg-dark" placeholder="e.g. Evening" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Delivery Address</label>
              <textarea {...register('address', { required: 'Address is required' })} rows={2} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-border dark:bg-dark" placeholder="Full delivery address in Mathura" />
              {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>}
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Medicines Needed</label>
              <textarea {...register('medicines', { required: 'Please list the medicines you need' })} rows={4} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-primary dark:border-dark-border dark:bg-dark" placeholder="List medicine names, or describe your prescription" />
              {errors.medicines && <p className="mt-1 text-xs text-red-500">{errors.medicines.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="btn-primary mt-2 justify-center text-sm disabled:opacity-60">
              {isSubmitting ? 'Sending…' : 'Submit Delivery Request'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

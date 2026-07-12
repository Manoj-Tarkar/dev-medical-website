import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-3 max-w-2xl ${alignment}`}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight">{title}</h2>
      <div className="capsule-divider" />
      {description && <p className="text-slate-500 dark:text-slate-400">{description}</p>}
    </motion.div>
  )
}

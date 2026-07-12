import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-surface dark:bg-dark">
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-glow"
      >
        <span className="text-2xl font-display font-bold">+</span>
      </motion.div>
      <p className="text-sm font-medium tracking-wide text-slate-400">DEV Medical is loading…</p>
    </div>
  )
}

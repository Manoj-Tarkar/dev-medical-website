import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaClock, FaArrowRight } from 'react-icons/fa'
import SEO from '../components/common/SEO'
import SectionHeading from '../components/common/SectionHeading'
import { BLOG_POSTS } from '../data/reviews'

const CATEGORIES = ['All', ...new Set(BLOG_POSTS.map((p) => p.category))]

export default function HealthTips() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active)

  return (
    <>
      <SEO
        title="Health Tips Blog"
        description="Practical health tips from DEV Medical — seasonal advice, medicine safety, nutrition, first aid and disease prevention guidance for your family."
        path="/health-tips"
      />
      <section className="bg-primary-50/60 py-16 dark:bg-primary-900/10 sm:py-20">
        <div className="container-x text-center">
          <span className="section-eyebrow mx-auto">Health Tips Blog</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Guidance for a Healthier Life</h1>
          <p className="mx-auto mt-5 max-w-xl text-slate-500 dark:text-slate-400">
            Practical, easy-to-follow advice from our pharmacy team on staying healthy year-round.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <SectionHeading eyebrow="Latest Articles" title="Browse by Topic" />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-capsule px-4 py-2 text-xs font-semibold transition ${active === cat ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="flex flex-col gap-3 rounded-xl2 border border-slate-100 p-6 transition hover:shadow-card dark:border-dark-border"
              >
                <span className="section-eyebrow">{post.category}</span>
                <h2 className="font-display font-semibold leading-snug">{post.title}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><FaClock /> {post.readTime}</span>
                  <span className="flex items-center gap-1 font-semibold text-primary">
                    Read more <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

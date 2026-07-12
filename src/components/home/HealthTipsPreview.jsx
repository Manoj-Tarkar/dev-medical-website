import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaClock } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import { BLOG_POSTS } from '../../data/reviews'

export default function HealthTipsPreview() {
  return (
    <section className="bg-white py-20 dark:bg-dark-card/30">
      <div className="container-x">
        <SectionHeading
          eyebrow="From the Blog"
          title="Health Tips & Guidance"
          description="Practical, easy-to-follow health advice from our pharmacy team."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col gap-3 rounded-xl2 border border-slate-100 p-6 transition hover:shadow-card dark:border-dark-border"
            >
              <span className="section-eyebrow">{post.category}</span>
              <h3 className="font-display font-semibold leading-snug">{post.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1"><FaClock /> {post.readTime}</span>
                <Link to="/health-tips" className="flex items-center gap-1 font-semibold text-primary hover:underline">
                  Read <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

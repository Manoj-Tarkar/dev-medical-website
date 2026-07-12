import { useMemo, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import SEO from '../components/common/SEO'
import Accordion from '../components/common/Accordion'
import { FAQS } from '../data/faqs'

export default function FAQ() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => FAQS.filter((f) => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  return (
    <>
      <SEO
        title="FAQ"
        description="Frequently asked questions about DEV Medical — timings, home delivery, prescriptions, product availability and more."
        path="/faq"
      />
      <section className="bg-primary-50/60 py-16 dark:bg-primary-900/10 sm:py-20">
        <div className="container-x text-center">
          <span className="section-eyebrow mx-auto">Got Questions?</span>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">Frequently Asked Questions</h1>
          <div className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-capsule border border-slate-200 bg-white p-1.5 pl-5 shadow-card dark:border-dark-border dark:bg-dark-card">
            <FaSearch className="shrink-0 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search FAQs…"
              className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x max-w-3xl">
          {filtered.length ? (
            <Accordion items={filtered} />
          ) : (
            <p className="text-center text-slate-400">No matching questions found. Try a different search term, or contact us directly.</p>
          )}
        </div>
      </section>
    </>
  )
}

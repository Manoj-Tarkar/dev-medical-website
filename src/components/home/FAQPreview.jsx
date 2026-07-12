import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import Accordion from '../common/Accordion'
import { FAQS } from '../../data/faqs'

export default function FAQPreview() {
  return (
    <section className="py-20">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
        <SectionHeading
          align="left"
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          description="Quick answers about our medicines, delivery and services. Have another question?"
        />
        <div>
          <Accordion items={FAQS.slice(0, 5)} />
          <Link to="/faq" className="btn-outline mt-6 inline-flex text-sm">View All FAQs</Link>
        </div>
      </div>
    </section>
  )
}

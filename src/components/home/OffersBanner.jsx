import { FaGift, FaPercent, FaTruck, FaStethoscope } from 'react-icons/fa'

const OFFERS = [
  { icon: FaPercent, text: '10% off on all vitamin & supplement orders above ₹500' },
  { icon: FaTruck, text: 'Free home delivery within 3km of Lajpat Nagar' },
  { icon: FaStethoscope, text: 'Free blood pressure check every visit' },
  { icon: FaGift, text: 'Loyalty discount for senior citizens' },
]

export default function OffersBanner() {
  const loop = [...OFFERS, ...OFFERS]
  return (
    <div className="overflow-hidden border-y border-primary/20 bg-primary-50 py-3 dark:border-primary-900 dark:bg-primary-900/20">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((offer, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-primary-700 dark:text-primary-300">
            <offer.icon className="shrink-0" />
            {offer.text}
          </div>
        ))}
      </div>
    </div>
  )
}

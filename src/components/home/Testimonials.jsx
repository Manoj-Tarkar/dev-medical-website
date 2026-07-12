import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import SectionHeading from '../common/SectionHeading'
import { REVIEWS } from '../../data/reviews'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What Our Customers Say"
          description="Real feedback from the families and individuals we serve every day."
        />
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="pb-12"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="glass-card flex h-full flex-col gap-4 p-6">
                  <FaQuoteLeft className="text-2xl text-primary/30" />
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{review.text}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="font-display text-sm font-semibold">{review.name}</span>
                    <span className="flex gap-0.5 text-xs text-accent">
                      {Array.from({ length: review.rating }).map((_, i) => <FaStar key={i} />)}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

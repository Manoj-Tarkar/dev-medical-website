import SEO from '../components/common/SEO'
import Hero from '../components/home/Hero'
import OffersBanner from '../components/home/OffersBanner'
import Categories from '../components/home/Categories'
import FeaturedMedicines from '../components/home/FeaturedMedicines'
import HealthProductsSection from '../components/home/HealthProductsSection'
import DoctorRecommended from '../components/home/DoctorRecommended'
import DeliverySection from '../components/home/DeliverySection'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Testimonials from '../components/home/Testimonials'
import HealthTipsPreview from '../components/home/HealthTipsPreview'
import FAQPreview from '../components/home/FAQPreview'
import CTASection from '../components/home/CTASection'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="DEV Medical is a trusted pharmacy in Lajpat Nagar, Mathura offering prescription & OTC medicines, health products and home delivery, open 8 AM to 10 PM daily."
        path="/"
      />
      <Hero />
      <OffersBanner />
      <Categories />
      <FeaturedMedicines />
      <HealthProductsSection />
      <DoctorRecommended />
      <DeliverySection />
      <WhyChooseUs />
      <Testimonials />
      <HealthTipsPreview />
      <FAQPreview />
      <CTASection />
    </>
  )
}

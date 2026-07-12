import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import LoadingScreen from './components/common/LoadingScreen'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Medicines = lazy(() => import('./pages/Medicines'))
const HealthProducts = lazy(() => import('./pages/HealthProducts'))
const HomeDelivery = lazy(() => import('./pages/HomeDelivery'))
const Gallery = lazy(() => import('./pages/Gallery'))
const HealthTips = lazy(() => import('./pages/HealthTips'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/health-products" element={<HealthProducts />} />
            <Route path="/home-delivery" element={<HomeDelivery />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/health-tips" element={<HealthTips />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

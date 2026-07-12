import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollProgressBar from './ScrollProgressBar'
import FloatingButtons from './FloatingButtons'
import EmergencyBanner from './EmergencyBanner'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgressBar />
      <EmergencyBanner />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
      <Toaster position="top-center" toastOptions={{ style: { fontSize: '14px' } }} />
    </div>
  )
}

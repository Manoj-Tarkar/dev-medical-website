import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import SEO from '../components/common/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 py-20 text-center">
        <span className="font-display text-7xl font-bold text-primary/30">404</span>
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="max-w-sm text-slate-500 dark:text-slate-400">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Link to="/" className="btn-primary mt-2 text-sm"><FaHome /> Back to Home</Link>
      </section>
    </>
  )
}

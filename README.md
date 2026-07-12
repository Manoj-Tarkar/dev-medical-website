# DEV Medical — Pharmacy Website

A premium, modern, fully responsive website for **DEV Medical**, a pharmacy located in Lajpat Nagar, Mathura, Uttar Pradesh, India.

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- React Router DOM
- Framer Motion (animations)
- React Icons
- Swiper.js (testimonials carousel)
- EmailJS (contact / delivery forms)
- React Hook Form
- React Hot Toast
- React Helmet Async (SEO)

## Getting Started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/          static images/icons you add
  components/
    layout/        Navbar, Footer, floating buttons, scroll progress, etc.
    home/           Home-page sections (Hero, Categories, Testimonials, etc.)
    common/         Shared UI (SEO, SectionHeading, Accordion, LoadingScreen)
  pages/            One file per route (Home, About, Services, Medicines, ...)
  hooks/            useScrollProgress, useScrollPosition, useCountUp
  context/          ThemeContext (dark/light mode)
  constants/        Business info & nav links
  data/             Medicine categories, services, FAQs, reviews, blog posts
  services/         EmailJS integration
  styles/           Tailwind entrypoint (index.css)
```

## Configuring EmailJS (Contact & Home Delivery forms)

1. Create a free account at https://www.emailjs.com/
2. Create an Email Service and an Email Template.
3. Copy `.env.example` to `.env` and fill in your credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Until these are set, forms run in a safe "demo mode" (they show a success toast but do not send real emails), so the UI can be reviewed without an EmailJS account.

## Business Information

Edit `src/constants/business.js` to update the store's name, address, phone, WhatsApp number, email, hours, and Google Maps embed link.

## SEO

- Per-page meta tags, Open Graph and Twitter Card tags via `react-helmet-async` (`src/components/common/SEO.jsx`)
- Local business (Pharmacy) structured data (JSON-LD)
- `public/robots.txt` and `public/sitemap.xml` included — update the domain before deploying.

## Deployment

See `DEPLOYMENT.md` for step-by-step guides for Vercel and Netlify.

## Notes

- Gallery and About page photos are placeholders — replace with real store photography before launch.
- Medicine prices/stock in `src/data/medicines.js` are sample data — connect to a real inventory source for production use.

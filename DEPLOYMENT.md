# Deployment Guide

## Option 1: Vercel

1. Push this project to a GitHub repository.
2. Go to https://vercel.com and click **New Project**.
3. Import your repository.
4. Framework preset: **Vite** (auto-detected).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Add environment variables (if using EmailJS): `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
8. Click **Deploy**.

## Option 2: Netlify

1. Push this project to a GitHub repository.
2. Go to https://app.netlify.com and click **Add new site → Import an existing project**.
3. Connect your repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add the same environment variables under **Site settings → Environment variables**.
7. Click **Deploy site**.

### Netlify SPA redirect

Because this is a single-page app using React Router, add a `public/_redirects` file (already included) so all routes resolve correctly:

```
/*    /index.html   200
```

## Option 3: Manual / Any Static Host

```bash
npm run build
```

Upload the contents of the generated `dist/` folder to any static hosting provider (GitHub Pages, S3 + CloudFront, Hostinger, etc.). Ensure the host is configured to redirect unknown routes to `index.html` for client-side routing to work.

## Before Going Live — Checklist

- [ ] Replace placeholder gallery/about photos with real store photography
- [ ] Update `src/constants/business.js` if any business details change
- [ ] Set up EmailJS and add real environment variables
- [ ] Update `public/sitemap.xml` and `public/robots.txt` with your live domain
- [ ] Update the Google Maps embed URL in `src/constants/business.js` with your exact pinned location
- [ ] Verify medicine catalogue/pricing in `src/data/medicines.js` reflects real stock
- [ ] Test all forms end-to-end
- [ ] Run a Lighthouse audit for performance/accessibility/SEO

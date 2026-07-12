import { Helmet } from 'react-helmet-async'
import { BUSINESS } from '../../constants/business'

export default function SEO({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | ${BUSINESS.name}` : `${BUSINESS.name} — ${BUSINESS.tagline}`
  const url = `https://www.devmedical.in${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={BUSINESS.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Pharmacy',
          name: BUSINESS.name,
          description,
          telephone: BUSINESS.phone,
          email: BUSINESS.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Lajpat Nagar',
            addressLocality: 'Mathura',
            addressRegion: 'Uttar Pradesh',
            addressCountry: 'IN',
          },
          openingHours: 'Mo-Su 08:00-22:00',
          url,
        })}
      </script>
    </Helmet>
  )
}

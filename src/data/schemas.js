const SITE_URL = 'https://naizon.in'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'NAIZON',
  alternateName: 'NAIZON — Custom Software Development, SaaS & Digital Solutions',
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo.svg`,
  description:
    'Full-cycle software development company building custom web applications, client SaaS platforms, mobile apps (iOS & Android), Windows desktop applications, webpages, and interactive web games.',
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'NAIZON — Custom Software Development & SaaS Solutions',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
}

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
  })),
})

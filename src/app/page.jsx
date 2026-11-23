import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import MosaicInsights from '../components/MosaicInsights'
import Portfolio from '../components/Portfolio'
import NewsAndInsights from '../components/NewsAndInsights'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { organizationSchema, websiteSchema } from '../data/schemas'

export const metadata = {
  title: 'NAIZON | Custom Software, SaaS, Web, Mobile & Desktop Development',
  description:
    'NAIZON is a full-cycle software development company. We build custom web applications, client SaaS platforms, mobile apps, Windows desktop software, webpages, and interactive web games.',
  alternates: {
    canonical: 'https://naizon.in',
  },
}

export default function HomePage() {
  const schemas = [organizationSchema, websiteSchema]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <MosaicInsights />
        <NewsAndInsights />
        <HowItWorks />
        <WhyChooseUs />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

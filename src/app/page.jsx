import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import MosaicInsights from '../components/MosaicInsights'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import AppGamePricing from '../components/AppGamePricing'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import { organizationSchema, websiteSchema } from '../data/schemas'

export const metadata = {
  title: 'NAIZON | Web Development, AI Tools & Tech Solutions',
  description:
    'NAIZON is a website development company serving Delhi and Gurgaon with professional web design, custom development and ecommerce solutions.',
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
        <MosaicInsights />
        <Portfolio />
        <Pricing />
        <AppGamePricing />
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

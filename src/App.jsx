import { useEffect } from 'react'; import Navbar from './components/Navbar'; import Hero from './components/Hero'; import Services from './components/Services'; import Portfolio from './components/Portfolio'; import Pricing from './components/Pricing'; import AppGamePricing from './components/AppGamePricing'; import HowItWorks from './components/HowItWorks'; import WhyChooseUs from './components/WhyChooseUs'; import About from './components/About'; import FAQ from './components/FAQ'; import Contact from './components/Contact'; import Footer from './components/Footer'; import EnquiriesData from './components/EnquiriesData'; import LegalPage from './components/LegalPage'

const sectionRoutes = new Set(['/services', '/work', '/pricing', '/about', '/contact'])

export default function App(){
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  useEffect(() => {
    if (!sectionRoutes.has(path)) return
    window.requestAnimationFrame(() => {
      document.getElementById(path.slice(1))?.scrollIntoView()
    })
  }, [path])

  if (path === '/data') return <EnquiriesData/>
  if (path === '/privacy') return <LegalPage type="privacy"/>
  if (path === '/terms') return <LegalPage type="terms"/>
  if (path === '/refund-policy') return <LegalPage type="refund"/>
  return <><Navbar/><main><Hero/><Services/><Portfolio/><Pricing/><AppGamePricing/><HowItWorks/><WhyChooseUs/><About/><FAQ/><Contact/></main><Footer/></>
}

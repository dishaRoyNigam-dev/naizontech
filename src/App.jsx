import { lazy, Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import AppGamePricing from './components/AppGamePricing'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LegalPage from './components/LegalPage'
import WhatsAppButton from './components/WhatsAppButton'
import SEO, {organizationSchema, websiteSchema} from './components/SEO'
import ServicePage from './components/ServicePage'
import LocationPage from './components/LocationPage'
import NotFound from './components/NotFound'
import {services} from './data/services'

import AboutPage from './components/AboutPage'
import GuidesPage from './components/GuidesPage'
import ResourcePage from './components/ResourcePage'
import {resources} from './data/resources'

const EnquiriesData=lazy(()=>import('./components/EnquiriesData'))
const ResetPassword=lazy(()=>import('./components/ResetPassword'))
const deferred=(component)=><Suspense fallback={<main className="min-h-screen bg-[#f8f8f5]"/>}>{component}</Suspense>

const sectionRoutes = new Set(['/services', '/work', '/pricing', '/contact'])

export default function App(){
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const authHash = new URLSearchParams(window.location.hash.slice(1))
  const isRecoveryLink = authHash.get('type') === 'recovery' || authHash.has('error_description')

  useEffect(() => {
    if (!sectionRoutes.has(path)) return
    window.requestAnimationFrame(() => {
      document.getElementById(path.slice(1))?.scrollIntoView()
    })
  }, [path])

  if (path === '/reset-password' || isRecoveryLink) return <><SEO title="Reset Password | NAIZON" description="Reset your NAIZON account password." path="/reset-password" noindex/>{deferred(<ResetPassword/>)}</>
  if (path === '/data') return <><SEO title="Contact Enquiries | NAIZON" description="Private NAIZON administration area." path="/data" noindex/>{deferred(<EnquiriesData/>)}</>
  if (path === '/privacy') return <><SEO title="Privacy Policy | NAIZON" description="Read the NAIZON privacy policy for website enquiries, personal information, storage, retention and your choices." path={path}/><LegalPage type="privacy"/></>
  if (path === '/terms') return <><SEO title="Terms of Service | NAIZON" description="Read the terms applying to the NAIZON website and its website, application, game, design and related digital services." path={path}/><LegalPage type="terms"/></>
  if (path === '/refund-policy') return <><SEO title="Refund Policy | NAIZON" description="Read the NAIZON refund and cancellation policy for recurring website plans and custom digital projects." path={path}/><LegalPage type="refund"/></>
  if (path === '/about') return <AboutPage/>
  if (path === '/guides') return <GuidesPage/>
  if (resources[path]) return <ResourcePage resource={resources[path]} path={path}/>
  if (services[path]) return <ServicePage service={services[path]} path={path}/>
  if (path === '/delhi/website-development') return <LocationPage locationKey="delhi" path={path}/>
  if (path === '/gurgaon/website-development') return <LocationPage locationKey="gurgaon" path={path}/>
  if (path !== '/' && !sectionRoutes.has(path)) return <NotFound/>
  return <><SEO title="NAIZON | Web Development, AI Tools & Tech Solutions" description="NAIZON is a website development company serving Delhi and Gurgaon with professional web design, custom development and ecommerce solutions." path="/" schemas={[organizationSchema,websiteSchema]}/><Navbar/><main><Hero/><Services/><Portfolio/><Pricing/><AppGamePricing/><HowItWorks/><WhyChooseUs/><About/><FAQ/><Contact/></main><Footer/><WhatsAppButton/></>
}

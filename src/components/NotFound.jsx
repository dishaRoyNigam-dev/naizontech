'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import SEO from './SEO'
export default function NotFound(){return <><SEO title="Page Not Found | NAIZON" description="The page you requested could not be found." path="/404" noindex/><Navbar/><main className="grid min-h-[60vh] place-items-center bg-[#f8f8f5] px-5 py-20 text-center"><div><p className="eyebrow">404 error</p><h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Page not found</h1><p className="mt-5 text-slate-600">The page may have moved or the address may be incorrect.</p><a href="/" className="btn-primary mt-8">Return to NAIZON home</a></div></main><Footer/></>}

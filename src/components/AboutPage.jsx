'use client'

import {
  ArrowRight,
  Check,
  Code2,
  Layers,
  Globe,
  Smartphone,
  Cpu,
  Shield,
  Sparkles,
  Terminal,
} from 'lucide-react'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import SEO from './SEO'
import { breadcrumbSchema, organizationSchema } from '../data/schemas'

const coreCapabilities = [
  {
    icon: Code2,
    title: 'Client SaaS & Cloud Platforms',
    description:
      'We engineer scalable, multi-tenant SaaS platforms complete with subscription billing, automated invoicing, customer portals, role-based access control (RBAC), and high-availability API microservices.',
    tags: ['Multi-Tenancy', 'Stripe & Razorpay', 'Role-Based Access', 'Cloud Microservices'],
  },
  {
    icon: Globe,
    title: 'Custom Web Applications & Portals',
    description:
      'We build responsive business web applications and internal tools designed around your unique operational workflows, replacing rigid off-the-shelf templates with custom, dependable software.',
    tags: ['Next.js SSR', 'React Components', 'Real-time WebSockets', 'Workflow Automation'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications (iOS & Android)',
    description:
      'We develop high-performance cross-platform and native mobile apps with smooth 60FPS animations, offline caching, push notifications, and biometric authentication for consumer and enterprise use.',
    tags: ['Flutter', 'React Native', 'Push Notifications', 'Biometric Auth'],
  },
  {
    icon: Cpu,
    title: 'Windows & Desktop Software',
    description:
      'We build native Windows 11/10 desktop applications and high-throughput local utility tools using C++ and .NET, leveraging hardware acceleration (DirectX / CUDA) for intensive computing and offline workflows.',
    tags: ['Windows 11 Fluent UI', 'WinUI 3 & .NET', 'DirectX Acceleration', 'Offline Engines'],
  },
  {
    icon: Sparkles,
    title: 'Interactive Web Games & 2D Play',
    description:
      'We create engaging HTML5 2D browser games, casual mobile titles, and WebGL interactive brand experiences engineered with fluid physics, custom particle systems, and zero-latency touch controls.',
    tags: ['WebGL 2.0', 'HTML5 Canvas', '60FPS Physics', 'Interactive Sound'],
  },
  {
    icon: Layers,
    title: 'Webpages & High-Converting Stores',
    description:
      'We plan, design, and develop fast, accessible business websites and custom e-commerce storefronts optimized for sub-second loading speeds, technical SEO (Core Web Vitals 100/100), and conversion.',
    tags: ['Core Web Vitals', 'Semantic SEO', 'Dynamic Catalogs', 'Instant Checkout'],
  },
]

const engineeringValues = [
  {
    title: '100% Full IP & Source Code Ownership',
    description:
      'You own every single line of code, design asset, database schema, and deployment script. We hand over the complete repository and cloud credentials with zero proprietary lock-in.',
  },
  {
    title: 'Direct Communication With Real Engineers',
    description:
      'No non-technical middlemen or sales layers. You communicate directly with the senior software engineers and architects who are actually building your product.',
  },
  {
    title: 'Modern, Maintainable Tech Stack',
    description:
      'We engineer using proven, enterprise-standard technologies—Next.js, React, Node.js, Python, C#/.NET, Flutter, and PostgreSQL—ensuring your software remains easy to scale and maintain.',
  },
  {
    title: 'Built-in High Performance & Technical SEO',
    description:
      'Performance is not an afterthought. We build sub-second loading speeds, clean semantic HTML, structured Schema.org markup, and 100/100 Core Web Vitals directly into the code.',
  },
  {
    title: 'Transparent Pricing & Milestone Scopes',
    description:
      'We believe in honest commercials. You receive clear deliverables, fixed sprint milestones, and transparent cost breakdowns before any development work begins.',
  },
  {
    title: 'Dedicated Post-Launch Support & SLAs',
    description:
      'We stand behind the software we deliver. We provide ongoing cloud monitoring, security patch updates, performance tuning, and technical support after your product goes live.',
  },
]

const techStack = [
  {
    category: 'Frontend & UI Engineering',
    items: ['Next.js (Turbopack)', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5 Canvas', 'WebGL 2.0'],
  },
  {
    category: 'Backend & Cloud Infrastructure',
    items: ['Node.js', 'Python', 'Supabase', 'PostgreSQL', 'REST & GraphQL APIs', 'Upstash Redis', 'Cloudflare Edge'],
  },
  {
    category: 'Desktop & Mobile Software',
    items: ['C# / .NET Core', 'WinUI 3 & Win32', 'DirectX 12', 'Flutter', 'React Native', 'Android SDK'],
  },
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About NAIZON | Full-Cycle Software, SaaS & Digital Engineering"
        description="NAIZON is a full-cycle software engineering company based in Delhi-NCR, building custom SaaS platforms, web applications, mobile apps, Windows desktop software, and interactive web games."
        path="/about"
        schemas={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About NAIZON', path: '/about' },
          ]),
        ]}
      />
      <Navbar />
      <main>
        {/* Header / Hero */}
        <header className="border-b border-neutral-200 bg-[#f8f8f5]">
          <div className="shell py-14 sm:py-20 lg:py-24">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-500">
              <a href="/" className="transition-colors hover:text-[#fd5001]">
                Home
              </a>
              <span className="px-2">/</span>
              <span aria-current="page" className="font-medium text-slate-800">
                About NAIZON
              </span>
            </nav>
            <span className="eyebrow">Company Profile · About NAIZON</span>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-.04em] text-slate-950 sm:text-5xl lg:text-6xl">
              Engineering Dependable Software, SaaS &amp; Digital Products
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              NAIZON is a full-cycle software engineering company based in Delhi-NCR, serving ambitious businesses across India and worldwide. We architect, design, build, and support custom web applications, client SaaS platforms, mobile apps (iOS &amp; Android), native Windows desktop software, and interactive web games.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/#contact" className="btn-primary">
                Discuss Your Project <ArrowRight size={17} strokeWidth={2.4} />
              </a>
              <a
                href="/#contact"
                className="btn-secondary"
              >
                Sign Up & Inquire
              </a>
            </div>
          </div>
        </header>

        {/* Who We Are & Our Mission */}
        <section className="section bg-white border-b border-slate-200">
          <div className="shell grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 className="title">Practical decisions. Zero fluff. Dependable engineering.</h2>
            </div>
            <div className="border-t-2 border-slate-900 pt-6 space-y-5">
              <p className="text-lg leading-8 text-slate-800 font-medium">
                We founded NAIZON with a straightforward realization: businesses don’t need buzzwords, layers of non-technical account managers, or bloated vendor lock-in. They need skilled engineers who understand their business workflows, architect clean code, and deliver reliable software on time.
              </p>
              <p className="copy">
                From high-growth startups launching an MVP SaaS platform to established enterprises automating mission-critical desktop and cloud workflows, we act as an end-to-end technical partner. Every solution we deliver is engineered around practical requirements, long-term maintainability, and measurable business growth.
              </p>
              <p className="copy">
                We don’t believe in one-size-fits-all templates. Whether you need a sub-second web application, a native Windows utility with hardware acceleration, or an engaging interactive game, we select the right technical stack and engineer it properly.
              </p>
            </div>
          </div>
        </section>

        {/* What We Engineer (6 Core Pillars) */}
        <section className="section bg-[#f8f8f5] border-b border-slate-200">
          <div className="shell">
            <span className="eyebrow">Our Capabilities</span>
            <h2 className="title">Full-Cycle Software Engineering Spectrum</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              We cover the entire software lifecycle under one roof—from frontend and backend architecture to native desktop and mobile platforms.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreCapabilities.map((item) => {
                const IconComponent = item.icon
                return (
                  <article
                    key={item.title}
                    className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                  >
                    <div>
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fd5001]/10 text-[#fd5001]">
                        <IconComponent size={22} strokeWidth={2.2} />
                      </div>
                      <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-100 pt-5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Engineering Ethos / Why Choose NAIZON */}
        <section className="section bg-white border-b border-slate-200">
          <div className="shell">
            <span className="eyebrow">Our Ethos</span>
            <h2 className="title">Why Ambitious Businesses Partner With Us</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              How we approach software development, client relationships, and long-term product success.
            </p>

            <div className="mt-12 grid gap-8 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-3">
              {engineeringValues.map((val) => (
                <div key={val.title} className="flex flex-col">
                  <div className="flex items-center gap-2.5 text-[#fd5001]">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fd5001]/10">
                      <Check size={14} strokeWidth={2.6} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#fd5001]">
                      Guaranteed Standard
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-950">{val.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Grid */}
        <section className="border-b border-slate-200 bg-[#f8f8f5] py-16 sm:py-20">
          <div className="shell">
            <span className="eyebrow">Technology Foundation</span>
            <h2 className="title">Proven, Modern Engineering Stacks</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              We select tools based on performance, ecosystem maturity, and long-term maintainability.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {techStack.map((stack) => (
                <div
                  key={stack.category}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3">
                    {stack.category}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {stack.items.map((tech) => (
                      <li key={tech} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#fd5001]" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Build CTA Banner */}
        <section className="bg-[#0b101c] py-16 sm:py-20 text-white border-t border-slate-800">
          <div className="shell flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-[#fd5001]/20 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#fd5001]">
                Let’s Build Together
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
                Ready to build your next software product?
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
                Share your requirements with our engineering team. We’ll review your technical scope, recommend the right architecture, and provide a clear commercial roadmap.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#fd5001] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#e04600] active:scale-[0.98] shrink-0"
            >
              Start a Project <ArrowRight size={17} strokeWidth={2.4} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const steps = [
  {
    n: '01',
    badge: 'Phase 01',
    t: 'Discuss',
    d: 'We listen to what you need, who it is for and what success looks like.',
    highlights: [
      'Understand project goals & audience',
      'Clarify feature requirements & constraints',
      'Define clear measurable success criteria',
    ],
  },
  {
    n: '02',
    badge: 'Phase 02',
    t: 'Plan',
    d: 'We define the scope, approach, timeline and commercial terms.',
    highlights: [
      'Detailed scope & architecture planning',
      'Realistic delivery timeline & milestones',
      'Transparent pricing & commercial terms',
    ],
  },
  {
    n: '03',
    badge: 'Phase 03',
    t: 'Design & Build',
    d: 'We work through the interface and development with practical reviews.',
    highlights: [
      'Responsive UI/UX design & wireframes',
      'Clean, maintainable frontend & backend code',
      'Regular progress reviews & feedback loops',
    ],
  },
  {
    n: '04',
    badge: 'Phase 04',
    t: 'Launch',
    d: 'We test, release and provide the agreed support after launch.',
    highlights: [
      'Thorough cross-device & QA testing',
      'Smooth production deployment & domain setup',
      'Agreed post-launch support & updates',
    ],
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const cardRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const stickyThreshold = window.innerHeight * 0.38
      let current = 0

      cardRefs.current.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.top <= stickyThreshold) {
          current = index
        }
      })

      setActiveStep(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToStep = (index) => {
    const el = cardRefs.current[index]
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section id="how-it-works" className="section bg-white scroll-mt-24">
      <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        
        {/* Left Column: Sticky Header & Progress Indicator */}
        <div className="lg:sticky lg:top-28 lg:self-start lg:py-2">
          <SectionHeading
            label="How we work"
            title="A clear process from start to finish."
            text="We keep the process understandable and the work focused on what your business actually needs."
          />

          {/* Step Progress Stepper (Desktop) */}
          <div className="mt-10 hidden lg:block">
            <div className="relative border-l-2 border-slate-200 pl-6 space-y-6">
              {steps.map((step, index) => {
                const isActive = activeStep === index
                const isPassed = activeStep > index

                return (
                  <button
                    key={step.n}
                    type="button"
                    onClick={() => scrollToStep(index)}
                    className="group flex w-full items-start gap-4 text-left transition-all duration-200 focus:outline-none"
                  >
                    {/* Stepper Node */}
                    <span
                      className={`-ml-[35px] flex h-8 w-8 items-center justify-center text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-700 text-white shadow-md ring-4 ring-blue-100'
                          : isPassed
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-white border-2 border-slate-300 text-slate-500 group-hover:border-slate-400'
                      }`}
                    >
                      {step.n}
                    </span>

                    {/* Step Title & Status */}
                    <div className="pt-0.5">
                      <p
                        className={`text-sm font-semibold tracking-tight transition-colors ${
                          isActive
                            ? 'text-blue-700'
                            : 'text-slate-800 group-hover:text-slate-950'
                        }`}
                      >
                        {step.t}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {step.d}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
              >
                Start your project <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Scrolling Step Cards */}
        <div className="relative">
          {steps.map((step, index) => {
            const isActive = activeStep === index

            return (
              <div
                key={step.n}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`sticky transition-all duration-300 border bg-white p-6 sm:p-8 ${
                  isActive
                    ? 'border-blue-700 shadow-[0_16px_40px_rgba(0,0,0,0.08)] ring-1 ring-blue-700/20'
                    : 'border-slate-300 shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
                }`}
                style={{
                  top: `calc(6.5rem + ${index * 2.5}rem)`,
                  marginBottom: index < steps.length - 1 ? '7rem' : '0rem',
                }}
              >
                {/* Card Header Strip (stays visible as cards stack) */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center bg-blue-50 text-[11px] font-bold text-blue-700 border border-blue-200/60">
                      {step.n}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {step.badge}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-blue-700">
                    Step {step.n} of 04
                  </span>
                </div>

                {/* Card Main Content */}
                <div className="mt-5">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {step.t}
                  </h3>
                  <p className="mt-3 text-[15px] sm:text-base leading-7 text-slate-600">
                    {step.d}
                  </p>

                  {/* Highlights Checklist */}
                  <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                    {step.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check size={16} className="shrink-0 text-blue-700" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

'use client'

import { useRef, useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const naizonCustomerStories = [
  {
    title: 'FileWalaTool',
    description:
      'High-speed online workspace for instant image & PDF compression, format conversion, and document workflows.',
    image: '/images/work/work-filewala.jpg',
    imageAlt: 'FileWalaTool high-performance web utility platform by Naizon',
    href: '/website-development',
  },
  {
    title: 'Service Application',
    description:
      'Native mobile workflow for on-demand technician dispatch, live status tracking, and direct customer communication.',
    image: '/images/work/work-service.jpg',
    imageAlt: 'Service management mobile application developed by Naizon',
    href: '/mobile-app-development',
  },
  {
    title: '2D Puzzle Game',
    description:
      'Fluid mobile puzzle game with 60FPS touch responsiveness, custom particle mechanics, and multi-platform Android builds.',
    image: '/images/work/work-game.jpg',
    imageAlt: 'Interactive 2D mobile puzzle game developed by Naizon',
    href: '/#contact',
  },
  {
    title: 'Enterprise SaaS Platforms',
    description:
      'Scalable Next.js and Supabase cloud applications with real-time analytics, role-based access, and microservice APIs.',
    image: '/images/work/work-saas.jpg',
    imageAlt: 'Enterprise SaaS analytics platform engineered by Naizon',
    href: '/web-development',
  },
  {
    title: 'Custom E-Commerce Stores',
    description:
      'High-converting digital storefronts engineered with sub-second product catalogues, dynamic filtering, and frictionless checkout.',
    image: '/images/work/work-ecommerce.jpg',
    imageAlt: 'High-converting custom e-commerce web platform by Naizon',
    href: '/ecommerce-development',
  },
]

export default function Portfolio() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    updateScrollButtons()
    window.addEventListener('resize', updateScrollButtons)
    return () => window.removeEventListener('resize', updateScrollButtons)
  }, [])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.firstElementChild?.offsetWidth || 340
    const scrollAmount = (cardWidth + 24) * (direction === 'left' ? -1 : 1)
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section id="work" className="relative bg-white py-12 sm:py-16 md:py-20 border-b border-slate-100">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10">
        
        {/* Header matching user's reference image: Left Title, Right Navigation Arrows */}
        <div className="flex items-center justify-between mb-8 sm:mb-9">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-normal tracking-tight text-slate-900">
            Customer Stories
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous customer story"
              className="p-1.5 text-slate-300 hover:text-slate-900 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={22} strokeWidth={1.8} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next customer story"
              className="p-1.5 text-slate-900 hover:text-slate-600 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ArrowRight size={22} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel of Tall Portrait Visual Cards */}
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {naizonCustomerStories.map((story, idx) => (
            <a
              key={idx}
              href={story.href}
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[370px] h-[450px] sm:h-[480px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 snap-start bg-slate-900"
            >
              {/* Full-bleed portrait photography with Naizon real content */}
              <img
                src={story.image}
                alt={story.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom dark gradient overlay matching reference screenshot */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-55% to-transparent" />

              {/* Bottom text block with Naizon's content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl lg:text-[25px] font-medium tracking-tight text-white group-hover:text-[#38bdf8] transition-colors">
                  {story.title}
                </h3>
                <p className="mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-neutral-200 line-clamp-3">
                  {story.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

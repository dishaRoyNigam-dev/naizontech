'use client'

import { useRef, useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const customerStories = [
  {
    title: 'Dorman',
    description:
      'Advances AI-driven product innovation and business resilience',
    image: '/images/stories/dorman-card.jpg',
    imageAlt: 'Dorman advances AI-driven product innovation',
    href: '/#contact',
  },
  {
    title: 'Versigent',
    description:
      'Reflects on the role TCS has played in supporting the company expand',
    image: '/images/stories/versigent-card.jpg',
    imageAlt: 'Versigent global manufacturing footprint expansion',
    href: '/#contact',
  },
  {
    title: 'Tata Chemicals',
    description:
      'Reimagines plant maintenance with Gen AI-based interactive solution',
    image: '/images/stories/tata-chem-card.jpg',
    imageAlt: 'Tata Chemicals reimagines plant maintenance',
    href: '/#contact',
  },
  {
    title: 'Vodafone Germany',
    description:
      'Modernises network management systems',
    image: '/images/stories/vodafone-card.jpg',
    imageAlt: 'Vodafone Germany modernises network management systems',
    href: '/#contact',
  },
  {
    title: 'Coop Sweden',
    description:
      'Builds a unified retail platform for smarter ops',
    image: '/images/stories/coop-card.jpg',
    imageAlt: 'Coop Sweden unified retail platform for smarter operations',
    href: '/#contact',
  },
  {
    title: 'Salling Group',
    description:
      'Embarks on Enterprise AI journey with TCS and gets future-ready',
    image: '/images/stories/salling-card.jpg',
    imageAlt: 'Salling Group enterprise AI journey',
    href: '/#contact',
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
          {customerStories.map((story, idx) => (
            <a
              key={idx}
              href={story.href}
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[370px] h-[450px] sm:h-[480px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 snap-start bg-slate-900"
            >
              {/* Full-bleed portrait photography */}
              <img
                src={story.image}
                alt={story.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom dark gradient overlay matching reference screenshot */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 via-55% to-transparent" />

              {/* Bottom text block matching image content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl lg:text-[25px] font-medium tracking-tight text-white">
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

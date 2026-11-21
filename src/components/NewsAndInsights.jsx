'use client'

import { useRef, useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

const insightsData = [
  {
    title: 'Newsroom',
    description:
      'Stay up-to-date on all press announcements, product updates, and platform milestones.',
    image: '/images/insights/spotlight-01.png',
    imageAlt: 'Microphone on a stand in auditorium for press announcements',
    href: '/guides',
  },
  {
    title: 'Insights',
    description:
      'Perspectives that expand your technical knowledge and make your digital systems future ready.',
    image: '/images/insights/spotlight-02.png',
    imageAlt: 'Two business executives smiling and shaking hands',
    href: '/guides',
  },
  {
    title: 'Analyst Recognitions',
    description:
      'Recognised for engineering excellence across web architectures, mobile applications, and digital platforms.',
    image: '/images/insights/spotlight-03.png',
    imageAlt: 'Executive in formal attire near screen with data and bar charts',
    href: '/about',
  },
  {
    title: 'Global Studies',
    description:
      'In-depth research on Core Web Vitals, enterprise cloud scaling, microservice APIs, and modern web architectures.',
    image: '/images/insights/spotlight-04.png',
    imageAlt: 'Executive looking at a digital holographic world map display',
    href: '/guides/seo-friendly-websites',
  },
]

export default function NewsAndInsights() {
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
    <section id="news-insights" className="relative bg-white py-14 sm:py-18 md:py-24 border-b border-slate-100">
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10">
        
        {/* Header: Left Title, Right Navigation Arrows */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-normal tracking-tight text-slate-900">
            News and Insights
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous insight"
              className="p-1.5 text-slate-300 hover:text-slate-900 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={22} strokeWidth={1.8} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Next insight"
              className="p-1.5 text-slate-900 hover:text-slate-600 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ArrowRight size={22} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel of News & Insights Cards */}
        <div
          ref={scrollRef}
          onScroll={updateScrollButtons}
          className="flex gap-6 sm:gap-7 overflow-x-auto scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {insightsData.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] h-[510px] sm:h-[540px] lg:h-[560px] rounded-2xl overflow-hidden bg-black flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 snap-start"
            >
              {/* Top Photographic Half with Wave Vector Horizon */}
              <div className="relative h-[64%] w-full overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Bottom Solid Black Content Block */}
              <div className="flex flex-col justify-between flex-1 p-6 sm:p-7 bg-black">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-[#38bdf8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-[#c4c8d0] line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1.5 text-[12px] font-mono font-bold tracking-wider text-[#38bdf8] transition-transform duration-200 group-hover:translate-x-1">
                  <span>EXPLORE</span>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

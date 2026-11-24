'use client'

import { ChevronDown } from 'lucide-react'
import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[480px] lg:min-h-[540px] max-h-[75vh] w-full flex-col items-center justify-center overflow-hidden bg-[#060814] px-5 py-8 sm:py-10 text-white"
    >
      {/* Cinematic Looping Video & Interactive 60fps Canvas Animation */}
      <HeroBackground />

      {/* Main Hero Centerpiece (Exact Minimal Wipro Style in User's Naizon Brand) */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        
        {/* Centerpiece Brand Typography (No image logo, pure text NAIZON) */}
        <div className="transition-transform duration-300 hover:scale-[1.01]">
          <h1 className="select-none text-5xl font-black tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[86px] leading-none drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]">
            NAIZON
          </h1>
        </div>

        {/* Capabilities Line with Bullets (Exact Match to Wipro Reference Image) */}
        <p className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[14px] font-normal tracking-[0.04em] text-neutral-300 sm:text-[16px] md:text-[18px]">
          <span>web &amp; saas apps</span>
          <span className="text-[#fd5001] opacity-75">•</span>
          <span>mobile &amp; windows software</span>
          <span className="text-[#fd5001] opacity-75">•</span>
          <span>web games</span>
          <span className="text-[#fd5001] opacity-75">•</span>
          <span>custom software solutions</span>
        </p>
      </div>

      {/* Edge Lighting (Kinare Kinare Light Effect) */}
      {/* Left Edge Light Beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#38bdf8]/15 via-[#38bdf8]/04 to-transparent"
      />
      {/* Right Edge Light Beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#fd5001]/16 via-[#fd5001]/04 to-transparent"
      />

      {/* Bottom Luminous Horizon Beam (Clear Separation between Home and Section Below) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center overflow-visible"
      >
        {/* Soft Ambient Horizon Bloom */}
        <div className="h-8 w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-[#fd5001]/35 to-transparent blur-md" />
        {/* Sharp Luminous Horizon Line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/45 via-[#fd5001]/85 to-transparent" />
        {/* Intense Central Laser Highlight */}
        <div className="absolute h-[2px] w-2/3 max-w-2xl bg-gradient-to-r from-transparent via-[#fd5001] via-white to-transparent shadow-[0_0_16px_rgba(253,80,1,0.9)]" />
      </div>

      {/* Bottom Emerging Tab (Exact Match to Wipro's Bottom Pill/Tab) */}
      <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 translate-y-2">
        <a
          href="#services"
          className="group inline-flex items-center gap-1.5 rounded-t-2xl rounded-b-lg border-t border-x border-neutral-200 bg-white px-6 pt-2 pb-3.5 text-[13px] font-bold text-neutral-900 shadow-[0_-4px_24px_rgba(0,0,0,0.35)] transition-all duration-200 hover:bg-neutral-100 hover:pt-2.5 active:scale-95"
        >
          <span>What We Do</span>
          <ChevronDown
            size={15}
            strokeWidth={2.4}
            className="text-neutral-600 transition-transform duration-200 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  )
}

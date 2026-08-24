import {ArrowRight} from 'lucide-react'

export default function Hero(){
  return <section id="home" className="relative w-full border-b border-neutral-200 bg-[#f8f8f5]">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <img src="/images/hero.jpg" alt="" width="5472" height="3648" loading="eager" fetchPriority="high" className="h-full w-full object-cover object-[58%_center] lg:absolute lg:left-[12%] lg:top-0 lg:w-[110%] lg:max-w-none lg:object-center"/>
    </div>
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#f8f8f5]/55 lg:hidden"/>
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#f8f8f5] from-[0%] via-[#f8f8f5]/95 via-[32%] to-transparent to-[58%] lg:block"/>
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10"/>

    <div className="relative mx-auto flex min-h-[660px] w-full max-w-[1320px] items-center px-5 py-14 sm:min-h-[680px] sm:px-6 lg:min-h-[700px] lg:px-8 xl:px-10">
      <div className="w-full max-w-[640px]">
        <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.18em] text-[#107b46]">
          <span className="h-px w-8 bg-[#159455]"/>NAIZON · Website Development &amp; Digital Solutions
        </p>

        <h1 className="max-w-[640px] text-[44px] font-semibold leading-[1.02] tracking-[-.045em] text-neutral-950 sm:text-[54px] lg:text-[64px] xl:text-[68px]">
          <span className="block">Website development</span>
          <span className="block">that grows your business.</span>
        </h1>

        <p className="mt-6 max-w-[580px] text-[17px] leading-7 text-neutral-700 sm:text-lg sm:leading-8">We design and develop responsive business websites, ecommerce experiences, custom web applications and mobile apps with straightforward pricing and ongoing support.</p>

        <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row">
          <a href="#contact" className="group inline-flex min-h-12 items-center justify-center gap-2 bg-neutral-950 px-6 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#107b46]">Start a Project <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5"/></a>
          <a href="#work" className="inline-flex min-h-12 items-center justify-center border border-neutral-600 bg-white/80 px-6 text-[15px] font-semibold text-neutral-950 transition-colors duration-200 hover:border-neutral-950 hover:bg-white">View Our Work</a>
        </div>

        <p className="mt-8 border-l-2 border-[#159455] pl-3 text-sm font-medium text-neutral-700">Website plans available monthly or yearly.</p>
      </div>
    </div>
  </section>
}

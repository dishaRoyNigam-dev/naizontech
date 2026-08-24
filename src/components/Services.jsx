import {ArrowUpRight} from 'lucide-react'

const services=[
  {
    number:'01',
    title:'Website Development',
    description:'Clear, responsive websites that make it easy for customers to understand and contact your business.',
    capabilities:['Business websites','E-commerce','Landing pages','Maintenance'],
    href:'/website-development',
  },
  {
    number:'02',
    title:'Mobile App Development',
    description:'Practical mobile applications designed around your users, workflows and business requirements.',
    capabilities:['Android','Cross-platform','API integration','Business applications'],
    href:'/mobile-app-development',
  },
  {
    number:'03',
    title:'Game Development',
    description:'Focused mobile games with considered mechanics, clear interfaces and reliable Android builds.',
    capabilities:['Unity','2D games','Puzzle games','Casual mobile games'],
    href:'/#contact',
  },
]

export default function Services(){
  return <section id="services" className="bg-white">
    <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:px-10">
      <div className="grid gap-6 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-16 lg:pb-16">
        <div>
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[.18em] text-[#12834b]">Core services</span>
          <h2 className="text-[36px] font-semibold leading-tight tracking-[-.035em] text-neutral-950 sm:text-[44px] lg:text-[50px]">Professional Website Design &amp; Development</h2>
        </div>
        <p className="max-w-[680px] text-lg leading-8 text-neutral-600 lg:justify-self-end">From responsive website design and custom web development services to complete mobile applications, we turn practical ideas into useful digital products.</p>
      </div>

      <div className="border-t border-neutral-300">
        {services.map(service=><article key={service.number} className="group grid gap-6 border-b border-neutral-300 py-8 transition-colors duration-200 hover:bg-[#f8f8f5] sm:py-10 lg:grid-cols-[56px_1fr] lg:px-4 xl:grid-cols-[56px_280px_1fr_1fr] xl:gap-10 xl:py-12">
          <div className="flex items-start justify-between xl:block">
            <span className="text-sm font-semibold tabular-nums text-[#12834b]">{service.number}</span>
            <ArrowUpRight size={18} className="text-neutral-300 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#12834b] xl:hidden"/>
          </div>

          <div>
            <h3 className="text-[23px] font-semibold leading-tight tracking-[-.025em] text-neutral-950 sm:text-[26px]">{service.title}</h3>
          </div>

          <div>
            <p className="max-w-[440px] text-[15px] leading-7 text-neutral-600">{service.description}</p>
            <a href={service.href} className="mt-5 inline-flex items-center gap-2 border-b border-neutral-400 pb-1 text-sm font-semibold text-neutral-900 transition-colors duration-200 hover:border-[#12834b] hover:text-[#12834b]">Learn more <ArrowUpRight size={14}/></a>
          </div>

          <div className="grid content-start grid-cols-1 border-t border-neutral-200 sm:grid-cols-2 xl:border-t-0">
            {service.capabilities.map((capability,index)=><div key={capability} className={'flex min-h-12 items-center gap-3 border-b border-neutral-200 py-3 text-sm font-medium text-neutral-700 '+(index%2===1?'sm:pl-5 sm:border-l':'')}>
              <span className="h-1.5 w-1.5 shrink-0 bg-[#159455]"/>{capability}
            </div>)}
          </div>
        </article>)}
      </div>

      <div className="mt-8 grid gap-4 border-l-2 border-[#159455] bg-[#f4f5f1] px-5 py-5 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-[.15em] text-neutral-950">Supporting services</span>
        <p className="text-sm leading-6 text-neutral-600">UI/UX design, logo design, maintenance and ongoing technical support.</p>
      </div>
    </div>
  </section>
}

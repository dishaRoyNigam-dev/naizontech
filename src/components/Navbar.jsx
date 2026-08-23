import {useState} from 'react'
import {ArrowRight,Menu,X} from 'lucide-react'
const links=[['Services','services'],['Work','work'],['Pricing','pricing'],['About','about'],['Contact','contact']]

export default function Navbar(){
  const[open,setOpen]=useState(false)
  return <header className="sticky top-0 z-50 h-[76px] border-b border-neutral-200 bg-white">
    <nav className="mx-auto grid h-full w-full max-w-[1320px] grid-cols-[1fr_auto] items-center px-5 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8 xl:px-10" aria-label="Primary navigation">
      <a href="/" className="flex w-fit items-center" aria-label="NAIZON home">
        <img src="/logo/logo.svg" alt="NAIZON" width="1200" height="220" className="h-9 w-auto max-w-[196px] object-contain sm:h-10"/>
      </a>
      <div className="hidden h-full items-center lg:flex">
        {links.map(([label,id])=><a key={id} href={'/#'+id} className="group relative flex h-full items-center px-4 text-[14px] font-medium tracking-[.01em] text-neutral-600 transition-colors duration-200 hover:text-neutral-950">{label}<span className="absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 bg-[#159455] transition-transform duration-200 group-hover:scale-x-100"/></a>)}
      </div>
      <div className="hidden justify-self-end lg:block">
        <a href="/#contact" className="group inline-flex h-11 items-center gap-2 border border-[#159455] bg-[#159455] px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#107b46] focus:outline-none focus:ring-2 focus:ring-[#159455] focus:ring-offset-2">Start a Project <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5"/></a>
      </div>
      <button type="button" onClick={()=>setOpen(value=>!value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Close navigation':'Open navigation'} className="grid h-11 w-11 place-items-center justify-self-end border border-neutral-300 text-neutral-900 transition-colors hover:bg-neutral-50 lg:hidden">{open?<X size={21}/>:<Menu size={21}/>}</button>
    </nav>
    <div id="mobile-navigation" className={'absolute left-0 top-full w-full border-b border-neutral-200 bg-white shadow-[0_16px_32px_rgba(0,0,0,.08)] transition duration-200 lg:hidden '+(open?'visible translate-y-0 opacity-100':'invisible -translate-y-2 opacity-0')}>
      <div className="mx-auto max-w-[1320px] px-5 py-4 sm:px-6">
        <div className="divide-y divide-neutral-100 border-y border-neutral-200">
          {links.map(([label,id])=><a key={id} href={'/#'+id} onClick={()=>setOpen(false)} className="flex min-h-12 items-center justify-between py-3 text-[15px] font-medium text-neutral-700">{label}<ArrowRight size={15} className="text-neutral-400"/></a>)}
        </div>
        <a href="/#contact" onClick={()=>setOpen(false)} className="mt-4 flex min-h-12 items-center justify-center gap-2 bg-[#159455] px-5 text-sm font-semibold text-white">Start a Project <ArrowRight size={16}/></a>
      </div>
    </div>
  </header>
}

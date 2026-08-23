import {useId,useLayoutEffect,useRef} from 'react'
import {gsap} from 'gsap'

const LOGO_SOURCE='/logo/logo.svg'

export default function NaizonLogoReveal({className=''}){
  const rootRef=useRef(null)
  const uid=useId().replace(/:/g,'')
  const clip=id=>`${uid}-${id}`

  useLayoutEffect(()=>{
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx=gsap.context(()=>{
      const letters='[data-logo-letter]'
      const face='[data-part="o-face"]'
      const eyes='[data-part="eyes"]'
      const pupils='[data-part="pupils"]'
      const smile='[data-part="smile"]'
      const accents='[data-part="green-accents"]'
      const covers='[data-part="accent-cover"]'

      if(reduced){
        gsap.set(letters,{autoAlpha:1,x:0,y:0,scaleX:1,scaleY:1})
        gsap.set(accents,{autoAlpha:1,scale:1})
        gsap.set(covers,{autoAlpha:0})
        gsap.set(face,{autoAlpha:0})
        return
      }

      gsap.set(letters,{autoAlpha:0})
      gsap.set('[data-part="o"]',{autoAlpha:0,x:-900,y:0,scaleX:1,scaleY:1,transformOrigin:'50% 70%'})
      gsap.set(face,{autoAlpha:0})
      gsap.set(eyes,{scaleY:.08,transformOrigin:'center center'})
      gsap.set(pupils,{x:0})
      gsap.set(smile,{strokeDasharray:45,strokeDashoffset:45,autoAlpha:0})
      gsap.set(accents,{autoAlpha:0,scale:.85,transformOrigin:'center center'})
      gsap.set(covers,{autoAlpha:1})

      const tl=gsap.timeline({defaults:{overwrite:'auto'}})
      tl.set('[data-part="o"]',{autoAlpha:1},.3)
        .to('[data-part="o"]',{x:-560,y:-65,duration:.35,ease:'power2.out'},.3)
        .to('[data-part="o"]',{x:-300,y:0,duration:.3,ease:'power2.in'},.65)
        .to('[data-part="o"]',{scaleX:1.1,scaleY:.9,duration:.09,ease:'power2.out'},.94)
        .to('[data-part="o"]',{scaleX:1,scaleY:1,duration:.13,ease:'back.out(1.3)'},1.03)
        .to('[data-part="o"]',{x:-110,y:-28,duration:.23,ease:'power2.out'},1.16)
        .to('[data-part="o"]',{x:0,y:0,duration:.2,ease:'power2.in'},1.39)
        .to('[data-part="o"]',{scaleX:1.08,scaleY:.92,duration:.08,ease:'power2.out'},1.57)
        .to('[data-part="o"]',{scaleX:1,scaleY:1,duration:.14,ease:'back.out(1.3)'},1.65)
        .set(face,{autoAlpha:1},1.9)
        .to(eyes,{scaleY:.5,duration:.14,ease:'power2.out'},1.9)
        .to(eyes,{scaleY:1,duration:.2,ease:'power2.out'},2.04)
        .to(pupils,{x:-5,duration:.14,ease:'power2.inOut'},2.32)
        .to(pupils,{x:5,duration:.2,ease:'power2.inOut'},2.48)
        .to(pupils,{x:0,duration:.14,ease:'power2.inOut'},2.68)
        .set(smile,{autoAlpha:1},2.78)
        .to(smile,{strokeDashoffset:0,duration:.26,ease:'power2.out'},2.78)
        .to('[data-part="o"]',{y:-10,duration:.12,ease:'power2.out'},3.06)
        .to('[data-part="o"]',{y:0,duration:.14,ease:'power2.in'},3.18)
        .fromTo('[data-part="n-left"]',{x:-34,autoAlpha:0},{x:0,autoAlpha:1,duration:.38,ease:'power3.out'},3.38)
        .fromTo('[data-part="a"]',{y:22,autoAlpha:0},{y:0,autoAlpha:1,duration:.36,ease:'power3.out'},3.5)
        .fromTo('[data-part="i"]',{y:-18,autoAlpha:0},{y:0,autoAlpha:1,duration:.34,ease:'power3.out'},3.62)
        .fromTo('[data-part="z"]',{x:-22,autoAlpha:0},{x:0,autoAlpha:1,duration:.36,ease:'power3.out'},3.74)
        .fromTo('[data-part="n-right"]',{x:34,autoAlpha:0},{x:0,autoAlpha:1,duration:.38,ease:'power3.out'},3.88)
        .to(covers,{autoAlpha:0,duration:.22,ease:'power2.out'},4.3)
        .to(accents,{autoAlpha:1,scale:1,duration:.24,ease:'power2.out'},4.3)
        .to(face,{autoAlpha:0,duration:.25,ease:'power2.out'},4.75)
        .to(rootRef.current,{duration:.75},5)
    },rootRef)

    return()=>ctx.revert()
  },[])

  const letterImage=(part,clipId)=><g id={`${uid}-${part}`} data-logo-letter data-part={part} opacity="0"><image href={LOGO_SOURCE} x="200" y="300" width="1200" height="220" preserveAspectRatio="xMidYMid meet" clipPath={`url(#${clip(clipId)})`}/></g>

  return <div ref={rootRef} className={`mx-auto w-full max-w-[520px] sm:max-w-[620px] lg:max-w-[760px] ${className}`}>
    <svg viewBox="180 290 1240 240" role="img" aria-label="NAIZON" className="block h-auto w-full overflow-visible">
      <defs>
        <clipPath id={clip('clip-n-left')} clipPathUnits="userSpaceOnUse"><rect x="200" y="300" width="225" height="220"/></clipPath>
        <clipPath id={clip('clip-a')} clipPathUnits="userSpaceOnUse"><rect x="425" y="300" width="250" height="220"/></clipPath>
        <clipPath id={clip('clip-i')} clipPathUnits="userSpaceOnUse"><rect x="675" y="300" width="80" height="220"/></clipPath>
        <clipPath id={clip('clip-z')} clipPathUnits="userSpaceOnUse"><rect x="755" y="300" width="250" height="220"/></clipPath>
        <clipPath id={clip('clip-o')} clipPathUnits="userSpaceOnUse"><rect x="1005" y="300" width="215" height="220"/></clipPath>
        <clipPath id={clip('clip-n-right')} clipPathUnits="userSpaceOnUse"><rect x="1220" y="300" width="200" height="220"/></clipPath>
      </defs>

      {letterImage('n-left','clip-n-left')}
      {letterImage('a','clip-a')}
      {letterImage('i','clip-i')}
      {letterImage('z','clip-z')}

      <g id={`${uid}-o`} data-logo-letter data-part="o" opacity="0">
        <image href={LOGO_SOURCE} x="200" y="300" width="1200" height="220" preserveAspectRatio="xMidYMid meet" clipPath={`url(#${clip('clip-o')})`}/>
        <g id={`${uid}-o-face`} data-part="o-face" opacity="0" fill="none" strokeLinecap="round">
          <g data-part="eyes" stroke="#151515" strokeWidth="5">
            <path d="M1066 402v7"/><path d="M1121 402v7"/>
          </g>
          <g data-part="pupils" fill="#159455" stroke="none">
            <circle cx="1066" cy="406" r="2.1"/><circle cx="1121" cy="406" r="2.1"/>
          </g>
          <path data-part="smile" d="M1072 433 Q1094 449 1117 433" stroke="#151515" strokeWidth="4"/>
        </g>
      </g>

      {letterImage('n-right','clip-n-right')}

      <g data-part="accent-cover" fill="#0d0d0d" opacity="0">
        <path d="M0 0 C0.99 0 1.98 0 3 0 C3.35602295 0.63687744 3.7120459 1.27375488 4.07885742 1.92993164 L57 148 C52.34873763 140.34039274 47.75580277 132.68031529 43.51171875 124.78515625 L0 53 Z" transform="translate(547,325)"/>
        <rect x="500" y="450" width="100" height="30"/>
        <path d="M0 0 C1.50969338 .035 3.019 .067 4.529 .095 C8.208 .172 11.885 .292 15.562 .437 C11.25 5.656 6.671 10.3 1.687 14.875 L-74.437 57.437 L-74.437 55.437 L-22.136 5.622 C-16.557 -1.777 -8.346 -.337 0 0 Z" transform="translate(976.4375,323.5625)"/>
      </g>

      <g id={`${uid}-green-accents`} data-part="green-accents" opacity="0">
        <path d="M0 0 C1.50969338 0.03515436 3.01946543 0.06708615 4.52929688 0.09570312 C8.20867977 0.17241657 11.88508435 0.29296997 15.5625 0.4375 C11.25018145 5.6566145 6.67192856 10.30083188 1.6875 14.875 C-4.71997899 20.8074049 -4.71997899 20.8074049 -10.9375 26.9375 C-13.22885167 29.26852876 -15.57145702 31.44667688 -18.0625 33.5625 C-22.77495891 37.60041211 -27.08609056 42.03378448 -31.42626953 46.46337891 C-34.61796706 49.70160524 -37.87386606 52.60353151 -41.4375 55.4375 C-41.9325 56.4275 -41.9325 56.4275 -42.4375 57.4375 C-52.9975 57.4375 -63.5575 57.4375 -74.4375 57.4375 C-74.4375 56.7775 -74.4375 56.1175 -74.4375 55.4375 C-73.14453125 54.16796875 -73.14453125 54.16796875 -71.25 52.625 C-67.26773081 49.25103481 -63.59848713 45.65018406 -59.9375 41.9375 C-56.54799267 38.5085798 -53.18549148 35.11483474 -49.5 32 C-44.92870609 28.12750261 -40.79631576 23.82119778 -36.5859375 19.56640625 C-32.94540923 15.90228925 -29.2777978 12.34777108 -25.26196289 9.09008789 C-23.40069936 7.52105564 -23.40069936 7.52105564 -22.13623047 5.62255859 C-16.55769695 -1.77705837 -8.34652421 -0.33786803 0 0 Z" fill="#059D54" transform="translate(976.4375,323.5625)"/>
        <path d="M0 0 C3.48074057 -0.0876243 6.95182226 -0.21068866 10.42744637 -0.4217186 C32.8749495 -1.75186997 32.8749495 -1.75186997 38.78938484 2.96377945 C42.98627856 8.00423964 47.40986824 15.289403 47.40986824 22.06656265 C20.67986824 22.06656265 -6.05013176 22.06656265 -33.59013176 22.06656265 C-32.7881563 18.85866083 -32.13278382 16.98034265 -30.55888176 14.2110939 C-30.16056145 13.50662125 -29.76224113 12.80214859 -29.35185051 12.07632828 C-28.93548332 11.35123062 -28.51911613 10.62613297 -28.09013176 9.87906265 C-27.67376457 9.14236343 -27.25739738 8.40566422 -26.82841301 7.64664078 C-21.10895013 -2.41332064 -10.85288413 0.26749019 0 0 Z" fill="#0FA058" transform="translate(543.5901317596436,452.9334373474121)"/>
      </g>
    </svg>
  </div>
}

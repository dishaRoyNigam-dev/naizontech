import {useLayoutEffect,useRef} from 'react'
import {gsap} from 'gsap'

export default function NaizonHeroWordmark({className=''}) {
  const rootRef=useRef(null)
  const markRef=useRef(null)

  useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
      const mark=markRef.current
      const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if(reduced){
        gsap.set(mark,{autoAlpha:1,x:0,y:0,scale:1})
        return
      }

      gsap.fromTo(mark,
        {autoAlpha:0,x:0,y:12,scale:.98},
        {
          autoAlpha:1,x:0,y:0,scale:1,duration:1.2,ease:'power2.out',
          onComplete:()=>gsap.set(mark,{clearProps:'transform,opacity,visibility'})
        }
      )
    },rootRef)

    return()=>ctx.revert()
  },[])

  return <div ref={rootRef} className={className}>
    <img ref={markRef} src="/logo/logo.svg" alt="" width="1200" height="220" className="block h-auto w-full object-contain"/>
  </div>
}

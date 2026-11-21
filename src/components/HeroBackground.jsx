'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroBackground() {
  const canvasRef = useRef(null)
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)

  // 0 = Video 1 active (Robotic Cyber Lens), 1 = Video 2 active (Web Architecture Nodes)
  const [activeVideo, setActiveVideo] = useState(0)

  useEffect(() => {
    // Start Video 1 on mount
    if (video1Ref.current) {
      video1Ref.current.play().catch(() => {})
    }
  }, [])

  // Seamless crossfade: trigger 1.2s before Video 1 finishes
  const handleVideo1TimeUpdate = () => {
    const v1 = video1Ref.current
    const v2 = video2Ref.current
    if (!v1 || !v2) return

    if (v1.duration && v1.currentTime >= v1.duration - 1.2 && activeVideo === 0) {
      v2.currentTime = 0
      v2.play().catch(() => {})
      setActiveVideo(1)
    }
  }

  // Seamless crossfade: trigger 1.2s before Video 2 finishes
  const handleVideo2TimeUpdate = () => {
    const v1 = video1Ref.current
    const v2 = video2Ref.current
    if (!v1 || !v2) return

    if (v2.duration && v2.currentTime >= v2.duration - 1.2 && activeVideo === 1) {
      v1.currentTime = 0
      v1.play().catch(() => {})
      setActiveVideo(0)
    }
  }

  // Backup fallback onEnded handlers
  const handleVideo1Ended = () => {
    if (activeVideo === 0) {
      const v2 = video2Ref.current
      if (v2) {
        v2.currentTime = 0
        v2.play().catch(() => {})
      }
      setActiveVideo(1)
    }
  }

  const handleVideo2Ended = () => {
    if (activeVideo === 1) {
      const v1 = video1Ref.current
      if (v1) {
        v1.currentTime = 0
        v1.play().catch(() => {})
      }
      setActiveVideo(0)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Stardust Particles (Floating glowing cyber dots)
    const particleCount = 45
    const particles = []
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.35 - 0.1,
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color:
          Math.random() > 0.65
            ? '#fd5001' // Brand orange
            : Math.random() > 0.35
            ? '#818cf8' // Indigo
            : '#38bdf8', // Cyan
      })
    }

    let time = 0

    const render = () => {
      time += 0.015

      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      ctx.clearRect(0, 0, width, height)

      const mouseOffsetX = (mouse.x - width / 2) * 0.025
      const mouseOffsetY = (mouse.y - height / 2) * 0.025

      // Floating Stardust Particles with Parallax
      ctx.save()
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.vx + mouseOffsetX * 0.01
        p.y += p.vy
        p.alpha += Math.sin(time * 2 + i) * p.pulseSpeed

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        const clampedAlpha = Math.max(0.12, Math.min(0.85, p.alpha))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = clampedAlpha
        ctx.shadowColor = p.color
        ctx.shadowBlur = p.radius > 1.6 ? 7 : 0
        ctx.fill()
      }
      ctx.restore()

      // Interactive Cursor Ambient Glow
      ctx.save()
      const radialGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        360
      )
      radialGlow.addColorStop(0, 'rgba(253, 80, 1, 0.05)')
      radialGlow.addColorStop(0.5, 'rgba(99, 102, 241, 0.02)')
      radialGlow.addColorStop(1, 'transparent')
      ctx.fillStyle = radialGlow
      ctx.fillRect(0, 0, width, height)
      ctx.restore()

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* 1. Deep Midnight Base Layer */}
      <div className="absolute inset-0 bg-[#060814]" />

      {/* 2. DUAL VIDEO SEAMLESS CROSS-FADE CAROUSEL (Blurred for Dreamlike Depth) */}
      {/* Video 1: Custom Robotic Cyber Optics (1920x614) */}
      <video
        ref={video1Ref}
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/videos/hero-poster.jpg"
        onTimeUpdate={handleVideo1TimeUpdate}
        onEnded={handleVideo1Ended}
        className={`absolute inset-0 h-full w-full object-cover object-center filter blur-[6.5px] brightness-[0.82] contrast-[1.05] transition-all duration-[1200ms] ease-in-out ${
          activeVideo === 0
            ? 'opacity-65 scale-110'
            : 'pointer-events-none opacity-0 scale-115'
        }`}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Video 2: Custom Connected Web Technology Nodes (768x432) */}
      <video
        ref={video2Ref}
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleVideo2TimeUpdate}
        onEnded={handleVideo2Ended}
        className={`absolute inset-0 h-full w-full object-cover object-center filter blur-[6.5px] brightness-[0.82] contrast-[1.05] transition-all duration-[1200ms] ease-in-out ${
          activeVideo === 1
            ? 'opacity-65 scale-110'
            : 'pointer-events-none opacity-0 scale-105'
        }`}
      >
        <source src="/videos/hero-bg-2.mp4" type="video/mp4" />
      </video>

      {/* 3. Atmospheric Nebula Glows (Violet, Deep Blue, Brand Orange) */}
      <div className="absolute -left-[10%] top-[12%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#4c1d95]/35 via-[#2e1065]/18 to-transparent blur-[140px]" />
      <div className="absolute -right-[10%] bottom-[8%] h-[580px] w-[580px] rounded-full bg-gradient-to-tl from-[#1e3a8a]/30 via-[#172554]/18 to-transparent blur-[150px]" />

      {/* Centerpiece Radiant Core Warmth (Behind Logo) */}
      <div className="absolute left-1/2 top-[46%] h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#fd5001]/16 via-[#ea580c]/10 to-transparent blur-[110px]" />

      {/* 4. 60FPS Hardware-Accelerated Interactive Canvas (Stardust & Mouse Aura) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-80"
      />

      {/* 5. Precision Tech Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_48%,#000_65%,transparent_100%)]" />

      {/* 6. Cinematic Radial Vignette & Bottom Section Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060814]/20 to-[#060814]/65" />
    </div>
  )
}

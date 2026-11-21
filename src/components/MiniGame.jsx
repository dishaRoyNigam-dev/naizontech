'use client'

import { useEffect, useRef, useState } from 'react'

export default function MiniGame() {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(1280)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId
    let w = (canvas.width = canvas.parentElement?.clientWidth || 340)
    let h = (canvas.height = 200)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      w = canvas.width = canvas.parentElement.clientWidth
      h = canvas.height = 200
    }
    window.addEventListener('resize', handleResize)

    // Game state
    let playerX = w / 2
    let targetX = w / 2
    let isUserControlling = false
    let currentScore = 1280

    // Background stars
    const stars = []
    for (let i = 0; i < 35; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.6 + 0.6,
        speed: Math.random() * 1.2 + 0.4,
      })
    }

    // Lasers
    const lasers = []
    // Targets (energy nodes)
    const targets = []
    // Particle sparks
    const particles = []

    let frameCount = 0

    const spawnTarget = () => {
      targets.push({
        x: Math.random() * (w - 40) + 20,
        y: -15,
        radius: Math.random() * 8 + 8,
        speed: Math.random() * 1.2 + 0.8,
        color: Math.random() > 0.4 ? '#a855f7' : '#38bdf8',
        pulse: 0,
      })
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      isUserControlling = true
      setIsPlaying(true)
    }

    const handleMouseLeave = () => {
      isUserControlling = false
      setIsPlaying(false)
    }

    const handleClick = () => {
      // Fire double lasers
      lasers.push({ x: playerX - 10, y: h - 35, speed: 7 })
      lasers.push({ x: playerX + 10, y: h - 35, speed: 7 })
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    canvas.addEventListener('click', handleClick)

    const loop = () => {
      frameCount++

      // Auto-play AI when not user controlled
      if (!isUserControlling) {
        // Track the lowest target
        if (targets.length > 0) {
          const nearest = targets.reduce((prev, curr) => (curr.y > prev.y ? curr : prev), targets[0])
          targetX = nearest.x
        } else {
          targetX = w / 2 + Math.sin(frameCount * 0.03) * (w * 0.3)
        }
        // Auto fire every 22 frames
        if (frameCount % 22 === 0) {
          lasers.push({ x: playerX - 10, y: h - 35, speed: 7 })
          lasers.push({ x: playerX + 10, y: h - 35, speed: 7 })
        }
      }

      // Smooth player movement lerp
      playerX += (targetX - playerX) * 0.12
      playerX = Math.max(20, Math.min(w - 20, playerX))

      ctx.clearRect(0, 0, w, h)

      // 1. Draw Starfield
      ctx.fillStyle = '#060814'
      ctx.fillRect(0, 0, w, h)

      for (let s of stars) {
        s.y += s.speed
        if (s.y > h) {
          s.y = 0
          s.x = Math.random() * w
        }
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)'
        ctx.fillRect(s.x, s.y, s.size, s.size)
      }

      // 2. Spawn targets
      if (frameCount % 45 === 0 && targets.length < 5) {
        spawnTarget()
      }

      // 3. Update & Draw Lasers
      ctx.strokeStyle = '#fd5001'
      ctx.lineWidth = 2.5
      for (let i = lasers.length - 1; i >= 0; i--) {
        const l = lasers[i]
        l.y -= l.speed
        ctx.beginPath()
        ctx.moveTo(l.x, l.y)
        ctx.lineTo(l.x, l.y - 12)
        ctx.stroke()

        if (l.y < -15) {
          lasers.splice(i, 1)
        }
      }

      // 4. Update & Draw Targets
      for (let ti = targets.length - 1; ti >= 0; ti--) {
        const t = targets[ti]
        t.y += t.speed
        t.pulse += 0.05

        // Check laser collision
        let hit = false
        for (let li = lasers.length - 1; li >= 0; li--) {
          const l = lasers[li]
          const dx = l.x - t.x
          const dy = l.y - t.y
          if (Math.sqrt(dx * dx + dy * dy) < t.radius + 6) {
            hit = true
            lasers.splice(li, 1)
            break
          }
        }

        if (hit) {
          // Explosion particles
          for (let p = 0; p < 8; p++) {
            const angle = Math.random() * Math.PI * 2
            const spd = Math.random() * 3 + 1
            particles.push({
              x: t.x,
              y: t.y,
              vx: Math.cos(angle) * spd,
              vy: Math.sin(angle) * spd,
              life: 1,
              color: t.color,
            })
          }
          targets.splice(ti, 1)
          currentScore += 50
          setScore(currentScore)
          continue
        }

        if (t.y > h + 20) {
          targets.splice(ti, 1)
          continue
        }

        // Draw diamond / hexagon target
        ctx.save()
        ctx.translate(t.x, t.y)
        ctx.rotate(t.pulse)
        ctx.beginPath()
        ctx.moveTo(0, -t.radius)
        ctx.lineTo(t.radius, 0)
        ctx.lineTo(0, t.radius)
        ctx.lineTo(-t.radius, 0)
        ctx.closePath()
        ctx.fillStyle = t.color + '44'
        ctx.fill()
        ctx.strokeStyle = t.color
        ctx.lineWidth = 1.5
        ctx.stroke()
        // Center core
        ctx.beginPath()
        ctx.arc(0, 0, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.fill()
        ctx.restore()
      }

      // 5. Update & Draw Explosion Particles
      for (let pi = particles.length - 1; pi >= 0; pi--) {
        const p = particles[pi]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.04
        if (p.life <= 0) {
          particles.splice(pi, 1)
          continue
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.life
        ctx.fill()
        ctx.globalAlpha = 1
      }

      // 6. Draw Player Spaceship
      ctx.save()
      ctx.translate(playerX, h - 30)

      // Thruster flame
      const flameHeight = 12 + Math.random() * 6
      ctx.beginPath()
      ctx.moveTo(-5, 12)
      ctx.lineTo(5, 12)
      ctx.lineTo(0, 12 + flameHeight)
      ctx.closePath()
      ctx.fillStyle = '#fd5001'
      ctx.shadowColor = '#fd5001'
      ctx.shadowBlur = 10
      ctx.fill()
      ctx.shadowBlur = 0

      // Ship body
      ctx.beginPath()
      ctx.moveTo(0, -18)
      ctx.lineTo(-14, 12)
      ctx.lineTo(0, 6)
      ctx.lineTo(14, 12)
      ctx.closePath()
      ctx.fillStyle = '#1e293b'
      ctx.fill()
      ctx.strokeStyle = '#38bdf8'
      ctx.lineWidth = 1.6
      ctx.stroke()

      // Cockpit
      ctx.beginPath()
      ctx.arc(0, -2, 3.5, 0, Math.PI * 2)
      ctx.fillStyle = '#fd5001'
      ctx.fill()

      ctx.restore()

      animId = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      canvas.removeEventListener('click', handleClick)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#060814] shadow-inner group/game">
      {/* HUD Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-mono tracking-wider text-neutral-300">
        <span className="flex items-center gap-1.5 text-[#fd5001] font-bold">
          <span className="h-2 w-2 rounded-full bg-[#fd5001] animate-pulse" />
          NAIZON GAME LAB
        </span>
        <div className="flex items-center gap-3">
          <span className="text-white font-bold">SCORE: {score.toLocaleString()}</span>
          <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-[#38bdf8]">
            {isPlaying ? 'ACTIVE' : 'AUTO-DEMO'}
          </span>
        </div>
      </div>

      {/* Canvas Screen */}
      <canvas
        ref={canvasRef}
        height={200}
        className="block h-[180px] w-full cursor-crosshair sm:h-[195px]"
        title="Move mouse to pilot ship, click to shoot"
      />

      {/* Interaction Hint Overlay */}
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between pointer-events-none text-[10.5px] text-neutral-400 font-mono">
        <span className="opacity-75">Move cursor to steer · Click to shoot</span>
        <span className="text-[#fd5001] font-semibold">60 FPS WebGL</span>
      </div>
    </div>
  )
}

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SIZE = 720;

// 1. spotlight-01.png: Product Updates (The Monolithic Ship / Cinematic Laser Horizon)
async function generateProductUpdates() {
  const svg = `
    <svg width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Deep Studio Ambient Background -->
        <radialGradient id="spaceGrad" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#0c192c" stop-opacity="0.9" />
          <stop offset="45%" stop-color="#060c16" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#020408" stop-opacity="1" />
        </radialGradient>

        <!-- Anamorphic Blue Light Flare -->
        <radialGradient id="anamorphicGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.65" />
          <stop offset="25%" stop-color="#0284c7" stop-opacity="0.3" />
          <stop offset="70%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>

        <!-- Monolith Body Gradient (Obsidian Glass) -->
        <linearGradient id="monolithFace" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b" />
          <stop offset="40%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>

        <linearGradient id="monolithEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#1e293b" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#60a5fa" stop-opacity="0.8" />
        </linearGradient>

        <!-- Laser Horizon Line -->
        <linearGradient id="laserLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0" />
          <stop offset="35%" stop-color="#38bdf8" stop-opacity="0.8" />
          <stop offset="50%" stop-color="#ffffff" stop-opacity="1" />
          <stop offset="65%" stop-color="#38bdf8" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
        </linearGradient>

        <!-- Drop Shadows -->
        <filter id="monolithShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="24" stdDeviation="36" flood-color="#000000" flood-opacity="0.9" />
        </filter>
        <filter id="laserGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Background -->
      <rect width="${SIZE}" height="${SIZE}" fill="#020408" />
      <rect width="${SIZE}" height="${SIZE}" fill="url(#spaceGrad)" />

      <!-- Subtle Studio Grid Floor -->
      <g stroke="#1e293b" stroke-width="0.7" opacity="0.25">
        <line x1="0" y1="520" x2="${SIZE}" y2="520" />
        <line x1="0" y1="580" x2="${SIZE}" y2="580" />
        <line x1="0" y1="640" x2="${SIZE}" y2="640" />
        <line x1="120" y1="460" x2="60" y2="${SIZE}" />
        <line x1="240" y1="460" x2="200" y2="${SIZE}" />
        <line x1="360" y1="460" x2="360" y2="${SIZE}" />
        <line x1="480" y1="460" x2="520" y2="${SIZE}" />
        <line x1="600" y1="460" x2="660" y2="${SIZE}" />
      </g>

      <!-- Central Atmospheric Light Burst -->
      <ellipse cx="360" cy="340" rx="260" ry="90" fill="url(#anamorphicGlow)" opacity="0.6" />

      <!-- Outer Kinetic Orbit Rings (Precision Engineering) -->
      <g opacity="0.45">
        <ellipse cx="360" cy="340" rx="280" ry="85" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="8 12" />
        <ellipse cx="360" cy="340" rx="210" ry="60" fill="none" stroke="#60a5fa" stroke-width="1.2" />
        <circle cx="150" cy="340" r="3" fill="#38bdf8" filter="url(#laserGlow)" />
        <circle cx="570" cy="340" r="3" fill="#60a5fa" filter="url(#laserGlow)" />
      </g>

      <!-- Central Monolith (Angled 3D Isometric Prism) -->
      <g transform="translate(360, 330)" filter="url(#monolithShadow)">
        <!-- Left Face (Dark shadow) -->
        <polygon points="-110,-150 -10,-210 -10,130 -110,80" fill="#090d16" stroke="url(#monolithEdge)" stroke-width="1.2" />
        
        <!-- Right Face (Glossy Specular) -->
        <polygon points="-10,-210 110,-150 110,80 -10,130" fill="url(#monolithFace)" stroke="url(#monolithEdge)" stroke-width="1.2" />

        <!-- Top Cap Face -->
        <polygon points="-110,-150 -10,-210 110,-150 10,-95" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />

        <!-- Interior Neon Core Pulse Visible Through Obsidian Glass -->
        <line x1="-10" y1="-190" x2="-10" y2="110" stroke="#38bdf8" stroke-width="2.5" filter="url(#laserGlow)" />
        <circle cx="-10" cy="-40" r="16" fill="#38bdf8" fill-opacity="0.3" filter="url(#laserGlow)" />
        <circle cx="-10" cy="-40" r="6" fill="#ffffff" />

        <!-- Floating Release Node Chip -->
        <g transform="translate(-10, 40)">
          <rect x="-60" y="-14" width="120" height="28" rx="14" fill="#030712" fill-opacity="0.85" stroke="#38bdf8" stroke-width="1" />
          <circle cx="-42" cy="0" r="3.5" fill="#10b981" />
          <text x="-30" y="4" fill="#f8fafc" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" font-weight="800" letter-spacing="1.5">v3.4 SHIP</text>
        </g>
      </g>

      <!-- Intense Razor-Sharp Laser Horizon Line -->
      <g filter="url(#laserGlow)">
        <line x1="40" y1="340" x2="680" y2="340" stroke="url(#laserLine)" stroke-width="2" />
        <ellipse cx="360" cy="340" rx="50" ry="4" fill="#ffffff" />
      </g>

      <!-- Floating Technical Telemetry Accents -->
      <g transform="translate(64, 80)" opacity="0.65">
        <text x="0" y="0" fill="#38bdf8" font-family="system-ui, monospace" font-size="10" font-weight="700" letter-spacing="2">NAIZON // RELEASE PIPELINE</text>
        <text x="0" y="16" fill="#64748b" font-family="system-ui, monospace" font-size="9.5">DEPLOYMENT ID: #8942-EDGE-SYNC</text>
      </g>

      <g transform="translate(656, 80)" text-anchor="end" opacity="0.65">
        <text x="0" y="0" fill="#10b981" font-family="system-ui, monospace" font-size="10" font-weight="700" letter-spacing="1">● PRODUCTION LIVE</text>
        <text x="0" y="16" fill="#64748b" font-family="system-ui, monospace" font-size="9.5">GLOBAL CDN 38 REGIONS</text>
      </g>
    </svg>
  `;
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

// 2. spotlight-02.png: Insights (3D Isometric Floating Architecture Lattice)
async function generateEngineeringInsights() {
  const svg = `
    <svg width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="indigoBg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#1e1642" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#0a081c" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#03020a" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="glassEdge" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a855f7" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#6366f1" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.9" />
        </linearGradient>
        <linearGradient id="fiberLaser" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="50%" stop-color="#c084fc" />
          <stop offset="100%" stop-color="#f43f5e" />
        </linearGradient>
        <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="${SIZE}" height="${SIZE}" fill="#03020a" />
      <rect width="${SIZE}" height="${SIZE}" fill="url(#indigoBg)" />

      <!-- Isometric Multi-Tier Architecture Structure -->
      <!-- Center Anchor: (360, 360) -->

      <!-- Vertical Light Conduits Connecting the 3 Planes -->
      <g stroke="url(#fiberLaser)" stroke-width="2.2" opacity="0.75" filter="url(#nodeGlow)">
        <!-- Center Conduit -->
        <line x1="360" y1="180" x2="360" y2="520" stroke-linecap="round" />
        <!-- Left Conduit -->
        <line x1="220" y1="260" x2="220" y2="440" stroke-linecap="round" stroke-dasharray="6 6" />
        <!-- Right Conduit -->
        <line x1="500" y1="260" x2="500" y2="440" stroke-linecap="round" stroke-dasharray="6 6" />
      </g>

      <!-- PLANE 3 (Bottom Layer: Database / Storage Mesh) -->
      <g transform="translate(360, 480)" opacity="0.85">
        <polygon points="0,-70 180,0 0,70 -180,0" fill="#0f0c29" fill-opacity="0.7" stroke="url(#glassEdge)" stroke-width="1.4" />
        <!-- Internal Grid Mesh -->
        <line x1="-90" y1="-35" x2="90" y2="35" stroke="#4c1d95" stroke-width="0.8" opacity="0.5" />
        <line x1="-90" y1="35" x2="90" y2="-35" stroke="#4c1d95" stroke-width="0.8" opacity="0.5" />
        <circle cx="0" cy="0" r="8" fill="#38bdf8" filter="url(#nodeGlow)" />
        <circle cx="0" cy="0" r="3" fill="#ffffff" />
      </g>

      <!-- PLANE 2 (Middle Layer: Compute Core / SSR Runtime) -->
      <g transform="translate(360, 330)">
        <polygon points="0,-85 220,0 0,85 -220,0" fill="#140f35" fill-opacity="0.85" stroke="url(#glassEdge)" stroke-width="1.8" />
        <!-- Isometric Microservice Nodes on Surface -->
        <g transform="translate(0,0)" filter="url(#nodeGlow)">
          <!-- Core Processor Prism -->
          <polygon points="0,-25 35,-8 0,10 -35,-8" fill="#6366f1" fill-opacity="0.5" stroke="#a5b4fc" stroke-width="1.2" />
          <circle cx="0" cy="-8" r="6" fill="#ffffff" />
          
          <!-- Satellite Node 1 (Left) -->
          <circle cx="-110" cy="0" r="7" fill="#c084fc" />
          <line x1="-110" y1="0" x2="0" y2="-8" stroke="#a855f7" stroke-width="1.2" stroke-dasharray="4 4" />

          <!-- Satellite Node 2 (Right) -->
          <circle cx="110" cy="0" r="7" fill="#38bdf8" />
          <line x1="110" y1="0" x2="0" y2="-8" stroke="#38bdf8" stroke-width="1.2" stroke-dasharray="4 4" />
        </g>
      </g>

      <!-- PLANE 1 (Top Layer: Global Edge / Anycast Gateway) -->
      <g transform="translate(360, 180)">
        <polygon points="0,-70 180,0 0,70 -180,0" fill="#1d1547" fill-opacity="0.9" stroke="url(#glassEdge)" stroke-width="1.6" />
        <!-- Edge Gateway Antenna / Pulse -->
        <circle cx="0" cy="0" r="14" fill="#a855f7" fill-opacity="0.3" filter="url(#nodeGlow)" />
        <circle cx="0" cy="0" r="5" fill="#f8fafc" />
        <line x1="0" y1="0" x2="0" y2="-50" stroke="#c084fc" stroke-width="2" filter="url(#nodeGlow)" />
        <circle cx="0" cy="-50" r="4" fill="#38bdf8" />
      </g>

      <!-- Light Data Pulses along Conduits -->
      <circle cx="360" cy="250" r="5" fill="#ffffff" filter="url(#nodeGlow)" />
      <circle cx="360" cy="410" r="5" fill="#ffffff" filter="url(#nodeGlow)" />
      <circle cx="220" cy="350" r="4" fill="#38bdf8" filter="url(#nodeGlow)" />
      <circle cx="500" cy="350" r="4" fill="#ec4899" filter="url(#nodeGlow)" />

      <!-- Minimalist Architectural Labels -->
      <g transform="translate(64, 80)" opacity="0.65">
        <text x="0" y="0" fill="#a855f7" font-family="system-ui, monospace" font-size="10" font-weight="700" letter-spacing="2">SYSTEM TOPOLOGY // DISTRIBUTED</text>
        <text x="0" y="16" fill="#64748b" font-family="system-ui, monospace" font-size="9.5">ZERO-CONTENTION PARALLELISM</text>
      </g>

      <g transform="translate(656, 80)" text-anchor="end" opacity="0.65">
        <text x="0" y="0" fill="#38bdf8" font-family="system-ui, monospace" font-size="10" font-weight="700" letter-spacing="1">12MS GLOBAL P99</text>
        <text x="0" y="16" fill="#64748b" font-family="system-ui, monospace" font-size="9.5">ASYNC SSR PIPELINING</text>
      </g>
    </svg>
  `;
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

// 3. spotlight-04.png: Architecture & Benchmarks (Hyper-Performance Silicon Core)
async function generateBenchmarks() {
  const svg = `
    <svg width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="emeraldBg" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stop-color="#042f2e" stop-opacity="0.9" />
          <stop offset="45%" stop-color="#031a19" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#010807" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="mintLaser" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#34d399" />
          <stop offset="50%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#059669" />
        </linearGradient>
        <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="${SIZE}" height="${SIZE}" fill="#010807" />
      <rect width="${SIZE}" height="${SIZE}" fill="url(#emeraldBg)" />

      <!-- Concentric Benchmark Wave Rings -->
      <g opacity="0.35">
        <circle cx="360" cy="360" r="280" fill="none" stroke="#059669" stroke-width="1" stroke-dasharray="10 15" />
        <circle cx="360" cy="360" r="230" fill="none" stroke="#10b981" stroke-width="1.2" />
        <circle cx="360" cy="360" r="175" fill="none" stroke="#34d399" stroke-width="1.4" stroke-dasharray="6 8" />
      </g>

      <!-- Silicon Processor Die (Central Chamfered Square) -->
      <g transform="translate(360, 360)">
        <!-- Outer Heat Sink / Substrate -->
        <rect x="-130" y="-130" width="260" height="260" rx="36" fill="#041f1c" stroke="#0d9488" stroke-width="1.8" />
        <rect x="-115" y="-115" width="230" height="230" rx="28" fill="#021412" stroke="#042f2e" stroke-width="1.2" />

        <!-- Optical Circuit Traces Cutting into Silicon -->
        <g stroke="#10b981" stroke-width="1.4" opacity="0.75" fill="none" filter="url(#emeraldGlow)">
          <!-- Top Quadrant Traces -->
          <path d="M 0,-115 L 0,-60 L -40,-40" />
          <path d="M -80,-115 L -80,-80 L -40,-40" />
          <path d="M 80,-115 L 80,-80 L 40,-40" />

          <!-- Bottom Quadrant Traces -->
          <path d="M 0,115 L 0,60 L 40,40" />
          <path d="M -80,115 L -80,80 L -40,40" />
          <path d="M 80,115 L 80,80 L 40,40" />

          <!-- Side Traces -->
          <path d="M -115,0 L -60,0 L -40,-40" />
          <path d="M 115,0 L 60,0 L 40,40" />
        </g>

        <!-- Central Holographic 100/100 Core Turbine -->
        <circle cx="0" cy="0" r="64" fill="#03201b" stroke="#34d399" stroke-width="2.5" filter="url(#emeraldGlow)" />
        <circle cx="0" cy="0" r="52" fill="none" stroke="#10b981" stroke-width="1" stroke-dasharray="4 4" />

        <!-- Bold 100 Score Typography -->
        <text x="0" y="10" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="38" font-weight="900" letter-spacing="-1">100</text>
        <text x="0" y="28" text-anchor="middle" fill="#34d399" font-family="system-ui, sans-serif" font-size="9" font-weight="800" letter-spacing="2">CORE VITALS</text>
      </g>

      <!-- Precision Speedometer / Latency Arc -->
      <g transform="translate(360, 360)" filter="url(#emeraldGlow)">
        <!-- Arc from -135deg to 45deg -->
        <circle cx="0" cy="0" r="195" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="320 1000" stroke-linecap="round" />
        <circle cx="138" cy="-138" r="6" fill="#ffffff" stroke="#34d399" stroke-width="3" />
      </g>

      <!-- Minimalist Performance Readout Tags -->
      <g transform="translate(64, 80)" opacity="0.65">
        <text x="0" y="0" fill="#34d399" font-family="system-ui, monospace" font-size="10" font-weight="700" letter-spacing="2">BENCHMARK // LIGHTHOUSE 100</text>
        <text x="0" y="16" fill="#64748b" font-family="system-ui, monospace" font-size="9.5">INP 18MS · LCP 0.58S · CLS 0.000</text>
      </g>

      <g transform="translate(656, 80)" text-anchor="end" opacity="0.65">
        <text x="0" y="0" fill="#34d399" font-family="system-ui, monospace" font-size="10" font-weight="700" letter-spacing="1">100K CONCURRENT USERS</text>
        <text x="0" y="16" fill="#64748b" font-family="system-ui, monospace" font-size="9.5">ZERO PACKET LOSS VERIFIED</text>
      </g>
    </svg>
  `;
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

// 4. spotlight-03.png: Open Builds & Experiments (Kinetic Iridescent Torus / WebGL Lab)
async function generateExperiments() {
  const svg = `
    <svg width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="violetBg" cx="50%" cy="45%" r="70%">
          <stop offset="0%" stop-color="#311042" stop-opacity="0.9" />
          <stop offset="45%" stop-color="#15061f" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#07020a" stop-opacity="1" />
        </radialGradient>
        
        <!-- Iridescent Ribbon Gradient -->
        <linearGradient id="iridescentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="25%" stop-color="#818cf8" />
          <stop offset="50%" stop-color="#c084fc" />
          <stop offset="75%" stop-color="#f43f5e" />
          <stop offset="100%" stop-color="#fbbf24" />
        </linearGradient>

        <linearGradient id="causticBloom" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.4" />
        </linearGradient>

        <filter id="iridescentGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="${SIZE}" height="${SIZE}" fill="#07020a" />
      <rect width="${SIZE}" height="${SIZE}" fill="url(#violetBg)" />

      <!-- Ambient Caustic Light Shimmer -->
      <ellipse cx="360" cy="360" rx="220" ry="220" fill="url(#causticBloom)" opacity="0.3" filter="url(#iridescentGlow)" />

      <!-- Dynamic 3D Iridescent Klein Ribbon / Kinetic Torus -->
      <g transform="translate(360, 360)">
        <!-- Outer Orbital Wireframe Lattice -->
        <g stroke="#a855f7" stroke-width="0.8" opacity="0.35" fill="none">
          <ellipse cx="0" cy="0" rx="260" ry="110" transform="rotate(-30)" />
          <ellipse cx="0" cy="0" rx="260" ry="110" transform="rotate(30)" />
          <ellipse cx="0" cy="0" rx="260" ry="110" transform="rotate(90)" />
        </g>

        <!-- Kinetic Ribbon Sweep (3D Curve) -->
        <path d="M -220,-40 C -120,-240 120,-240 220,-40 C 260,40 180,180 60,180 C -60,180 -160,80 -220,-40 Z" 
              fill="none" stroke="url(#iridescentGrad)" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"
              filter="url(#iridescentGlow)" />

        <!-- Interior Inverse Ribbon Ribbon Layer -->
        <path d="M -180,20 C -90,180 90,180 180,20 C 220,-60 140,-160 0,-160 C -140,-160 -220,-60 -180,20 Z" 
              fill="none" stroke="url(#iridescentGrad)" stroke-width="14" opacity="0.8"
              stroke-linecap="round" />

        <!-- 3D Geometric Floating Octahedron Core -->
        <g transform="translate(0, 0)" filter="url(#iridescentGlow)">
          <!-- Upper Pyramids -->
          <polygon points="0,-48 38,0 0,16" fill="#818cf8" fill-opacity="0.6" stroke="#c084fc" stroke-width="1.2" />
          <polygon points="0,-48 -38,0 0,16" fill="#4f46e5" fill-opacity="0.8" stroke="#c084fc" stroke-width="1.2" />
          <!-- Lower Pyramids -->
          <polygon points="0,48 38,0 0,16" fill="#c084fc" fill-opacity="0.5" stroke="#ec4899" stroke-width="1.2" />
          <polygon points="0,48 -38,0 0,16" fill="#7c3aed" fill-opacity="0.7" stroke="#ec4899" stroke-width="1.2" />
          <!-- Intense Core Spark -->
          <circle cx="0" cy="8" r="5" fill="#ffffff" />
        </g>

        <!-- Swirling Starlight / Particle Embers -->
        <circle cx="-160" cy="-140" r="3.5" fill="#38bdf8" filter="url(#iridescentGlow)" />
        <circle cx="180" cy="-120" r="4" fill="#fbbf24" filter="url(#iridescentGlow)" />
        <circle cx="210" cy="110" r="3" fill="#f43f5e" filter="url(#iridescentGlow)" />
        <circle cx="-120" cy="160" r="4" fill="#a855f7" filter="url(#iridescentGlow)" />
        <circle cx="0" cy="-190" r="3" fill="#ffffff" />
        <circle cx="-60" cy="80" r="2.5" fill="#34d399" />
      </g>

      <!-- Minimalist Research Lab Readout Tags -->
      <g transform="translate(64, 80)" opacity="0.65">
        <text x="0" y="0" fill="#c084fc" font-family="system-ui, monospace" font-size="10" font-weight="700" letter-spacing="2">R&amp;D LAB // EXPERIMENTAL SHADERS</text>
        <text x="0" y="16" fill="#64748b" font-family="system-ui, monospace" font-size="9.5">WEBGL 2.0 · HARDWARE ACCELERATED</text>
      </g>

      <g transform="translate(656, 80)" text-anchor="end" opacity="0.65">
        <text x="0" y="0" fill="#f43f5e" font-family="system-ui, monospace" font-size="10" font-weight="700" letter-spacing="1">OPEN PROTOTYPES</text>
        <text x="0" y="16" fill="#64748b" font-family="system-ui, monospace" font-size="9.5">INTERACTIVE CANVASES &amp; WASM</text>
      </g>
    </svg>
  `;
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

async function run() {
  const dir = path.join(process.cwd(), 'public/images/insights');
  console.log('Generating 4 world-class editorial tech artworks for News & Insights...');

  const puBuf = await generateProductUpdates();
  fs.writeFileSync(path.join(dir, 'spotlight-01.png'), puBuf);
  console.log('✓ spotlight-01.png: Monolithic Laser Ship (Product Updates)');

  const eiBuf = await generateEngineeringInsights();
  fs.writeFileSync(path.join(dir, 'spotlight-02.png'), eiBuf);
  console.log('✓ spotlight-02.png: Isometric Architecture Lattice (Insights)');

  const expBuf = await generateExperiments();
  fs.writeFileSync(path.join(dir, 'spotlight-03.png'), expBuf);
  console.log('✓ spotlight-03.png: Iridescent Quantum Torus (Open Builds & Experiments)');

  const bmBuf = await generateBenchmarks();
  fs.writeFileSync(path.join(dir, 'spotlight-04.png'), bmBuf);
  console.log('✓ spotlight-04.png: Hyper-Performance Silicon Core (Architecture & Benchmarks)');

  console.log('All 4 graphics successfully rendered at 720x720 Retina resolution!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

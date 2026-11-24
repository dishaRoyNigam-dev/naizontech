import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const WIDTH = 600;
const HEIGHT = 750;

// 1. Product Updates (CI/CD Deployment & Production Release)
async function generateProductUpdates() {
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="puGlow" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.4" />
          <stop offset="60%" stop-color="#0a121e" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#04070d" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
      </defs>

      <rect width="${WIDTH}" height="${HEIGHT}" fill="#04070d" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#puGlow)" />

      <!-- Grid lines -->
      <g stroke="#1e293b" stroke-width="0.8" opacity="0.35">
        <line x1="0" y1="120" x2="${WIDTH}" y2="120" />
        <line x1="0" y1="240" x2="${WIDTH}" y2="240" />
        <line x1="0" y1="360" x2="${WIDTH}" y2="360" />
        <line x1="0" y1="480" x2="${WIDTH}" y2="480" />
        <line x1="120" y1="0" x2="120" y2="${HEIGHT}" />
        <line x1="240" y1="0" x2="240" y2="${HEIGHT}" />
        <line x1="360" y1="0" x2="360" y2="${HEIGHT}" />
        <line x1="480" y1="0" x2="480" y2="${HEIGHT}" />
      </g>

      <!-- Top Tag -->
      <g transform="translate(36, 36)">
        <rect width="180" height="28" rx="14" fill="#0284c7" fill-opacity="0.22" stroke="#38bdf8" stroke-opacity="0.4" stroke-width="1" />
        <circle cx="14" cy="14" r="4" fill="#38bdf8" />
        <text x="26" y="18" fill="#e0f2fe" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1.5">RELEASE PIPELINE</text>
      </g>

      <!-- Main Release Console Frame -->
      <g transform="translate(36, 84)">
        <rect width="528" height="580" rx="16" fill="#0c1220" stroke="#334155" stroke-width="1.2" />
        
        <!-- Header bar -->
        <rect width="528" height="42" rx="16" fill="#172238" />
        <rect y="28" width="528" height="14" fill="#172238" />
        <line x1="0" y1="42" x2="528" y2="42" stroke="#1e293b" stroke-width="1" />

        <circle cx="20" cy="21" r="5" fill="#ef4444" />
        <circle cx="36" cy="21" r="5" fill="#f59e0b" />
        <circle cx="52" cy="21" r="5" fill="#10b981" />
        <text x="76" y="25" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">deploy-cluster / production-v3.4.0</text>

        <!-- Live Deployment Status Card -->
        <g transform="translate(20, 60)">
          <rect width="488" height="90" rx="12" fill="#131d32" stroke="#1e293b" stroke-width="1" />
          <text x="18" y="30" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1">CURRENT DEPLOYMENT</text>
          <text x="18" y="64" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Build #1042-PROD</text>
          
          <rect x="340" y="24" width="130" height="26" rx="13" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-width="1" />
          <circle cx="354" cy="37" r="4" fill="#34d399" />
          <text x="366" y="41" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">● LIVE ON EDGE</text>
          
          <text x="340" y="70" fill="#64748b" font-family="system-ui, sans-serif" font-size="10.5">38 Regions Synchronized</text>
        </g>

        <!-- Git Branching / Build Pipeline Steps -->
        <g transform="translate(20, 168)">
          <rect width="488" height="230" rx="12" fill="#131d32" stroke="#1e293b" stroke-width="1" />
          <text x="18" y="28" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700">Automated Verification Pipeline</text>

          <!-- Step 1 -->
          <g transform="translate(18, 48)">
            <circle cx="12" cy="12" r="10" fill="#10b981" fill-opacity="0.2" stroke="#34d399" stroke-width="1.2" />
            <text x="12" y="16" text-anchor="middle" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="800">✓</text>
            <text x="34" y="16" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Static Typecheck &amp; AST Analysis</text>
            <text x="430" y="16" text-anchor="end" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">0.84s</text>
          </g>

          <!-- Line 1 -->
          <line x1="30" y1="74" x2="30" y2="88" stroke="#334155" stroke-width="1.5" stroke-dasharray="3,3" />

          <!-- Step 2 -->
          <g transform="translate(18, 92)">
            <circle cx="12" cy="12" r="10" fill="#10b981" fill-opacity="0.2" stroke="#34d399" stroke-width="1.2" />
            <text x="12" y="16" text-anchor="middle" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="800">✓</text>
            <text x="34" y="16" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Unit &amp; Integration Tests (142/142)</text>
            <text x="430" y="16" text-anchor="end" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">1.42s</text>
          </g>

          <!-- Line 2 -->
          <line x1="30" y1="118" x2="30" y2="132" stroke="#334155" stroke-width="1.5" stroke-dasharray="3,3" />

          <!-- Step 3 -->
          <g transform="translate(18, 136)">
            <circle cx="12" cy="12" r="10" fill="#10b981" fill-opacity="0.2" stroke="#34d399" stroke-width="1.2" />
            <text x="12" y="16" text-anchor="middle" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="800">✓</text>
            <text x="34" y="16" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Serverless Asset Prerender (SSG)</text>
            <text x="430" y="16" text-anchor="end" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">2.18s</text>
          </g>

          <!-- Line 3 -->
          <line x1="30" y1="162" x2="30" y2="176" stroke="#334155" stroke-width="1.5" stroke-dasharray="3,3" />

          <!-- Step 4 -->
          <g transform="translate(18, 180)">
            <circle cx="12" cy="12" r="10" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1.2" />
            <text x="12" y="16" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="800">⚡</text>
            <text x="34" y="16" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Atomic Global CDN Invalidation</text>
            <text x="430" y="16" text-anchor="end" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">0.14s</text>
          </g>
        </g>

        <!-- Metrics Footer -->
        <g transform="translate(20, 414)">
          <rect width="488" height="144" rx="12" fill="#131d32" stroke="#1e293b" stroke-width="1" />
          <text x="18" y="28" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700">Milestone Changelog</text>
          <text x="18" y="52" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">🚀 Native Windows 11 DirectX 12 hardware pipeline added</text>
          <text x="18" y="74" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">⚡ Multi-tenant Supabase SSR auth token rotation</text>
          <text x="18" y="96" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">🎮 60FPS fluid touch physics engine in WebGL</text>
          <text x="18" y="118" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="600">✓ All systems fully operational</text>
        </g>
      </g>
    </svg>
  `;
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

// 2. Engineering Insights (System Design & Architecture Flow)
async function generateEngineeringInsights() {
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="eiGlow" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.4" />
          <stop offset="60%" stop-color="#0a0d1e" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#04050d" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="50%" stop-color="#818cf8" />
          <stop offset="100%" stop-color="#c084fc" />
        </linearGradient>
      </defs>

      <rect width="${WIDTH}" height="${HEIGHT}" fill="#04050d" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#eiGlow)" />

      <!-- Top Tag -->
      <g transform="translate(36, 36)">
        <rect width="180" height="28" rx="14" fill="#4f46e5" fill-opacity="0.25" stroke="#818cf8" stroke-opacity="0.4" stroke-width="1" />
        <circle cx="14" cy="14" r="4" fill="#818cf8" />
        <text x="26" y="18" fill="#e0e7ff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1.5">SYSTEM DESIGN</text>
      </g>

      <!-- Main Node Architecture Blueprint Frame -->
      <g transform="translate(36, 84)">
        <rect width="528" height="580" rx="16" fill="#0b1022" stroke="#312e81" stroke-width="1.2" />

        <!-- Header -->
        <rect width="528" height="42" rx="16" fill="#141a36" />
        <rect y="28" width="528" height="14" fill="#141a36" />
        <line x1="0" y1="42" x2="528" y2="42" stroke="#1e293b" stroke-width="1" />
        <circle cx="20" cy="21" r="5" fill="#ef4444" />
        <circle cx="36" cy="21" r="5" fill="#f59e0b" />
        <circle cx="52" cy="21" r="5" fill="#10b981" />
        <text x="76" y="25" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="11.5">architecture-spec / zero-latency-ssr.draw</text>

        <!-- Visual Topology / System Nodes -->
        <!-- Layer 1: Edge Router -->
        <g transform="translate(40, 68)">
          <rect width="448" height="68" rx="10" fill="#171e3d" stroke="#6366f1" stroke-width="1.2" />
          <circle cx="28" cy="34" r="14" fill="#4f46e5" fill-opacity="0.3" stroke="#818cf8" stroke-width="1" />
          <text x="28" y="38" text-anchor="middle" fill="#818cf8" font-family="system-ui, sans-serif" font-size="12">🌐</text>
          <text x="56" y="28" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Cloudflare Edge &amp; Smart Routing</text>
          <text x="56" y="48" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Global Anycast · Geolocation · DDoS Shield</text>
          
          <rect x="370" y="22" width="64" height="22" rx="6" fill="#10b981" fill-opacity="0.2" />
          <text x="378" y="36" fill="#34d399" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">4.2 ms</text>
        </g>

        <!-- Connecting Line 1 -->
        <line x1="264" y1="136" x2="264" y2="164" stroke="#818cf8" stroke-width="2" stroke-linecap="round" />
        <polygon points="264,168 260,160 268,160" fill="#818cf8" />

        <!-- Layer 2: Next.js SSR & Server Actions -->
        <g transform="translate(40, 168)">
          <rect width="448" height="68" rx="10" fill="#171e3d" stroke="#38bdf8" stroke-width="1.2" />
          <circle cx="28" cy="34" r="14" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1" />
          <text x="28" y="38" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12">▲</text>
          <text x="56" y="28" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Next.js App Router (Turbopack)</text>
          <text x="56" y="48" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Streaming SSR · React Server Components · Hydration</text>

          <rect x="370" y="22" width="64" height="22" rx="6" fill="#10b981" fill-opacity="0.2" />
          <text x="378" y="36" fill="#34d399" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">12 ms</text>
        </g>

        <!-- Connecting Line 2 (Fork to Cache & DB) -->
        <line x1="264" y1="236" x2="264" y2="256" stroke="#818cf8" stroke-width="2" />
        <line x1="150" y1="256" x2="378" y2="256" stroke="#818cf8" stroke-width="2" />
        <line x1="150" y1="256" x2="150" y2="276" stroke="#818cf8" stroke-width="2" />
        <line x1="378" y1="256" x2="378" y2="276" stroke="#818cf8" stroke-width="2" />

        <!-- Layer 3A: Redis In-Memory Cache -->
        <g transform="translate(40, 276)">
          <rect width="216" height="80" rx="10" fill="#171e3d" stroke="#ec4899" stroke-width="1.2" />
          <text x="16" y="26" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700">Upstash Redis</text>
          <text x="16" y="46" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10.5">Session &amp; Token Cache</text>
          <text x="16" y="66" fill="#ec4899" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Hit Rate: 98.4%</text>
        </g>

        <!-- Layer 3B: PostgreSQL Database Cluster -->
        <g transform="translate(272, 276)">
          <rect width="216" height="80" rx="10" fill="#171e3d" stroke="#34d399" stroke-width="1.2" />
          <text x="16" y="26" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12.5" font-weight="700">Supabase Postgres</text>
          <text x="16" y="46" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10.5">Connection Pooling (PgBouncer)</text>
          <text x="16" y="66" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Read Replica: 6ms</text>
        </g>

        <!-- Architecture Principle Box -->
        <g transform="translate(40, 380)">
          <rect width="448" height="175" rx="12" fill="#171e3d" stroke="#312e81" stroke-width="1" />
          <text x="20" y="28" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Core System Design Patterns</text>
          
          <text x="20" y="56" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600">1. Decoupled Frontend &amp; Microservices</text>
          <text x="36" y="74" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10.5">Independent scaling of heavy analytics workloads without blocking UI threads.</text>

          <text x="20" y="104" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600">2. Row-Level Security &amp; Tenant Isolation</text>
          <text x="36" y="122" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10.5">Hardware-enforced JWT policies directly in database queries.</text>

          <text x="20" y="152" fill="#34d399" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700">✓ Zero cold-start latency design</text>
        </g>
      </g>
    </svg>
  `;
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

// 3. Architecture & Benchmarks (Performance, Core Web Vitals, Load Testing)
async function generateBenchmarks() {
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bmGlow" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.4" />
          <stop offset="60%" stop-color="#061612" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#020907" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="meterGreen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#10b981" />
          <stop offset="100%" stop-color="#34d399" />
        </linearGradient>
      </defs>

      <rect width="${WIDTH}" height="${HEIGHT}" fill="#020907" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bmGlow)" />

      <!-- Top Tag -->
      <g transform="translate(36, 36)">
        <rect width="216" height="28" rx="14" fill="#059669" fill-opacity="0.25" stroke="#34d399" stroke-opacity="0.4" stroke-width="1" />
        <circle cx="14" cy="14" r="4" fill="#34d399" />
        <text x="26" y="18" fill="#d1fae5" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1.5">PERFORMANCE AUDIT</text>
      </g>

      <!-- Benchmark Card Frame -->
      <g transform="translate(36, 84)">
        <rect width="528" height="580" rx="16" fill="#071913" stroke="#047857" stroke-width="1.2" />

        <!-- Header -->
        <rect width="528" height="42" rx="16" fill="#0c261e" />
        <rect y="28" width="528" height="14" fill="#0c261e" />
        <line x1="0" y1="42" x2="528" y2="42" stroke="#064e3b" stroke-width="1" />
        <circle cx="20" cy="21" r="5" fill="#ef4444" />
        <circle cx="36" cy="21" r="5" fill="#f59e0b" />
        <circle cx="52" cy="21" r="5" fill="#10b981" />
        <text x="76" y="25" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="11.5">lighthouse-audit / google-core-web-vitals</text>

        <!-- Google Score 100 Gauge -->
        <g transform="translate(34, 65)">
          <circle cx="65" cy="65" r="55" fill="none" stroke="#134e4a" stroke-width="10" />
          <circle cx="65" cy="65" r="55" fill="none" stroke="#34d399" stroke-width="10" stroke-dasharray="345" stroke-dashoffset="10" stroke-linecap="round" />
          <text x="65" y="68" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="32" font-weight="900">100</text>
          <text x="65" y="86" text-anchor="middle" fill="#34d399" font-family="system-ui, sans-serif" font-size="9" font-weight="700">CORE VITALS</text>

          <g transform="translate(150, 15)">
            <text x="0" y="18" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="800">Perfect 100/100 Benchmark</text>
            <text x="0" y="38" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">Zero layout shift, instant time-to-first-byte (TTFB),</text>
            <text x="0" y="56" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">and sub-second Largest Contentful Paint.</text>
          </g>
        </g>

        <!-- Metric Cards Grid (3 Columns) -->
        <g transform="translate(24, 205)">
          <!-- Metric 1: LCP -->
          <rect width="150" height="90" rx="10" fill="#0c261e" stroke="#065f46" stroke-width="1" />
          <text x="14" y="24" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11" font-weight="700">LCP (SPEED)</text>
          <text x="14" y="56" fill="#34d399" font-family="system-ui, sans-serif" font-size="24" font-weight="900">0.58s</text>
          <text x="14" y="74" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="10.5">● Excellent (&lt; 2.5s)</text>

          <!-- Metric 2: INP -->
          <rect x="165" width="150" height="90" rx="10" fill="#0c261e" stroke="#065f46" stroke-width="1" />
          <text x="179" y="24" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11" font-weight="700">INP (RESPONSIVE)</text>
          <text x="179" y="56" fill="#34d399" font-family="system-ui, sans-serif" font-size="24" font-weight="900">18 ms</text>
          <text x="179" y="74" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="10.5">● Sub-frame latency</text>

          <!-- Metric 3: CLS -->
          <rect x="330" width="150" height="90" rx="10" fill="#0c261e" stroke="#065f46" stroke-width="1" />
          <text x="344" y="24" fill="#a7f3d0" font-family="system-ui, sans-serif" font-size="11" font-weight="700">CLS (STABILITY)</text>
          <text x="344" y="56" fill="#34d399" font-family="system-ui, sans-serif" font-size="24" font-weight="900">0.000</text>
          <text x="344" y="74" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="10.5">● Zero layout shift</text>
        </g>

        <!-- High-Load Stress Test Graph -->
        <g transform="translate(24, 315)">
          <rect width="480" height="235" rx="12" fill="#0c261e" stroke="#065f46" stroke-width="1" />
          <text x="18" y="28" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700">100,000 Concurrent User Stress Test</text>
          <text x="18" y="46" fill="#6ee7b7" font-family="system-ui, sans-serif" font-size="11">Zero dropped requests · P99 Response: 48ms</text>

          <!-- Graph axis & bars -->
          <g transform="translate(18, 65)">
            <line x1="0" y1="120" x2="444" y2="120" stroke="#134e4a" stroke-width="1" />
            
            <!-- Bars representing concurrency load -->
            <rect x="20" y="80" width="28" height="40" rx="4" fill="#047857" />
            <text x="34" y="136" text-anchor="middle" fill="#64748b" font-family="system-ui, sans-serif" font-size="9.5">10k</text>

            <rect x="80" y="60" width="28" height="60" rx="4" fill="#059669" />
            <text x="94" y="136" text-anchor="middle" fill="#64748b" font-family="system-ui, sans-serif" font-size="9.5">25k</text>

            <rect x="140" y="40" width="28" height="80" rx="4" fill="#10b981" />
            <text x="154" y="136" text-anchor="middle" fill="#64748b" font-family="system-ui, sans-serif" font-size="9.5">50k</text>

            <rect x="200" y="25" width="28" height="95" rx="4" fill="#34d399" />
            <text x="214" y="136" text-anchor="middle" fill="#64748b" font-family="system-ui, sans-serif" font-size="9.5">75k</text>

            <rect x="260" y="12" width="28" height="108" rx="4" fill="#34d399" />
            <text x="274" y="136" text-anchor="middle" fill="#64748b" font-family="system-ui, sans-serif" font-size="9.5">100k</text>

            <!-- Line showing error rate (flat zero line) -->
            <line x1="10" y1="116" x2="320" y2="116" stroke="#f43f5e" stroke-width="2" />
            <text x="340" y="118" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">0.00% Error Rate</text>
          </g>
        </g>
      </g>
    </svg>
  `;
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

// 4. Open Builds & Experiments (Interactive Prototypes & WebGL Tools)
async function generateExperiments() {
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="expGlow" cx="50%" cy="30%" r="65%">
          <stop offset="0%" stop-color="#9333ea" stop-opacity="0.45" />
          <stop offset="60%" stop-color="#140826" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#070210" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="neonBeam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="50%" stop-color="#a855f7" />
          <stop offset="100%" stop-color="#ec4899" />
        </linearGradient>
      </defs>

      <rect width="${WIDTH}" height="${HEIGHT}" fill="#070210" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#expGlow)" />

      <!-- Top Tag -->
      <g transform="translate(36, 36)">
        <rect width="216" height="28" rx="14" fill="#9333ea" fill-opacity="0.25" stroke="#c084fc" stroke-opacity="0.4" stroke-width="1" />
        <circle cx="14" cy="14" r="4" fill="#c084fc" />
        <text x="26" y="18" fill="#f3e8ff" font-family="system-ui, sans-serif" font-size="11" font-weight="700" letter-spacing="1.5">R&amp;D EXPERIMENTS</text>
      </g>

      <!-- Experiment Sandbox Frame -->
      <g transform="translate(36, 84)">
        <rect width="528" height="580" rx="16" fill="#120925" stroke="#6b21a8" stroke-width="1.2" />

        <!-- Header -->
        <rect width="528" height="42" rx="16" fill="#1c0f38" />
        <rect y="28" width="528" height="14" fill="#1c0f38" />
        <line x1="0" y1="42" x2="528" y2="42" stroke="#3b0764" stroke-width="1" />
        <circle cx="20" cy="21" r="5" fill="#ef4444" />
        <circle cx="36" cy="21" r="5" fill="#f59e0b" />
        <circle cx="52" cy="21" r="5" fill="#10b981" />
        <text x="76" y="25" fill="#d8b4fe" font-family="system-ui, sans-serif" font-size="11.5">lab.naizon.in / webgl-shader-mesh.wasm</text>

        <!-- Interactive 3D Mesh Wireframe Canvas -->
        <g transform="translate(24, 60)">
          <rect width="480" height="240" rx="12" fill="#0b041a" stroke="#4c1d95" stroke-width="1" />
          
          <!-- Cyber Wave Lines -->
          <g stroke="url(#neonBeam)" stroke-width="1.6" fill="none" opacity="0.85">
            <path d="M 20 180 Q 120 40 240 140 T 460 80" />
            <path d="M 20 195 Q 120 55 240 155 T 460 95" opacity="0.6" />
            <path d="M 20 210 Q 120 70 240 170 T 460 110" opacity="0.4" />
            <path d="M 20 225 Q 120 85 240 185 T 460 125" opacity="0.2" />
          </g>

          <!-- Nodes on Mesh -->
          <circle cx="120" cy="80" r="5" fill="#38bdf8" />
          <circle cx="240" cy="140" r="6" fill="#a855f7" />
          <circle cx="360" cy="100" r="5" fill="#ec4899" />

          <!-- Lab Specs Overlay -->
          <g transform="translate(18, 18)">
            <rect width="160" height="24" rx="6" fill="#170d32" stroke="#581c87" stroke-width="1" />
            <text x="10" y="16" fill="#e879f9" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">WebGL 2.0 Shader Matrix</text>
          </g>

          <g transform="translate(360, 18)">
            <rect width="100" height="24" rx="6" fill="#10b981" fill-opacity="0.2" />
            <text x="12" y="16" fill="#34d399" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">60 FPS Render</text>
          </g>
        </g>

        <!-- Developer Tools & Prototypes Grid -->
        <g transform="translate(24, 320)">
          <rect width="480" height="230" rx="12" fill="#180e30" stroke="#4c1d95" stroke-width="1" />
          <text x="18" y="28" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Experimental Tooling &amp; Lab Projects</text>

          <!-- Tool 1 -->
          <g transform="translate(18, 48)">
            <rect width="444" height="46" rx="8" fill="#120827" stroke="#3b0764" stroke-width="1" />
            <text x="14" y="24" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="600">FileWala Compression Engine (WASM)</text>
            <text x="14" y="38" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">In-browser client-side PDF compression without server uploads.</text>
            <text x="424" y="28" text-anchor="end" fill="#c084fc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">OPEN</text>
          </g>

          <!-- Tool 2 -->
          <g transform="translate(18, 104)">
            <rect width="444" height="46" rx="8" fill="#120827" stroke="#3b0764" stroke-width="1" />
            <text x="14" y="24" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="600">StateSync: Real-time Multi-Cursor Engine</text>
            <text x="14" y="38" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">WebRTC + CRDT based peer synchronization framework.</text>
            <text x="424" y="28" text-anchor="end" fill="#c084fc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">OPEN</text>
          </g>

          <!-- Tool 3 -->
          <g transform="translate(18, 160)">
            <rect width="444" height="46" rx="8" fill="#120827" stroke="#3b0764" stroke-width="1" />
            <text x="14" y="24" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Vector UI Physics Playground</text>
            <text x="14" y="38" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Hardware-accelerated fluid drag &amp; magnetic particle snaps.</text>
            <text x="424" y="28" text-anchor="end" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">ACTIVE</text>
          </g>
        </g>
      </g>
    </svg>
  `;
  return await sharp(Buffer.from(svg)).png().toBuffer();
}

async function run() {
  const dir = path.join(process.cwd(), 'public/images/insights');
  console.log('Generating 4 News and Insights engineering graphics...');

  const puBuf = await generateProductUpdates();
  fs.writeFileSync(path.join(dir, 'spotlight-01.png'), puBuf);
  console.log('1. Generated spotlight-01.png (Product Updates / Release Pipeline)');

  const eiBuf = await generateEngineeringInsights();
  fs.writeFileSync(path.join(dir, 'spotlight-02.png'), eiBuf);
  console.log('2. Generated spotlight-02.png (System Design & Architecture Flow)');

  const bmBuf = await generateBenchmarks();
  fs.writeFileSync(path.join(dir, 'spotlight-04.png'), bmBuf);
  console.log('3. Generated spotlight-04.png (Architecture & Benchmarks - replaces Global Studies)');

  const expBuf = await generateExperiments();
  fs.writeFileSync(path.join(dir, 'spotlight-03.png'), expBuf);
  console.log('4. Generated spotlight-03.png (Open Builds & Experiments - replaces Analyst Recognitions)');

  console.log('All 4 graphics successfully written to public/images/insights/ !');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

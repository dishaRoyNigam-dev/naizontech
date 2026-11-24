import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const WIDTH = 800;
const HEIGHT = 1080;

// Helper to create dark gradient base with grid & ambient bloom
function createBaseSvg(title, category, accentColor, glowColor) {
  return `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="25%" r="65%">
          <stop offset="0%" stop-color="${glowColor}" stop-opacity="0.32" />
          <stop offset="60%" stop-color="#0a0e17" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#05070d" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#161f30" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#0b101b" stop-opacity="0.95" />
        </linearGradient>
        <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${accentColor}" />
          <stop offset="100%" stop-color="#38bdf8" />
        </linearGradient>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1" />
        </pattern>
      </defs>

      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#060911" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGlow)" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)" />

      <!-- Top Category & Product Design Tag -->
      <g transform="translate(48, 48)">
        <rect x="0" y="0" width="168" height="28" rx="14" fill="${glowColor}" fill-opacity="0.25" stroke="${accentColor}" stroke-opacity="0.4" stroke-width="1" />
        <circle cx="14" cy="14" r="4" fill="${accentColor}" />
        <text x="26" y="18" fill="#e2e8f0" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="1.5">${category}</text>
      </g>
    </svg>
  `;
}

// 1. Custom SaaS & Cloud Systems Mockup
async function generateSaasMockup() {
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="saasGlow" cx="50%" cy="28%" r="60%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.38" />
          <stop offset="70%" stop-color="#0b1322" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#04070e" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="chartLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="50%" stop-color="#60a5fa" />
          <stop offset="100%" stop-color="#a855f7" />
        </linearGradient>
        <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
        </linearGradient>
        <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.65" />
        </filter>
      </defs>

      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#04070e" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#saasGlow)" />

      <!-- Top Badge -->
      <g transform="translate(48, 44)">
        <rect x="0" y="0" width="180" height="30" rx="15" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" stroke-opacity="0.5" stroke-width="1" />
        <circle cx="16" cy="15" r="4" fill="#38bdf8" />
        <text x="28" y="19" fill="#e0f2fe" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" letter-spacing="1.5">CLIENT SAAS PLATFORM</text>
      </g>

      <!-- SaaS Window Frame Container -->
      <g transform="translate(48, 96)" filter="url(#cardShadow)">
        <!-- Window Outer Chrome -->
        <rect width="704" height="640" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
        
        <!-- Header Bar -->
        <rect width="704" height="48" rx="16" fill="#1e293b" />
        <rect y="32" width="704" height="16" fill="#1e293b" />
        <line x1="0" y1="48" x2="704" y2="48" stroke="#334155" stroke-width="1" />

        <!-- Window Dots -->
        <circle cx="24" cy="24" r="5.5" fill="#ef4444" />
        <circle cx="42" cy="24" r="5.5" fill="#f59e0b" />
        <circle cx="60" cy="24" r="5.5" fill="#10b981" />

        <!-- App Breadcrumb -->
        <text x="88" y="28" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12.5" font-weight="500">Naizon Cloud / <tspan fill="#f8fafc" font-weight="700">Analytics &amp; Billing</tspan></text>
        
        <!-- Search bar inside header -->
        <rect x="360" y="12" width="220" height="24" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
        <text x="372" y="28" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Search tenant, API, logs...</text>
        
        <!-- Live status indicator -->
        <rect x="596" y="12" width="92" height="24" rx="12" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-opacity="0.3" stroke-width="1" />
        <circle cx="608" cy="24" r="3.5" fill="#10b981" />
        <text x="618" y="28" fill="#34d399" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">99.98% SLA</text>

        <!-- Sidebar Navigation -->
        <rect x="0" y="48" width="168" height="592" fill="#090d16" fill-opacity="0.75" />
        <line x1="168" y1="48" x2="168" y2="640" stroke="#1e293b" stroke-width="1" />

        <!-- Nav Items -->
        <rect x="12" y="68" width="144" height="34" rx="8" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7" stroke-opacity="0.4" stroke-width="1" />
        <text x="36" y="89" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Dashboard</text>
        <circle cx="24" cy="85" r="3.5" fill="#38bdf8" />

        <text x="36" y="128" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="500">Multi-Tenancy</text>
        <circle cx="24" cy="124" r="3" fill="#64748b" />

        <text x="36" y="166" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="500">Subscriptions</text>
        <circle cx="24" cy="162" r="3" fill="#64748b" />

        <text x="36" y="204" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="500">API Webhooks</text>
        <circle cx="24" cy="200" r="3" fill="#64748b" />

        <text x="36" y="242" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="500">Security &amp; RBAC</text>
        <circle cx="24" cy="238" r="3" fill="#64748b" />

        <!-- Main Dashboard Canvas -->
        <!-- KPI Card 1: MRR -->
        <rect x="188" y="68" width="240" height="92" rx="12" fill="#131d2e" stroke="#1e293b" stroke-width="1" />
        <text x="204" y="92" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" letter-spacing="0.5">MONTHLY RECURRING REVENUE</text>
        <text x="204" y="130" fill="#ffffff" font-family="system-ui, sans-serif" font-size="27" font-weight="800">$58,420</text>
        <rect x="336" y="110" width="76" height="22" rx="6" fill="#10b981" fill-opacity="0.18" />
        <text x="345" y="125" fill="#34d399" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">+24.8% ↑</text>

        <!-- KPI Card 2: Active Tenants -->
        <rect x="444" y="68" width="240" height="92" rx="12" fill="#131d2e" stroke="#1e293b" stroke-width="1" />
        <text x="460" y="92" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" letter-spacing="0.5">ACTIVE WORKSPACES</text>
        <text x="460" y="130" fill="#ffffff" font-family="system-ui, sans-serif" font-size="27" font-weight="800">1,482</text>
        <rect x="584" y="110" width="84" height="22" rx="6" fill="#0284c7" fill-opacity="0.18" />
        <text x="593" y="125" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">+142 new</text>

        <!-- Revenue Growth Chart Container -->
        <rect x="188" y="176" width="496" height="220" rx="12" fill="#131d2e" stroke="#1e293b" stroke-width="1" />
        <text x="204" y="202" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Platform Throughput &amp; Cloud Ingestion</text>
        <text x="204" y="218" fill="#64748b" font-family="system-ui, sans-serif" font-size="10.5">Real-time microservice events &amp; subscriber growth</text>

        <!-- SVG Line Chart with glow -->
        <path d="M 204 350 Q 260 320 310 330 T 420 270 T 520 290 T 600 240 T 660 220 L 660 360 L 204 360 Z" fill="url(#chartFill)" />
        <path d="M 204 350 Q 260 320 310 330 T 420 270 T 520 290 T 600 240 T 660 220" fill="none" stroke="url(#chartLine)" stroke-width="3" stroke-linecap="round" />
        
        <!-- Chart point badges -->
        <circle cx="660" cy="220" r="5" fill="#ffffff" stroke="#38bdf8" stroke-width="3" />

        <!-- Microservices Health Rows -->
        <rect x="188" y="412" width="496" height="200" rx="12" fill="#131d2e" stroke="#1e293b" stroke-width="1" />
        <text x="204" y="438" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Multi-Tenant Services</text>

        <!-- Row 1 -->
        <line x1="204" y1="452" x2="668" y2="452" stroke="#1e293b" stroke-width="1" />
        <circle cx="216" cy="474" r="4" fill="#10b981" />
        <text x="230" y="478" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">auth-cluster.prod</text>
        <text x="440" y="478" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Supabase SSR Auth</text>
        <text x="630" y="478" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">18ms</text>

        <!-- Row 2 -->
        <line x1="204" y1="496" x2="668" y2="496" stroke="#1e293b" stroke-width="1" />
        <circle cx="216" cy="518" r="4" fill="#10b981" />
        <text x="230" y="522" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">billing-webhook.sync</text>
        <text x="440" y="522" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Automated Invoicing</text>
        <text x="630" y="522" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">24ms</text>

        <!-- Row 3 -->
        <line x1="204" y1="540" x2="668" y2="540" stroke="#1e293b" stroke-width="1" />
        <circle cx="216" cy="562" r="4" fill="#10b981" />
        <text x="230" y="566" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">tenant-db-replica</text>
        <text x="440" y="566" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">PostgreSQL Read Pools</text>
        <text x="630" y="566" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">12ms</text>
      </g>

      <!-- Bottom Dark Gradient for Seamless Typography Overlay -->
      <rect y="720" width="${WIDTH}" height="360" fill="url(#bottomFade)" />
      <defs>
        <linearGradient id="bottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#04070e" stop-opacity="0" />
          <stop offset="45%" stop-color="#04070e" stop-opacity="0.88" />
          <stop offset="100%" stop-color="#04070e" stop-opacity="1" />
        </linearGradient>
      </defs>
    </svg>
  `;
  return await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toBuffer();
}

// 2. Mobile Applications (iOS & Android) Mockup
async function generateMobileMockup() {
  // We composite the real mobile app screen into a sleek Titanium smartphone frame
  const mobileScreenPath = path.join(process.cwd(), 'public/images/Service Application.png');
  let screenBuffer = null;
  if (fs.existsSync(mobileScreenPath)) {
    // Resize the real mobile app to fit into phone frame (320w x 570h)
    screenBuffer = await sharp(mobileScreenPath)
      .resize(326, 580, { fit: 'cover', position: 'top' })
      .toBuffer();
  }

  const svgBase = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mobileGlow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.35" />
          <stop offset="70%" stop-color="#090f1e" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#04070e" stop-opacity="1" />
        </radialGradient>
        <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#000000" flood-opacity="0.85" />
        </filter>
        <linearGradient id="titaniumFrame" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#475569" />
          <stop offset="50%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <linearGradient id="bottomFade2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#04070e" stop-opacity="0" />
          <stop offset="45%" stop-color="#04070e" stop-opacity="0.88" />
          <stop offset="100%" stop-color="#04070e" stop-opacity="1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#04070e" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#mobileGlow)" />

      <!-- Top Badge -->
      <g transform="translate(48, 44)">
        <rect x="0" y="0" width="194" height="30" rx="15" fill="#1d4ed8" fill-opacity="0.2" stroke="#60a5fa" stroke-opacity="0.5" stroke-width="1" />
        <circle cx="16" cy="15" r="4" fill="#60a5fa" />
        <text x="28" y="19" fill="#dbeafe" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" letter-spacing="1.5">NATIVE MOBILE APPS</text>
      </g>

      <!-- Smartphone Device Mockup (Centered) -->
      <g transform="translate(225, 95)" filter="url(#phoneShadow)">
        <!-- Outer Chassis -->
        <rect width="350" height="610" rx="46" fill="url(#titaniumFrame)" stroke="#64748b" stroke-width="1.8" />
        
        <!-- Inner Bezel -->
        <rect x="10" y="10" width="330" height="590" rx="38" fill="#020617" stroke="#1e293b" stroke-width="1.2" />

        <!-- Dynamic Island / Top Speaker Pill -->
        <rect x="127" y="18" width="96" height="24" rx="12" fill="#000000" />
        <circle cx="198" cy="30" r="4.5" fill="#1e293b" />

        <!-- Screen Placeholder Area (x: 12, y: 15, w: 326, h: 580) -->
      </g>

      <!-- Floating Tech Chips beside phone -->
      <g transform="translate(62, 220)">
        <rect width="138" height="52" rx="12" fill="#0f172a" fill-opacity="0.95" stroke="#334155" stroke-width="1" />
        <text x="14" y="24" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">FLUTTER &amp; REACT</text>
        <text x="14" y="42" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">60FPS Native UI</text>
      </g>

      <g transform="translate(600, 340)">
        <rect width="144" height="52" rx="12" fill="#0f172a" fill-opacity="0.95" stroke="#334155" stroke-width="1" />
        <text x="14" y="24" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">LIVE GPS &amp; PUSH</text>
        <text x="14" y="42" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Real-time sync</text>
      </g>

      <!-- Bottom Dark Gradient for Text Readability -->
      <rect y="720" width="${WIDTH}" height="360" fill="url(#bottomFade2)" />
    </svg>
  `;

  let baseImage = sharp(Buffer.from(svgBase));
  if (screenBuffer) {
    // Composite the real screen at (237, 110) inside the bezel!
    baseImage = baseImage.composite([
      {
        input: screenBuffer,
        top: 110,
        left: 237,
      },
    ]);
  }
  return await baseImage.jpeg({ quality: 92 }).toBuffer();
}

// 3. Interactive Web & 2D Games Mockup
async function generateGameMockup() {
  const gameScreenPath = path.join(process.cwd(), 'public/images/game.png');
  let gameBuffer = null;
  if (fs.existsSync(gameScreenPath)) {
    gameBuffer = await sharp(gameScreenPath)
      .resize(270, 520, { fit: 'contain', background: '#0a0d18' })
      .toBuffer();
  }

  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gameGlow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#9333ea" stop-opacity="0.38" />
          <stop offset="70%" stop-color="#110d24" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#05030d" stop-opacity="1" />
        </radialGradient>
        <filter id="gameShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#000000" flood-opacity="0.85" />
        </filter>
        <linearGradient id="gameHudGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#ef4444" />
        </linearGradient>
        <linearGradient id="bottomFade3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#05030d" stop-opacity="0" />
          <stop offset="45%" stop-color="#05030d" stop-opacity="0.88" />
          <stop offset="100%" stop-color="#05030d" stop-opacity="1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#05030d" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#gameGlow)" />

      <!-- Top Badge -->
      <g transform="translate(48, 44)">
        <rect x="0" y="0" width="206" height="30" rx="15" fill="#9333ea" fill-opacity="0.22" stroke="#c084fc" stroke-opacity="0.5" stroke-width="1" />
        <circle cx="16" cy="15" r="4" fill="#c084fc" />
        <text x="28" y="19" fill="#f3e8ff" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" letter-spacing="1.5">WEB GAMES &amp; 2D ENGINES</text>
      </g>

      <!-- Game Console Frame Container -->
      <g transform="translate(180, 95)" filter="url(#gameShadow)">
        <!-- Outer Bezel -->
        <rect width="440" height="610" rx="32" fill="#130e26" stroke="#4c1d95" stroke-width="1.8" />
        
        <!-- Inner Game Screen Viewport -->
        <rect x="18" y="18" width="404" height="574" rx="20" fill="#080512" stroke="#2e1065" stroke-width="1" />

        <!-- Top In-Game HUD -->
        <rect x="36" y="32" width="130" height="34" rx="10" fill="#1e1338" stroke="#581c87" stroke-width="1" />
        <text x="50" y="54" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="13" font-weight="800">★ 14,820</text>

        <!-- Stage Badge -->
        <rect x="296" y="32" width="110" height="34" rx="10" fill="#1e1338" stroke="#581c87" stroke-width="1" />
        <text x="312" y="54" fill="#c084fc" font-family="system-ui, sans-serif" font-size="12" font-weight="700">STAGE 14</text>
      </g>

      <!-- Floating Feature Badges -->
      <g transform="translate(48, 260)">
        <rect width="116" height="48" rx="10" fill="#180e2f" stroke="#581c87" stroke-width="1" />
        <text x="12" y="22" fill="#e879f9" font-family="system-ui, sans-serif" font-size="11" font-weight="700">CANVAS &amp; 2D</text>
        <text x="12" y="38" fill="#a855f7" font-family="system-ui, sans-serif" font-size="10.5">Smooth Physics</text>
      </g>

      <g transform="translate(638, 320)">
        <rect width="116" height="48" rx="10" fill="#180e2f" stroke="#581c87" stroke-width="1" />
        <text x="12" y="22" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="11" font-weight="700">60 FPS TOUCH</text>
        <text x="12" y="38" fill="#a855f7" font-family="system-ui, sans-serif" font-size="10.5">Zero Input Lag</text>
      </g>

      <!-- Bottom Dark Gradient for Text Readability -->
      <rect y="720" width="${WIDTH}" height="360" fill="url(#bottomFade3)" />
    </svg>
  `;

  let baseImage = sharp(Buffer.from(svg));
  if (gameBuffer) {
    // Composite the real game screen at (265, 175) inside the game viewport!
    baseImage = baseImage.composite([
      {
        input: gameBuffer,
        top: 175,
        left: 265,
      },
    ]);
  }
  return await baseImage.jpeg({ quality: 92 }).toBuffer();
}

// 4. Windows & Desktop Applications Mockup
async function generateWindowsMockup() {
  const filewalaPath = path.join(process.cwd(), 'public/images/filewalatool.png');
  let toolBuffer = null;
  if (fs.existsSync(filewalaPath)) {
    toolBuffer = await sharp(filewalaPath)
      .resize(650, 360, { fit: 'cover', position: 'top' })
      .toBuffer();
  }

  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="winGlow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.32" />
          <stop offset="70%" stop-color="#0a121d" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#04070c" stop-opacity="1" />
        </radialGradient>
        <filter id="winShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.75" />
        </filter>
        <linearGradient id="bottomFade4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#04070c" stop-opacity="0" />
          <stop offset="45%" stop-color="#04070c" stop-opacity="0.88" />
          <stop offset="100%" stop-color="#04070c" stop-opacity="1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#04070c" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#winGlow)" />

      <!-- Top Badge -->
      <g transform="translate(48, 44)">
        <rect x="0" y="0" width="224" height="30" rx="15" fill="#0369a1" fill-opacity="0.22" stroke="#38bdf8" stroke-opacity="0.5" stroke-width="1" />
        <circle cx="16" cy="15" r="4" fill="#38bdf8" />
        <text x="28" y="19" fill="#e0f2fe" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" letter-spacing="1.5">WINDOWS DESKTOP SOFTWARE</text>
      </g>

      <!-- Windows 11 Fluent App Frame -->
      <g transform="translate(48, 96)" filter="url(#winShadow)">
        <!-- Window Outer Border -->
        <rect width="704" height="630" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
        
        <!-- Windows 11 Title Bar -->
        <rect width="704" height="42" rx="12" fill="#1e293b" />
        <rect y="30" width="704" height="12" fill="#1e293b" />
        <line x1="0" y1="42" x2="704" y2="42" stroke="#334155" stroke-width="1" />

        <!-- App Icon & Title -->
        <rect x="16" y="12" width="18" height="18" rx="4" fill="#0284c7" />
        <text x="42" y="26" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12.5" font-weight="600">FileWala Studio — Windows Desktop Enterprise</text>

        <!-- Windows Control Buttons (Minimize, Maximize, Close) -->
        <text x="618" y="26" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14">—</text>
        <rect x="646" y="15" width="12" height="12" fill="none" stroke="#94a3b8" stroke-width="1.2" />
        <text x="676" y="26" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✕</text>

        <!-- Windows Menu Ribbon -->
        <rect y="42" width="704" height="32" fill="#172236" />
        <line x1="0" y1="74" x2="704" y2="74" stroke="#1e293b" stroke-width="1" />
        <text x="20" y="63" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11.5" font-weight="500">File</text>
        <text x="64" y="63" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11.5" font-weight="500">Edit</text>
        <text x="108" y="63" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11.5" font-weight="500">Batch Processing</text>
        <text x="216" y="63" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11.5" font-weight="500">Local Engine</text>
        <text x="306" y="63" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11.5" font-weight="500">Settings</text>

        <!-- Tool Workspace Placeholder or Embedded Screenshot -->
        <!-- Hardware status bar at bottom of window -->
        <rect y="590" width="704" height="40" rx="12" fill="#131c2e" />
        <rect y="590" width="704" height="12" fill="#131c2e" />
        <line x1="0" y1="590" x2="704" y2="590" stroke="#1e293b" stroke-width="1" />
        <circle cx="24" cy="610" r="4" fill="#10b981" />
        <text x="36" y="614" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Native Windows 64-bit Engine: Active</text>
        <text x="500" y="614" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Memory: 148 MB · CPU: 1.2%</text>
      </g>

      <!-- Bottom Dark Gradient for Text Readability -->
      <rect y="720" width="${WIDTH}" height="360" fill="url(#bottomFade4)" />
    </svg>
  `;

  let baseImage = sharp(Buffer.from(svg));
  if (toolBuffer) {
    // Composite the real tool screenshot inside the window frame (x: 75, y: 178)
    baseImage = baseImage.composite([
      {
        input: toolBuffer,
        top: 178,
        left: 75,
      },
    ]);
  }
  return await baseImage.jpeg({ quality: 92 }).toBuffer();
}

// 5. Webpages & High-Converting Stores Mockup
async function generateEcommerceMockup() {
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ecomGlow" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#059669" stop-opacity="0.32" />
          <stop offset="70%" stop-color="#0a141a" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#04080a" stop-opacity="1" />
        </radialGradient>
        <filter id="ecomShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.75" />
        </filter>
        <linearGradient id="prodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <linearGradient id="bottomFade5" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#04080a" stop-opacity="0" />
          <stop offset="45%" stop-color="#04080a" stop-opacity="0.88" />
          <stop offset="100%" stop-color="#04080a" stop-opacity="1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#04080a" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#ecomGlow)" />

      <!-- Top Badge -->
      <g transform="translate(48, 44)">
        <rect x="0" y="0" width="220" height="30" rx="15" fill="#059669" fill-opacity="0.22" stroke="#34d399" stroke-opacity="0.5" stroke-width="1" />
        <circle cx="16" cy="15" r="4" fill="#34d399" />
        <text x="28" y="19" fill="#d1fae5" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" letter-spacing="1.5">WEBPAGES &amp; STOREFRONTS</text>
      </g>

      <!-- Browser Frame -->
      <g transform="translate(48, 96)" filter="url(#ecomShadow)">
        <rect width="704" height="630" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1.2" />
        
        <!-- Browser Header Bar -->
        <rect width="704" height="46" rx="16" fill="#1e293b" />
        <rect y="30" width="704" height="16" fill="#1e293b" />
        <line x1="0" y1="46" x2="704" y2="46" stroke="#334155" stroke-width="1" />

        <!-- Browser Dots -->
        <circle cx="24" cy="23" r="5" fill="#ef4444" />
        <circle cx="40" cy="23" r="5" fill="#f59e0b" />
        <circle cx="56" cy="23" r="5" fill="#10b981" />

        <!-- Browser Address Bar -->
        <rect x="80" y="10" width="460" height="26" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
        <text x="96" y="27" fill="#10b981" font-family="system-ui, sans-serif" font-size="11">🔒</text>
        <text x="114" y="27" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11.5">https://naizon.in/store/<tspan fill="#38bdf8">audio-pro-series</tspan></text>

        <!-- Performance Chip inside Browser -->
        <rect x="560" y="11" width="124" height="24" rx="6" fill="#10b981" fill-opacity="0.18" />
        <text x="572" y="27" fill="#34d399" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">0.34s TTFB · 100/100</text>

        <!-- Store Navbar -->
        <rect y="46" width="704" height="44" fill="#0b111e" />
        <text x="24" y="73" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="14" font-weight="800">AUDIOSTUDIO</text>
        <text x="160" y="73" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Headphones</text>
        <text x="260" y="73" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Monitors</text>
        <text x="340" y="73" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Accessories</text>

        <rect x="600" y="55" width="84" height="26" rx="6" fill="#1e293b" />
        <text x="614" y="72" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">Cart (2)</text>

        <!-- Product Hero Card -->
        <g transform="translate(24, 110)">
          <!-- Left: Product Showcase Card -->
          <rect width="320" height="460" rx="14" fill="url(#prodGrad)" stroke="#334155" stroke-width="1" />
          <circle cx="160" cy="180" r="100" fill="#0284c7" fill-opacity="0.12" />
          <circle cx="160" cy="180" r="70" fill="#38bdf8" fill-opacity="0.15" />
          
          <!-- Sleek Headphones Graphic Mockup -->
          <path d="M 110 180 A 50 50 0 0 1 210 180" fill="none" stroke="#e2e8f0" stroke-width="12" stroke-linecap="round" />
          <rect x="94" y="160" width="24" height="50" rx="10" fill="#0284c7" />
          <rect x="202" y="160" width="24" height="50" rx="10" fill="#0284c7" />
          <text x="160" y="280" text-anchor="middle" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">STUDIO ACOUSTIC 360°</text>

          <!-- Right: Purchase Details & Conversion CTA -->
          <g transform="translate(340, 20)">
            <rect width="90" height="22" rx="4" fill="#f59e0b" fill-opacity="0.2" />
            <text x="8" y="15" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="10" font-weight="700">★ 4.9 (1,840 REVIEWS)</text>

            <text x="0" y="60" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Precision Pro 2</text>
            <text x="0" y="85" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Studio-grade wireless monitor with lossless latency.</text>

            <text x="0" y="130" fill="#34d399" font-family="system-ui, sans-serif" font-size="28" font-weight="800">$349.00</text>
            <text x="120" y="130" fill="#64748b" font-family="system-ui, sans-serif" font-size="15" text-decoration="line-through">$429.00</text>

            <!-- Color Options -->
            <text x="0" y="170" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" font-weight="600">FINISH</text>
            <circle cx="12" cy="195" r="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
            <circle cx="42" cy="195" r="10" fill="#475569" />
            <circle cx="72" cy="195" r="10" fill="#e2e8f0" />

            <!-- Add to Cart High-Converting CTA -->
            <rect y="230" width="310" height="46" rx="8" fill="#10b981" />
            <text x="155" y="258" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13.5" font-weight="700">Add to Cart — Express 2-Day</text>

            <rect y="290" width="310" height="42" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1" />
            <text x="155" y="316" text-anchor="middle" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Buy with Apple Pay</text>

            <!-- Guarantee badge -->
            <text x="0" y="370" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">✓ Free Global Shipping  ✓ 30-Day Moneyback Guarantee</text>
          </g>
        </g>
      </g>

      <!-- Bottom Dark Gradient for Text Readability -->
      <rect y="720" width="${WIDTH}" height="360" fill="url(#bottomFade5)" />
    </svg>
  `;
  return await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toBuffer();
}

async function run() {
  const dir = path.join(process.cwd(), 'public/images/work');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  console.log('Generating 5 Product Designer mockups...');
  
  const saasBuf = await generateSaasMockup();
  fs.writeFileSync(path.join(dir, 'work-saas.jpg'), saasBuf);
  console.log('1. Generated work-saas.jpg');

  const mobileBuf = await generateMobileMockup();
  fs.writeFileSync(path.join(dir, 'work-service.jpg'), mobileBuf);
  console.log('2. Generated work-service.jpg');

  const gameBuf = await generateGameMockup();
  fs.writeFileSync(path.join(dir, 'work-game.jpg'), gameBuf);
  console.log('3. Generated work-game.jpg');

  const winBuf = await generateWindowsMockup();
  fs.writeFileSync(path.join(dir, 'work-filewala.jpg'), winBuf);
  console.log('4. Generated work-filewala.jpg');

  const ecomBuf = await generateEcommerceMockup();
  fs.writeFileSync(path.join(dir, 'work-ecommerce.jpg'), ecomBuf);
  console.log('5. Generated work-ecommerce.jpg');

  console.log('All 5 Product Designer mockups generated successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const WIDTH = 800;
const HEIGHT = 1080;

// High-Fidelity Windows Desktop Software Mockup
async function generateWindowsMockup() {
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="winBgGlow" cx="50%" cy="28%" r="65%">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.32" />
          <stop offset="60%" stop-color="#080f1d" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#03060c" stop-opacity="1" />
        </radialGradient>
        <linearGradient id="winTitleBar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
        <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#818cf8" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#34d399" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <filter id="desktopShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="20" stdDeviation="28" flood-color="#000000" flood-opacity="0.8" />
        </filter>
        <linearGradient id="bottomWinFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#03060c" stop-opacity="0" />
          <stop offset="50%" stop-color="#03060c" stop-opacity="0.92" />
          <stop offset="100%" stop-color="#03060c" stop-opacity="1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#03060c" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#winBgGlow)" />

      <!-- Top Badge -->
      <g transform="translate(48, 44)">
        <rect x="0" y="0" width="228" height="30" rx="15" fill="#0284c7" fill-opacity="0.22" stroke="#38bdf8" stroke-opacity="0.5" stroke-width="1" />
        <circle cx="16" cy="15" r="4" fill="#38bdf8" />
        <text x="28" y="19" fill="#e0f2fe" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" letter-spacing="1.5">WINDOWS DESKTOP STUDIO</text>
      </g>

      <!-- Windows 11 Modern Desktop Window Frame -->
      <g transform="translate(44, 96)" filter="url(#desktopShadow)">
        <!-- Outer Window Frame with Fluent Acrylic Border -->
        <rect width="712" height="645" rx="14" fill="#0d1424" stroke="#334155" stroke-width="1.2" />

        <!-- Title Bar -->
        <rect width="712" height="42" rx="14" fill="url(#winTitleBar)" />
        <rect y="28" width="712" height="14" fill="url(#winTitleBar)" />
        <line x1="0" y1="42" x2="712" y2="42" stroke="#1e293b" stroke-width="1" />

        <!-- Windows App Icon & Title -->
        <rect x="16" y="12" width="18" height="18" rx="4" fill="#0284c7" />
        <path d="M 21 16 L 29 16 M 21 21 L 29 21 M 21 26 L 26 26" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" />
        <text x="42" y="25" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="600">Naizon Desktop Studio v3.2 — Windows x64 Enterprise</text>

        <!-- Search Bar in Header -->
        <rect x="420" y="9" width="180" height="24" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
        <text x="432" y="25" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">Ctrl + K Quick Search...</text>

        <!-- Windows Control Buttons (—, □, ✕) -->
        <g transform="translate(620, 10)">
          <text x="14" y="15" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">—</text>
          <rect x="36" y="4" width="11" height="11" fill="none" stroke="#94a3b8" stroke-width="1.2" />
          <text x="62" y="15" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">✕</text>
        </g>

        <!-- Ribbon / Menubar -->
        <rect y="42" width="712" height="32" fill="#131d31" />
        <line x1="0" y1="74" x2="712" y2="74" stroke="#1e293b" stroke-width="1" />
        <text x="20" y="62" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600">File</text>
        <text x="56" y="62" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">Edit</text>
        <text x="92" y="62" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">Pipeline</text>
        <text x="148" y="62" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">Hardware</text>
        <text x="216" y="62" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">Performance</text>
        <text x="300" y="62" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">Build</text>

        <!-- Active Mode Badge in Ribbon -->
        <rect x="560" y="47" width="136" height="22" rx="4" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7" stroke-width="1" />
        <circle cx="572" cy="58" r="3" fill="#38bdf8" />
        <text x="582" y="62" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">WIN32 DIRECT I/O</text>

        <!-- Left Navigation Rail (Tree view) -->
        <rect y="74" width="180" height="536" fill="#0a0f1d" />
        <line x1="180" y1="74" x2="180" y2="610" stroke="#1e293b" stroke-width="1" />

        <text x="18" y="98" fill="#64748b" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700" letter-spacing="1">PROJECT WORKSPACE</text>
        
        <!-- Active Nav Item -->
        <rect x="8" y="110" width="164" height="30" rx="6" fill="#0284c7" fill-opacity="0.25" />
        <circle cx="22" cy="125" r="3.5" fill="#38bdf8" />
        <text x="34" y="129" fill="#f0f9ff" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600">Core Engine x64</text>

        <g transform="translate(14, 150)">
          <text x="20" y="14" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">📁  Native DLLs</text>
          <text x="20" y="42" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">⚙  Batch Converters</text>
          <text x="20" y="70" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">📊  Memory Cache</text>
          <text x="20" y="98" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">🔒  Security Vault</text>
          <text x="20" y="126" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11.5">⚡  CUDA Pipelines</text>
        </g>

        <!-- Main Workspace Area -->
        <!-- Metrics Row -->
        <g transform="translate(196, 88)">
          <!-- Card 1: CPU Threads -->
          <rect width="158" height="74" rx="8" fill="#131c30" stroke="#1e293b" stroke-width="1" />
          <text x="12" y="22" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10" font-weight="700" letter-spacing="0.5">CPU UTILIZATION</text>
          <text x="12" y="50" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="20" font-weight="800">16 Cores</text>
          <text x="12" y="66" fill="#34d399" font-family="system-ui, sans-serif" font-size="10" font-weight="600">● 100% Multi-Threaded</text>

          <!-- Card 2: Memory Footprint -->
          <rect x="170" width="158" height="74" rx="8" fill="#131c30" stroke="#1e293b" stroke-width="1" />
          <text x="182" y="22" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10" font-weight="700" letter-spacing="0.5">RAM FOOTPRINT</text>
          <text x="182" y="50" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="20" font-weight="800">42.8 MB</text>
          <text x="182" y="66" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Zero Memory Leak</text>

          <!-- Card 3: Execution Speed -->
          <rect x="340" width="158" height="74" rx="8" fill="#131c30" stroke="#1e293b" stroke-width="1" />
          <text x="352" y="22" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10" font-weight="700" letter-spacing="0.5">DISK THROUGHPUT</text>
          <text x="352" y="50" fill="#a78bfa" font-family="system-ui, sans-serif" font-size="20" font-weight="800">3.8 GB/s</text>
          <text x="352" y="66" fill="#34d399" font-family="system-ui, sans-serif" font-size="10" font-weight="600">NVMe Direct DMA</text>
        </g>

        <!-- Live Thread Execution & Process Heatmap -->
        <g transform="translate(196, 178)">
          <rect width="500" height="165" rx="8" fill="#131c30" stroke="#1e293b" stroke-width="1" />
          <text x="16" y="24" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Parallel Execution Threads (Hardware Concurrency)</text>
          
          <!-- 16 Thread Monitor Blocks -->
          <g transform="translate(16, 42)">
            <!-- Thread 0-7 -->
            <rect x="0" y="0" width="52" height="44" rx="4" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1" />
            <text x="8" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">T#01</text>
            <text x="8" y="34" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">98%</text>

            <rect x="60" y="0" width="52" height="44" rx="4" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1" />
            <text x="68" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">T#02</text>
            <text x="68" y="34" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">95%</text>

            <rect x="120" y="0" width="52" height="44" rx="4" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1" />
            <text x="128" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">T#03</text>
            <text x="128" y="34" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">100%</text>

            <rect x="180" y="0" width="52" height="44" rx="4" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1" />
            <text x="188" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">T#04</text>
            <text x="188" y="34" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">92%</text>

            <rect x="240" y="0" width="52" height="44" rx="4" fill="#10b981" fill-opacity="0.25" stroke="#34d399" stroke-width="1" />
            <text x="248" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">T#05</text>
            <text x="248" y="34" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">88%</text>

            <rect x="300" y="0" width="52" height="44" rx="4" fill="#10b981" fill-opacity="0.25" stroke="#34d399" stroke-width="1" />
            <text x="308" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">T#06</text>
            <text x="308" y="34" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="700">94%</text>

            <rect x="360" y="0" width="52" height="44" rx="4" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1" />
            <text x="368" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">T#07</text>
            <text x="368" y="34" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">99%</text>

            <rect x="420" y="0" width="52" height="44" rx="4" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="1" />
            <text x="428" y="16" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="9.5">T#08</text>
            <text x="428" y="34" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">97%</text>

            <!-- Progress Bar below threads -->
            <rect y="58" width="472" height="6" rx="3" fill="#1e293b" />
            <rect y="58" width="410" height="6" rx="3" fill="url(#cyanGrad)" />
            <text y="78" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10.5">AVX-512 Vector Pipeline: 428,000 files processed</text>
            <text x="472" y="78" text-anchor="end" fill="#34d399" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">87% COMPLETED</text>
          </g>
        </g>

        <!-- Live Task Execution Table -->
        <g transform="translate(196, 356)">
          <rect width="500" height="236" rx="8" fill="#131c30" stroke="#1e293b" stroke-width="1" />
          <text x="16" y="24" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Enterprise Task Dispatcher</text>

          <!-- Table Header -->
          <line x1="16" y1="38" x2="484" y2="38" stroke="#1e293b" stroke-width="1" />
          <text x="16" y="52" fill="#64748b" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600">TASK MODULE</text>
          <text x="210" y="52" fill="#64748b" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600">ARCHITECTURE</text>
          <text x="360" y="52" fill="#64748b" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600">STATUS</text>
          <text x="440" y="52" fill="#64748b" font-family="system-ui, sans-serif" font-size="10.5" font-weight="600">LATENCY</text>

          <!-- Row 1 -->
          <line x1="16" y1="64" x2="484" y2="64" stroke="#1e293b" stroke-width="1" />
          <text x="16" y="86" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600">PDFEngine_Compress.dll</text>
          <text x="210" y="86" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">C++ / SIMD</text>
          <rect x="360" y="73" width="64" height="18" rx="4" fill="#10b981" fill-opacity="0.2" />
          <text x="368" y="86" fill="#34d399" font-family="system-ui, sans-serif" font-size="10" font-weight="700">ACTIVE</text>
          <text x="440" y="86" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">0.12 ms</text>

          <!-- Row 2 -->
          <line x1="16" y1="102" x2="484" y2="102" stroke="#1e293b" stroke-width="1" />
          <text x="16" y="124" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600">Hardware_AES_Encrypt.exe</text>
          <text x="210" y="124" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">WinCrypt API</text>
          <rect x="360" y="111" width="64" height="18" rx="4" fill="#10b981" fill-opacity="0.2" />
          <text x="368" y="124" fill="#34d399" font-family="system-ui, sans-serif" font-size="10" font-weight="700">ACTIVE</text>
          <text x="440" y="124" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">0.04 ms</text>

          <!-- Row 3 -->
          <line x1="16" y1="140" x2="484" y2="140" stroke="#1e293b" stroke-width="1" />
          <text x="16" y="162" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600">ImageQuantum_Resize.sys</text>
          <text x="210" y="162" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">DirectCompute</text>
          <rect x="360" y="149" width="64" height="18" rx="4" fill="#0284c7" fill-opacity="0.2" />
          <text x="368" y="162" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="10" font-weight="700">QUEUED</text>
          <text x="440" y="162" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">0.24 ms</text>

          <!-- Row 4 -->
          <line x1="16" y1="178" x2="484" y2="178" stroke="#1e293b" stroke-width="1" />
          <text x="16" y="200" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600">LocalDB_SQLite_Sync.dat</text>
          <text x="210" y="200" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">WAL Mode</text>
          <rect x="360" y="187" width="64" height="18" rx="4" fill="#10b981" fill-opacity="0.2" />
          <text x="368" y="200" fill="#34d399" font-family="system-ui, sans-serif" font-size="10" font-weight="700">ACTIVE</text>
          <text x="440" y="200" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">0.08 ms</text>
        </g>

        <!-- Windows Status Bar (Bottom) -->
        <rect y="610" width="712" height="35" rx="14" fill="#080e1b" />
        <rect y="610" width="712" height="12" fill="#080e1b" />
        <line x1="0" y1="610" x2="712" y2="610" stroke="#1e293b" stroke-width="1" />

        <circle cx="20" cy="627" r="4" fill="#10b981" />
        <text x="32" y="631" fill="#34d399" font-family="system-ui, sans-serif" font-size="11" font-weight="600">Ready</text>
        <text x="100" y="631" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">|</text>
        <text x="116" y="631" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Architecture: x64 Native C++ / WinUI 3</text>
        <text x="390" y="631" fill="#64748b" font-family="system-ui, sans-serif" font-size="11">|</text>
        <text x="406" y="631" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">DirectX 12 Hardware Acceleration: Active</text>
        <text x="680" y="631" text-anchor="end" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">0% CPU Overhead</text>
      </g>

      <!-- Bottom Gradient Overlay for Card Text Readability -->
      <rect y="720" width="${WIDTH}" height="360" fill="url(#bottomWinFade)" />
    </svg>
  `;
  return await sharp(Buffer.from(svg)).jpeg({ quality: 94 }).toBuffer();
}

// High-Fidelity 2D Game & Interactive WebGL Mockup
async function generateGameMockup() {
  const svg = `
    <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gameNebula" cx="50%" cy="32%" r="65%">
          <stop offset="0%" stop-color="#7c3aed" stop-opacity="0.45" />
          <stop offset="40%" stop-color="#431407" stop-opacity="0.25" />
          <stop offset="70%" stop-color="#0e0722" stop-opacity="0.95" />
          <stop offset="100%" stop-color="#05020c" stop-opacity="1" />
        </radialGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#ef4444" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#7c3aed" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="50%" stop-color="#ec4899" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>
        <filter id="gameConsoleShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="24" stdDeviation="32" flood-color="#000000" flood-opacity="0.85" />
        </filter>
        <linearGradient id="bottomGameFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#05020c" stop-opacity="0" />
          <stop offset="50%" stop-color="#05020c" stop-opacity="0.92" />
          <stop offset="100%" stop-color="#05020c" stop-opacity="1" />
        </linearGradient>
      </defs>

      <!-- Cosmic Game Background -->
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#05020c" />
      <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#gameNebula)" />

      <!-- Sparkling Stars / Ambient Particles in Background -->
      <g opacity="0.6">
        <circle cx="90" cy="180" r="1.5" fill="#ffffff" />
        <circle cx="210" cy="120" r="2" fill="#38bdf8" />
        <circle cx="680" cy="160" r="2" fill="#ec4899" />
        <circle cx="730" cy="240" r="1.5" fill="#facc15" />
        <circle cx="140" cy="420" r="2" fill="#c084fc" />
        <circle cx="710" cy="480" r="2.5" fill="#38bdf8" />
        <circle cx="80" cy="620" r="1.5" fill="#ffffff" />
      </g>

      <!-- Top Badge -->
      <g transform="translate(48, 44)">
        <rect x="0" y="0" width="224" height="30" rx="15" fill="#7c3aed" fill-opacity="0.25" stroke="#a855f7" stroke-opacity="0.5" stroke-width="1" />
        <circle cx="16" cy="15" r="4" fill="#c084fc" />
        <text x="28" y="19" fill="#f3e8ff" font-family="system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" letter-spacing="1.5">INTERACTIVE 2D &amp; WEBGL</text>
      </g>

      <!-- Game Canvas Frame Container -->
      <g transform="translate(44, 96)" filter="url(#gameConsoleShadow)">
        <!-- Outer Game Frame -->
        <rect width="712" height="645" rx="18" fill="#100b22" stroke="#6b21a8" stroke-width="1.4" />

        <!-- In-Game World Canvas Screen -->
        <rect x="12" y="12" width="688" height="621" rx="12" fill="#0b071a" />

        <!-- Game World Grid Mesh (Isometric floor) -->
        <g stroke="#3b0764" stroke-width="0.8" opacity="0.35">
          <line x1="12" y1="200" x2="700" y2="400" />
          <line x1="12" y1="260" x2="700" y2="460" />
          <line x1="12" y1="320" x2="700" y2="520" />
          <line x1="12" y1="380" x2="700" y2="580" />
          <line x1="700" y1="200" x2="12" y2="400" />
          <line x1="700" y1="260" x2="12" y2="460" />
          <line x1="700" y1="320" x2="12" y2="520" />
          <line x1="700" y1="380" x2="12" y2="580" />
        </g>

        <!-- Distant Luminous Planet in Game World -->
        <circle cx="560" cy="180" r="85" fill="url(#sunGlow)" />
        <circle cx="560" cy="180" r="85" fill="#4c1d95" fill-opacity="0.35" />

        <!-- TOP IN-GAME HEADS-UP DISPLAY (HUD) -->
        <g transform="translate(24, 24)">
          <!-- Player Profile & Health Bar -->
          <rect width="210" height="48" rx="24" fill="#170f31" stroke="#581c87" stroke-width="1.2" />
          <circle cx="24" cy="24" r="17" fill="#7c3aed" />
          <text x="24" y="29" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="800">⚔</text>
          
          <!-- Health Bars -->
          <text x="50" y="20" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">PLAYER 1 · LVL 28</text>
          <rect x="50" y="26" width="144" height="6" rx="3" fill="#374151" />
          <rect x="50" y="26" width="128" height="6" rx="3" fill="#22c55e" />
          <rect x="50" y="34" width="144" height="4" rx="2" fill="#374151" />
          <rect x="50" y="34" width="98" height="4" rx="2" fill="#06b6d4" />

          <!-- Center Score Banner -->
          <g transform="translate(260, 0)">
            <rect width="180" height="48" rx="12" fill="#170f31" stroke="#a855f7" stroke-width="1.2" />
            <text x="90" y="22" text-anchor="middle" fill="#fbbf24" font-family="system-ui, sans-serif" font-size="17" font-weight="900" letter-spacing="1">★ 94,820</text>
            <text x="90" y="38" text-anchor="middle" fill="#ec4899" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800" letter-spacing="1.5">COMBO x8 OVERDRIVE!</text>
          </g>

          <!-- Right: World Stage & 60FPS Counter -->
          <g transform="translate(480, 0)">
            <rect width="184" height="48" rx="12" fill="#170f31" stroke="#581c87" stroke-width="1.2" />
            <text x="18" y="21" fill="#c084fc" font-family="system-ui, sans-serif" font-size="11.5" font-weight="700">STAGE 4-B</text>
            <text x="18" y="37" fill="#64748b" font-family="system-ui, sans-serif" font-size="10">Cyber Citadel</text>
            
            <rect x="106" y="13" width="66" height="22" rx="6" fill="#10b981" fill-opacity="0.2" />
            <circle cx="116" cy="24" r="3" fill="#34d399" />
            <text x="124" y="28" fill="#34d399" font-family="system-ui, sans-serif" font-size="10.5" font-weight="800">60 FPS</text>
          </g>
        </g>

        <!-- 2D GAME WORLD ELEMENTS -->
        <!-- Floating Isometric Platform 1 (Left) -->
        <g transform="translate(60, 260)">
          <path d="M 90 0 L 180 45 L 90 90 L 0 45 Z" fill="#2e1065" stroke="#a855f7" stroke-width="1.5" />
          <path d="M 0 45 L 90 90 L 90 125 L 0 80 Z" fill="#1e084a" />
          <path d="M 90 90 L 180 45 L 180 80 L 90 125 Z" fill="#150536" />
          
          <!-- Crystal Power Core on Platform 1 -->
          <circle cx="90" cy="25" r="14" fill="#38bdf8" />
          <circle cx="90" cy="25" r="22" fill="#38bdf8" fill-opacity="0.3" />
        </g>

        <!-- Floating Isometric Platform 2 (Center Hero Stage) -->
        <g transform="translate(245, 200)">
          <path d="M 110 0 L 220 55 L 110 110 L 0 55 Z" fill="#4c1d95" stroke="#ec4899" stroke-width="2" />
          <path d="M 0 55 L 110 110 L 110 160 L 0 105 Z" fill="#310b6b" />
          <path d="M 110 110 L 220 55 L 220 105 L 110 160 Z" fill="#1e0545" />

          <!-- Neon Gem on Center Platform -->
          <circle cx="110" cy="35" r="22" fill="#f59e0b" />
          <circle cx="110" cy="35" r="34" fill="#f59e0b" fill-opacity="0.35" />
          <path d="M 110 18 L 122 35 L 110 52 L 98 35 Z" fill="#ffffff" />
        </g>

        <!-- Floating Isometric Platform 3 (Right) -->
        <g transform="translate(480, 280)">
          <path d="M 90 0 L 180 45 L 90 90 L 0 45 Z" fill="#2e1065" stroke="#34d399" stroke-width="1.5" />
          <path d="M 0 45 L 90 90 L 90 125 L 0 80 Z" fill="#1e084a" />
          <path d="M 90 90 L 180 45 L 180 80 L 90 125 Z" fill="#150536" />
          
          <!-- Crystal Power Core on Platform 3 -->
          <circle cx="90" cy="25" r="14" fill="#34d399" />
          <circle cx="90" cy="25" r="22" fill="#34d399" fill-opacity="0.3" />
        </g>

        <!-- Fluid Laser Energy Arc Crossing the Game Canvas -->
        <path d="M 150 285 Q 355 180 570 305" fill="none" stroke="url(#laserBeam)" stroke-width="4" stroke-linecap="round" />
        
        <!-- Glowing Particles along Arc -->
        <circle cx="240" cy="235" r="4" fill="#ffffff" />
        <circle cx="355" cy="195" r="5" fill="#facc15" />
        <circle cx="470" cy="245" r="4" fill="#ffffff" />

        <!-- Floating Score / Hit Text Popup -->
        <g transform="translate(355, 140)">
          <rect x="-70" y="-18" width="140" height="34" rx="8" fill="#170f31" stroke="#ec4899" stroke-width="1.2" />
          <text x="0" y="5" text-anchor="middle" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="14" font-weight="900" letter-spacing="1">+2,500 PERFECT!</text>
        </g>

        <!-- Puzzle Vial Mechanics (Referencing Color Puzzle logic) -->
        <g transform="translate(190, 420)">
          <rect width="332" height="96" rx="14" fill="#170f31" stroke="#4c1d95" stroke-width="1.2" />
          <text x="18" y="24" fill="#c084fc" font-family="system-ui, sans-serif" font-size="11" font-weight="700">COLOR SORT FLUID MECHANICS (CANVAS 2D)</text>
          
          <!-- 4 Puzzle Vials with glowing fluids -->
          <!-- Vial 1: Cyan/Purple -->
          <rect x="24" y="36" width="38" height="46" rx="8" fill="#0f0924" stroke="#6b21a8" stroke-width="1" />
          <rect x="26" y="52" width="34" height="28" rx="6" fill="#38bdf8" />
          
          <!-- Vial 2: Amber/Red -->
          <rect x="84" y="36" width="38" height="46" rx="8" fill="#0f0924" stroke="#6b21a8" stroke-width="1" />
          <rect x="86" y="44" width="34" height="36" rx="6" fill="#f59e0b" />
          
          <!-- Vial 3: Emerald -->
          <rect x="144" y="36" width="38" height="46" rx="8" fill="#0f0924" stroke="#6b21a8" stroke-width="1" />
          <rect x="146" y="58" width="34" height="22" rx="6" fill="#10b981" />

          <!-- Vial 4: Magenta -->
          <rect x="204" y="36" width="38" height="46" rx="8" fill="#0f0924" stroke="#6b21a8" stroke-width="1" />
          <rect x="206" y="48" width="34" height="32" rx="6" fill="#ec4899" />

          <!-- State Pill -->
          <rect x="256" y="48" width="60" height="22" rx="6" fill="#34d399" fill-opacity="0.2" />
          <text x="264" y="63" fill="#34d399" font-family="system-ui, sans-serif" font-size="10.5" font-weight="700">SOLVED</text>
        </g>

        <!-- Bottom In-Game Action Bar / Skills Deck -->
        <g transform="translate(186, 545)">
          <rect width="340" height="66" rx="16" fill="#170f31" stroke="#581c87" stroke-width="1.2" />
          
          <!-- Skill Slot 1 -->
          <circle cx="50" cy="33" r="22" fill="#0f0924" stroke="#38bdf8" stroke-width="1.5" />
          <text x="50" y="38" text-anchor="middle" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14">⚡</text>

          <!-- Skill Slot 2 -->
          <circle cx="115" cy="33" r="22" fill="#0f0924" stroke="#ec4899" stroke-width="1.5" />
          <text x="115" y="38" text-anchor="middle" fill="#ec4899" font-family="system-ui, sans-serif" font-size="14">🔥</text>

          <!-- Skill Slot 3 -->
          <circle cx="180" cy="33" r="22" fill="#0f0924" stroke="#f59e0b" stroke-width="1.5" />
          <text x="180" y="38" text-anchor="middle" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="14">🛡</text>

          <!-- Skill Slot 4 -->
          <circle cx="245" cy="33" r="22" fill="#0f0924" stroke="#10b981" stroke-width="1.5" />
          <text x="245" y="38" text-anchor="middle" fill="#10b981" font-family="system-ui, sans-serif" font-size="14">⏳</text>

          <text x="295" y="38" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">SPACE</text>
        </g>
      </g>

      <!-- Bottom Dark Gradient for Text Readability -->
      <rect y="720" width="${WIDTH}" height="360" fill="url(#bottomGameFade)" />
    </svg>
  `;
  return await sharp(Buffer.from(svg)).jpeg({ quality: 94 }).toBuffer();
}

async function run() {
  const dir = path.join(process.cwd(), 'public/images/work');
  console.log('Re-generating Windows & 2D Game Product Mockups...');
  
  const winBuf = await generateWindowsMockup();
  fs.writeFileSync(path.join(dir, 'work-filewala.jpg'), winBuf);
  console.log('✓ Successfully generated new work-filewala.jpg (High-Performance Windows Desktop Studio)');

  const gameBuf = await generateGameMockup();
  fs.writeFileSync(path.join(dir, 'work-game.jpg'), gameBuf);
  console.log('✓ Successfully generated new work-game.jpg (High-Fidelity 2D & WebGL Canvas Game)');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

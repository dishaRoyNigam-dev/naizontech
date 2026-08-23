/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], theme: { extend: { fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] }, colors: { ink: '#060915', panel: '#0c1124' }, boxShadow: { glow: '0 20px 80px rgba(86,75,255,.18)' } } }, plugins: [] }

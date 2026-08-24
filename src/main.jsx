import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import './index.css'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

if (!window.location.hash) {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

const root = document.getElementById('root')
const application = <React.StrictMode><App /></React.StrictMode>
if (root.hasChildNodes()) hydrateRoot(root, application)
else createRoot(root).render(application)

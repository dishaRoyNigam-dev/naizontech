import { renderToString } from 'react-dom/server'
import App from './App'

export function render(path) {
  globalThis.window = {
    location: { pathname:path, hash:'', origin:'https://naizon.in' },
    history: { scrollRestoration:'manual' },
    requestAnimationFrame: () => {},
    addEventListener: () => {}, removeEventListener: () => {}, scrollTo: () => {},
  }
  return renderToString(<App/>)
}

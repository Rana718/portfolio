import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"

// Set dark mode by default
document.documentElement.classList.add('dark')

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Analytics />
  </>
)

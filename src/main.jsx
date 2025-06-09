import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"
import { HelmetProvider } from 'react-helmet-async'


document.documentElement.classList.add('dark')

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
    <Analytics />
  </HelmetProvider>
)

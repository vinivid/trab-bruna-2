import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/ProductCard/ProductCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

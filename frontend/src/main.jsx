import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/StorePage/StorePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

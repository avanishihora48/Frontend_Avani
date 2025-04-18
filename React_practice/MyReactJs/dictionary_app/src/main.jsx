import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Dictionary from './components/Dictionary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Dictionary />
  </StrictMode>
)

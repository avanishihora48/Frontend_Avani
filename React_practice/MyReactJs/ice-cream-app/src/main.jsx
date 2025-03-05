import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import LoaderApp from './Loader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderApp />
  </StrictMode>
)

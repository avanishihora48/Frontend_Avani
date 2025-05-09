import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ReactAPIComponent from './ReactAPIComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactAPIComponent />
  </StrictMode>
)

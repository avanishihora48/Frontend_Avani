import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Container from './Container.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Task from './Task.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/container" element={<Container />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

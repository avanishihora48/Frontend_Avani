import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Container from './Container.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Task from './Task.jsx'
import EditTask from './EditTask.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/container" element={<Container />} />
        <Route path="/task" element={<Task />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

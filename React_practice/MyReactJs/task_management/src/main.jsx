import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskManagement from './TaskManagement.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowTask from './ShowTask.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskManagement />} />
        <Route path="/addtask" element={<ShowTask />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

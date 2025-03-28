import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AddFood from './AddFood'
import Sidebar from './Sidebar'
import LoaderApp from './LoaderApp'
import AdminPanel from './AdminPanel'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoaderApp />
      <Routes>
        <Route path="/addfood" element={<AddFood />}></Route>
        <Route path="/adminpanel" element={<AdminPanel />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

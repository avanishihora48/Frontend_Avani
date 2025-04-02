import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

import AdminLogin from './Admin/AdminLogin'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

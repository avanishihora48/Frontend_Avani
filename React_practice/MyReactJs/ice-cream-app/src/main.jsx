import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// User side
import LoaderApp from './Loader.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageNotFound from './PageNotFound.jsx'
import Contact from './Contact.jsx'

// Admin panel
import Adminlogin from './Admin/adminlogin.jsx'
import Adminpanel from './Admin/assets/Adminpanel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LoaderApp />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route path="/admin-login" element={<Adminlogin />}></Route>
          <Route path="/admin-panel" element={<Adminpanel />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)

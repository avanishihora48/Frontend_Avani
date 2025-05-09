import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import AdminPanel from './AdminPanel.jsx'
import AddCategory from './AddCategory.jsx'
import ShowCategory from './showCategory.jsx'
import AddProducts from './AddProducts.jsx'
import Showproducts from './ShowProducts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AdminPanel />} />
          <Route path="addcategory" element={<AddCategory />} />
          <Route path="showcategory" element={<ShowCategory />} />
          <Route path="addproducts" element={<AddProducts />} />
          <Route path="showproducts" element={<Showproducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

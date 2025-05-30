import 'react'

import { Link } from 'react-router-dom'

export default function AdminSidebar() {
  return (
    <>
      <div className="bg-pink-300 w-64 p-6 min-h-screen flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-8">
            🍦 Ice Cream Admin
          </h1>
          <ul className="space-y-4">
            <li className="text-white text-lg flex items-center gap-3 hover:bg-pink-400 p-3 rounded-lg cursor-pointer">
              <i className="bi bi-grid"></i>
              <Link to="/admin-dashboard">Dashboard</Link>
            </li>
            <li className="text-white text-lg flex items-center gap-3 hover:bg-pink-400 p-3 rounded-lg cursor-pointer">
              <i className="bi bi-people"></i>
              <Link to="/customer">Customers</Link>
            </li>
            <li className="text-white text-lg flex items-center gap-3 hover:bg-pink-400 p-3 rounded-lg cursor-pointer">
              <i className="bi bi-basket"></i> Orders
            </li>
            <li className="text-white text-lg flex items-center gap-3 hover:bg-pink-400 p-3 rounded-lg cursor-pointer">
              <i className="bi bi-box"></i>
              <Link to="/add-products">Add Products</Link>
            </li>
            <li className="text-white text-lg flex items-center gap-3 hover:bg-pink-400 p-3 rounded-lg cursor-pointer">
              <i className="bi bi-box-seam"></i>
              <Link to="/products">Products</Link>
            </li>
            <li className="text-white text-lg flex items-center gap-3 hover:bg-red-500 p-3 rounded-lg cursor-pointer">
              <i className="bi bi-box-arrow-right"></i> Logout
            </li>
          </ul>
        </div>
        <p className="text-white text-center">Admin Panel</p>
      </div>
    </>
  )
}

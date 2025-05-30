import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AdminSidebar from './AdminSidebar'

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-blue-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h2 className="text-4xl font-bold text-gray-700 mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-pink-500">
              Total Orders
            </h3>
            <p className="text-3xl font-bold mt-4">150</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-yellow-500">
              Total Customers
            </h3>
            <p className="text-3xl font-bold mt-4">320</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-green-500">
              Total Products
            </h3>
            <p className="text-3xl font-bold mt-4">45</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-500">Revenue</h3>
            <p className="text-3xl font-bold mt-4">$12,500</p>
          </div>
        </div>
      </div>
    </div>
  )
}

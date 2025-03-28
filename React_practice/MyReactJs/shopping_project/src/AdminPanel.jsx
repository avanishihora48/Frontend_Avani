import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AdminPanel() {
  return (
    <div className="flex min-h-screen mt-28">
      <div className="ml-64 w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mx-auto">
        <Link to="/addcategory" className="w-80">
          <div className="bg-amber-200 text-gray-900 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-center">Add Category</h2>
            <p className="text-lg text-gray-700 text-center mt-2">
              Create a new category with a simple click.
            </p>
          </div>
        </Link>

        <Link to="/addproduct" className="w-80">
          <div className="bg-blue-200 text-gray-900 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-center">Add Product</h2>
            <p className="text-lg text-gray-700 text-center mt-2">
              Easily add new products to your store.
            </p>
          </div>
        </Link>

        <Link to="/manageorders" className="w-80">
          <div className="bg-green-200 text-gray-900 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-center">
              Manage Orders
            </h2>
            <p className="text-lg text-gray-700 text-center mt-2">
              View and manage customer orders efficiently.
            </p>
          </div>
        </Link>

        <Link to="/users" className="w-80">
          <div className="bg-purple-200 text-gray-900 rounded-2xl shadow-lg p-6 transition-transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-center">Users</h2>
            <p className="text-lg text-gray-700 text-center mt-2">
              Manage user accounts and permissions.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

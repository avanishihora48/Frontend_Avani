import React from 'react'
import admin from './assets/images/admin.png'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <>
      <Navbar />
      <div className="fixed top-0 left-0 w-3/12 h-full bg-black p-5 overflow-y-auto ">
        <div className="text-3xl text-white">Admin Dashboard</div>
        <div className="mt-3">
          <img src={admin} alt="admin-img" className="w-36 mx-12" />
        </div>
        <div className="text-xl text-white mt-6 space-y-7">
          <ul>
            <hr className="mt-5" />
            <li className="mt-2">Category Management</li>
            <hr className="mt-5" />
            <li className="mt-2">
              <Link to="/addcategory">Add Category</Link>
            </li>
            <li className="mt-2">
              <Link to="/showcategory">Show Category</Link>
            </li>
            <li className="mt-2">Delete Category</li>
            <li className="mt-2">Update Category</li>
            <hr className="mt-5" />
            <li className="mt-2">Product Management</li>
            <hr className="mt-5" />
            <li className="mt-2">
              <Link to="/addproducts">Add Products</Link>
            </li>
            <li className="mt-2">
              <Link to="/showproducts">Show Products</Link>
            </li>
            <li className="mt-2">Delete Products</li>
            <li className="mt-2">Update Products</li>
          </ul>
        </div>
        <button
          type="submit"
          className="rounded-xl bg-red-500 text-white p-3.5 mt-9 w-24"
        >
          Logout?
        </button>
      </div>
    </>
  )
}

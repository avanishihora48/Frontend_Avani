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
        <div className="text-xl text-white mt-6 space-y-7">
          <div>
            <img src={admin} alt="admin-img" className="w-36 mx-12" />
          </div>
          <ul>
            <li>
              <Link to="/adminpanel">Admin Dashboard</Link>
            </li>
            <hr className="mt-5" />
            <li className="mt-2">Manage Customers</li>
            <hr className="mt-5" />
            <li className="mt-2">Add FoodMenu</li>
            <hr className="mt-5" />
            <li className="mt-2">
              <Link to="/addfood">Add Food</Link>
            </li>
            <hr className="mt-5" />
            <li className="mt-2">Add Events</li>
            <hr className="mt-5" />
            <li className="mt-2">Add Chefs</li>
            <hr className="mt-5" />
            <li className="mt-2">Manage Contacts</li>
            <hr className="mt-5" />
            <li className="mt-2">Manage reviews</li>
            <hr className="mt-5" />
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

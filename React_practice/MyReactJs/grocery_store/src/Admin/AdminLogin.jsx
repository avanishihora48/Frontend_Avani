import React from 'react'
import admin from '../assets/images/admin.png'

export default function AdminLogin() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex bg-white p-8 rounded-lg shadow-lg space-x-20">
        <div className="w-1/2 flex justify-center">
          <img src={admin} alt="Admin Icon" className="w-72 h-72" />
        </div>
        <div className="w-1/2 flex flex-col justify-center px-6">
          <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
          <form className="flex flex-col gap-4">
            <label className="text-gray-700">
              Admin Name
              <input
                type="text"
                placeholder="Enter Admin Name"
                className="w-full p-2 border rounded mt-1"
              />
            </label>
            <label className="text-gray-700">
              Password
              <input
                type="password"
                placeholder="Enter Admin Password"
                className="w-full p-2 border rounded mt-1"
              />
            </label>
            <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

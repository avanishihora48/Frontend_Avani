import React from 'react'
import grocery from './assets/images/image.png'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Navbar() {
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/6">
          <img
            src={grocery}
            alt="grocery-logo"
            className="w-36 h-20 object-contain mx-5 mt-2"
          />
        </div>

        <div className="w-full relative mx-28 mt-7">
          <i className="bi bi-search absolute left-3 top-3 text-gray-500"></i>
          <input
            type="text"
            placeholder="Search here..."
            className="w-full border-2 p-2 pl-10 rounded"
            aria-label="Search"
          />
        </div>

        <div className="mt-9 w-32 flex ">
          <i className="bi bi-cart text-2xl"></i>
          <div className="bg-red-500  w-8 h-9 rounded-2xl p-2">10</div>
        </div>
      </div>
    </>
  )
}

import React from 'react'

export default function Header() {
  return (
    <>
      <div>
        <ul className="space-x-16 flex mt-3 mx-64 text-xl ">
          <li>
            <span className=" text-red-600">🏠 Home</span>
          </li>
          <li className="hover:text-blue-900 ">🍎 Fruits</li>
          <li className="hover:text-blue-900 ">🥕 Vegetables</li>
          <li className="hover:text-blue-900 ">🌰 Dry Fruits</li>
          <li className="hover:text-blue-900 ">📞 Contact Us</li>
        </ul>
      </div>
    </>
  )
}

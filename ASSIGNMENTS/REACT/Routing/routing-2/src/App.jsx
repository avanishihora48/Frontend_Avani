import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div className="bg-black text-2xl text-white text-center p-5">
        Welcome Home!
      </div>
      <div className="p-2 mt-2 ">
        <ul className="flex space-x-6 justify-center text-xl">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

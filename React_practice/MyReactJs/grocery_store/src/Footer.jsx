import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-6 mt-7">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-bold">About Us</h2>
            <p className="text-sm mt-2">
              Fresh groceries delivered to your doorstep with quality and care.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Contact</h2>
            <p className="text-sm mt-2">📍 123 Green Street, Freshville</p>
            <p className="text-sm">📞 +1 234 567 890</p>
            <p className="text-sm">✉️ support@grocerystore.com</p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
          © 2024 Grocery Store. All Rights Reserved.
        </div>
      </footer>
    </>
  )
}

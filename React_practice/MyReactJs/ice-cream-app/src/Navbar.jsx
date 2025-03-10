import 'react'
import logoimg from './assets/images/main-logo.png'
import './assets/css/style.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <section id="icecream-header" className="container-fluid w-full p-5 flex">
      <div className="icecream-logo">
        <img src={logoimg} alt="logo" className="img-fluid" />
      </div>
      <div className="mx-10 navbar-links">
        <ul style={{ display: 'flex' }} className="mt-2.5 gap-6 font-semibold">
          <li>
            <Link to="/">
              <span className="text-red-700">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about-us">About us</Link>
          </li>
          <li>
            <Link to="/made-it">How it Made ?</Link>
          </li>
          <li>
            <Link to="/our-products">Our Products</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <button
          className="px-6 py-2 font-bold  rounded-full shadow-lg  bg-orange-100 "
          style={{ color: '#E73C56' }}
        >
          Buy now <span className="bi bi-caret-right"></span>
        </button>
      </div>
    </section>
  )
}

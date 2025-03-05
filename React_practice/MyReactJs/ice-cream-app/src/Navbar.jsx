import 'react'
import logoimg from './assets/images/main-logo.png'
import './assets/css/style.css'

export default function Navbar() {
  return (
    <section id="icecream-header" className="container-fluid w-full p-5 flex">
      <div className="icecream-logo">
        <img src={logoimg} alt="logo" className="img-fluid" />
      </div>
      <div className="mx-10 navbar-links">
        <ul style={{ display: 'flex' }} className="mt-2.5 gap-6 font-semibold">
          <li>
            <a href="">
              <span className="text-red-700">Home</span>
            </a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">How it`s made?</a>
          </li>
          <li>
            <a href="">Our Products</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="ml-auto">
        <button
          className="px-6 py-2 font-bold  rounded-full shadow-lg  bg-orange-100"
          style={{ color: '#E73C56' }}
        >
          Buy now
        </button>
      </div>
    </section>
  )
}

import 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
export default function PageNotFound() {
  return (
    <div>
      <Navbar />
      <section id="page-not-found" className="container-fluid w-full mt-16">
        <img
          src="https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif"
          alt="pagenotfound"
          className="img-fluid w-1/3 mx-auto"
        />
        <Link to="/">
          <button
            className="text-xl rounded-2xl bg-amber-600 p-3 w-80 mx-auto text-white ms-128"
            type="button"
          >
            Go to Home <span className="bi bi-caret-right"></span>
          </button>
        </Link>
      </section>
    </div>
  )
}

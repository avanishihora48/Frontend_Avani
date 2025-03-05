import React, { useState, useEffect } from 'react'
import loaderimg from './assets/images/icegif-971.gif'

import Slider from './Slider'
import Footer from './Footer'
import Navbar from './Navbar'
import Products from './Products'
import Milkshake from './Milkshake'
import Quote from './Quote'
import Card from './Card'

export default function LoaderApp() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return loader ? (
    <div className="loader-app">
      <img src={loaderimg} alt="Loading..." />
    </div>
  ) : (
    <div className="container-fluid">
      <Navbar />
      <Slider />
      <Products />
      <Milkshake />
      <Quote />
      <Card />
      <Footer />
    </div>
  )
}

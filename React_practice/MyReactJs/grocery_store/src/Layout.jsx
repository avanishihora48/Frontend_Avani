import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Slider from './Slider'
import Footer from './Footer'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Reviews from './Reviews'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Header />
      <Slider />
      <Slider2 />
      <Slider3 />
      <Reviews />
      <Footer />
    </div>
  )
}

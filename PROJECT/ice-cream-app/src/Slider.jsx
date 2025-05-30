import 'react'
import icecream from './assets/images/banner-big-cone.png'
import bannerpink from './assets/images/banner-pink-cone.png'

import './assets/css/style.css'
export default function Slider() {
  return (
    <>
      <section className=" flex items-center ">
        <div className="text-left mx-20 mt-16 sweet-text">
          <h1 className="text-4xl font-extrabold text-orange-200">ICE CREAM</h1>

          <h2 className="text-5xl font-extrabold text-orange-200">MADE WITH</h2>
          <h1 className="text-7xl font-extrabold" style={{ color: '#E73C56' }}>
            PASSION
          </h1>
          <div className="ml-auto">
            <button
              className="px-6 py-2 text-sm font-bold rounded-full shadow-md bg-orange-100 "
              style={{ color: '#E73C56' }}
            >
              Order now <span className="bi bi-caret-right"></span>
            </button>
            <button
              className="px-3 py-2 text-sm font-bold rounded-full shadow-md bg-orange-100 mx-6"
              style={{ color: '#E73C56' }}
            >
              How it's made? <span className="bi bi-caret-right"></span>
            </button>
          </div>
          <div className="mt-20 flex right-8">
            <img src={bannerpink} alt="Ice Cream" className="w-full" />
            <p className="text-xl font-light text-black  justify-evenly w-44">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              culpa provident quas dicta.
            </p>
          </div>
        </div>

        <div className="icecream flex mx-32 top-3 -mt-16 ">
          <img src={icecream} alt="Ice Cream" className="img-fluid w-full" />
        </div>
        <div
          className="inline-block top-3 mt-[-50px] mx-14 justify-center"
          style={{ marginLeft: '100px' }}
        >
          <h1
            style={{ fontFamily: 'Superbold', color: '#E73C56' }}
            className="mx-8 text-7xl"
          >
            16
          </h1>
          <p className="mx-8 text-2xl">Cafes</p>
          <h1
            style={{ fontFamily: 'Superbold', color: '#E73C56' }}
            className="mx-8 text-7xl "
          >
            23
          </h1>
          <p className="mx-8 text-2xl">food trucks</p>
        </div>
      </section>
      <div className=" align-middle p-11 mx-auto mt-6 ">
        <p style={{ textAlign: 'center', fontFamily: 'Superbold' }}>
          <p className="text-4xl text-pink-300 ">100% NATURAL</p>
          <h1 className="text-7xl text-orange-200">PRODUCTS</h1>
        </p>
      </div>
    </>
  )
}

import React from 'react'
import tomato from './assets/images/tomato.jpg'
import carrot from './assets/images/carrot.jpg'
import cabbage from './assets/images/cabbage.jpg'
import capsicum from './assets/images/capsicum.jpg'
import banner from './assets/images/banner.webp'

export default function Slider() {
  const vegetables = [
    { name: 'Tomato', img: tomato, price: '10/-' },
    { name: 'Carrot', img: carrot, price: '10/-' },
    { name: 'Cabbage', img: cabbage, price: '10/-' },
    { name: 'Capsicum', img: capsicum, price: '10/-' },
  ]

  return (
    <>
      <div className="mt-7">
        <img src={banner} alt="banner" />
      </div>

      <div className=" mx-auto py-10 bg-gray-200 ">
        <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
          Fresh Vegetables
        </h2>
        <div className="flex">
          <div className="w-1/5 bg-gray-700"></div>
          <div className="w-3/4 ">
            <div className="p-5 "></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 w-full mx-6">
              {vegetables.map((veg, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-4 text-center "
                >
                  <img
                    src={veg.img}
                    alt={veg.name}
                    className="w-40 h-40 mx-auto rounded-full"
                  />
                  <p className="mt-3 text-lg font-semibold text-gray-700">
                    {veg.name}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-gray-700 ">
                    Price: {veg.price} Rs.
                  </p>
                  <button className="bg-green-700 text-white p-3 rounded w-20 mt-3 hover:bg-green-900 ">
                    +
                  </button>
                </div>
              ))}
            </div>

            <div className="w-1/5  p-4"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 w-full mx-6">
              {vegetables.map((veg, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-4 text-center "
                >
                  <img
                    src={veg.img}
                    alt={veg.name}
                    className="w-40 h-40 mx-auto rounded-full"
                  />
                  <p className="mt-3 text-lg font-semibold text-gray-700">
                    {veg.name}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-gray-700 ">
                    Price: {veg.price} Rs.
                  </p>
                  <button className="bg-green-700 text-white p-3 rounded w-20 mt-3 hover:bg-green-900 ">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import veges from './assets/images/veges.jpg'
import fruits from './assets/images/fruits.jpg'
import dryFruits from './assets/images/dryfruits.jpg'
export default function Slider3() {
  return (
    <>
      <div className="flex">
        <div className="bg-gray-200 ">
          <img src={veges} className="w-auto h-96" />
        </div>
        <div className="flex justify-center items-center ">
          <p className="text-4xl font-mono mx-9 typing-text">
            "Let food be thy medicine and medicine be thy food. 🍃💊"
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex justify-center items-center ">
          <p className="text-4xl font-mono mx-9 typing-text">
            "When life gives you lemons, make lemonade."
          </p>
        </div>
        <div>
          <img src={fruits} className="w-auto h-96 mx-28" />
        </div>
      </div>

      <div className="flex">
        <div className="bg-gray-200 ">
          <img src={dryFruits} className="w-auto h-96" />
        </div>
        <div className="flex justify-center items-center ">
          <p className="text-4xl font-mono mx-9 typing-text">
            "A handful of dry fruits a day keeps fatigue away <br /> and brings
            energy to stay!"
          </p>
        </div>
      </div>
    </>
  )
}

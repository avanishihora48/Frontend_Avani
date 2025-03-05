import 'react'
import milkbackground from './assets/images/milk-bg.png'
import milkshake from './assets/images/milkshake.png'
import logo1 from './assets/images/sagittis-felis-sec-two-img-one.png'
import logo2 from './assets/images/sagittis-felis-sec-two-two.png'
import logo3 from './assets/images/sagittis-felis-sec-two-three.png'
import icecream2 from './assets/images/icecream2-home.png'

export default function Milkshake() {
  const products = [
    {
      id: 1,
      img: logo1,
      prod: 721,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur!',
    },
    {
      id: 2,
      img: logo2,
      prod: 16 + ' Kg',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur!',
    },
    {
      id: 3,
      img: logo3,
      prod: 84,
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur!',
    },
  ]

  return (
    <>
      <section className="relative w-fit">
        <img
          src={milkbackground}
          alt="Milk Background"
          className="w-full h-auto -mt-10"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-10 w-3/4 max-w-5xl mx-auto">
          <div className="w-1/2 flex justify-center">
            <img
              src={milkshake}
              alt="Delicious Milkshake"
              className="w-96 h-auto"
            />
          </div>

          <div className="w-1/2">
            <p className="text-2xl leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              impedit tempore iure odio ratione unde.
            </p>
            <p className="mt-2 text-gray-700">
              Facere excepturi ut repellendus amet hic dolor culpa sapiente!
              Exercitationem libero quas recusandae.
            </p>
            <button className="px-6 mt-5 py-2 font-bold rounded-full shadow-lg bg-orange-100 text-red-500 hover:bg-orange-200 transition">
              Read more
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-center space-x-24 -mt-32 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-gray-100 bg-opacity-80 rounded-lg shadow-md p-8 max-w-xs w-60 h-72"
          >
            <img src={product.img} alt={`Product ${product.id}`} />
            <h1
              className="mt-11  text-7xl text-orange-300"
              style={{ fontFamily: 'Superbold' }}
            >
              {product.prod}
            </h1>
            <p className="text-gray-600 text-center text-sm mt-5 ">
              {product.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-28">
        <img
          src={icecream2}
          alt="Milk Background"
          className="w-full h-auto -mt-10"
        />
      </section>
    </>
  )
}

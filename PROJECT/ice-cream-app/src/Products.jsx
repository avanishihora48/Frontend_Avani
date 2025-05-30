import 'react'
import background from './assets/images/bg-one.png'
import bannerpink from './assets/images/banner-pink-cone.png'
import shake from './assets/images/shake-img.png'
import milkshake from './assets/images/milkshake.png'
import dots from './assets/images/dots.png'
export default function Products() {
  const products = [
    {
      id: 1,
      img: bannerpink,
      title: 'Delicious Ice Cream',
      image: dots,
      description: 'Enjoy the best ice cream made with love and passion.',
    },
    {
      id: 2,
      img: shake,
      title: 'Tasty Shake',
      image: dots,
      description: 'Cool and refreshing shake to brighten your day.',
    },
    {
      id: 3,
      img: milkshake,
      title: 'Creamy Milkshake',
      image: dots,
      description:
        'Thick and creamy milkshake, made with the best ingredients.',
    },
  ]

  return (
    <>
      <section className="relative">
        <img
          src={background}
          alt="ice-cream background"
          className="w-full h-auto"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center space-x-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-gray-300 bg-opacity-80 rounded-lg shadow-md p-8 max-w-xs w-60 h-72 mt-20 right-5"
            >
              <div className="absolute -top-28 left-1/2 transform -translate-x-1/2 w-40 h-40">
                <img
                  className="w-80 h-40"
                  src={product.img}
                  alt={product.title}
                />
              </div>
              <h2 className="text-lg font-bold mt-24 text-center">
                {product.title}
              </h2>
              <div className="mt-8 mx-20 w-96">
                <img src={product.image} />
              </div>
              <p className="text-gray-600 text-center text-sm mt-5">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className=" align-middle p-11 mx-auto mt-3.5 ">
        <p style={{ textAlign: 'center', fontFamily: 'Superbold' }}>
          <p className="text-4xl text-pink-300 ">TRADITION AND LOVE</p>
          <h1 className="text-7xl text-orange-200">HOW IT'S MADE?</h1>
        </p>
      </div>
    </>
  )
}

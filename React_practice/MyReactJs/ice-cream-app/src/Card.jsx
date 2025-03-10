import 'react'

export default function Card() {
  return (
    <>
      <section className="mt-40 flex ">
        <div className="relative w-40 mx-48">
          <div
            className="absolute top-[-14px] left-28 transform -translate-x-1/2 bg-amber-200 py-1 text-center text-white font-medium w-44"
            style={{ borderRadius: '6px' }}
          >
            <p className="text-xl">CAFE</p>
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-2xl p-6 w-60">
            <h2 className="text-2xl font-bold mt-6">Chicago</h2>
            <p className="mt-2 text-gray-700">
              Facere excepturi ut repellendus amet hic dolor culpa sapiente!
              Exercitationem libero quas recusandae.
            </p>

            <hr className="my-3" />

            <div className="text-gray-700">
              <p className="font-semibold">Monday - Friday</p>
              <p className="text-red-300">06:00 AM - 10:00 PM</p>

              <p className="mt-2 font-semibold">Saturday - Sunday</p>
              <p className="text-red-300">06:00 AM - 10:00 PM</p>
            </div>

            <hr className="my-3" />

            <footer className="text-gray-700">
              <p>(+91) 7778964459</p>
              <p>noreply@beicecream.com</p>
            </footer>
          </div>
        </div>

        <div className="relative w-40 ">
          <div
            className="absolute top-[-14px] left-28 transform -translate-x-1/2 bg-amber-200 py-1 text-center text-white font-medium w-44"
            style={{ borderRadius: '6px' }}
          >
            <p className="text-xl ">CAFE</p>
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-2xl p-6 w-60">
            <h2 className="text-2xl font-bold mt-6">Chicago</h2>
            <p className="mt-2 text-gray-700">
              Facere excepturi ut repellendus amet hic dolor culpa sapiente!
              Exercitationem libero quas recusandae.
            </p>

            <hr className="my-3" />

            <div className="text-gray-700">
              <p className="font-semibold">Monday - Friday</p>
              <p className="text-red-300">06:00 AM - 10:00 PM</p>

              <p className="mt-2 font-semibold">Saturday - Sunday</p>
              <p className="text-red-300">06:00 AM - 10:00 PM</p>
            </div>

            <hr className="my-3" />

            <footer className="text-gray-700">
              <p>(+91) 7778964459</p>
              <p>noreply@beicecream.com</p>
            </footer>
          </div>
        </div>

        <div className="relative w-40 mx-48">
          <div
            className="absolute top-[-14px] left-28 transform -translate-x-1/2 bg-amber-200 py-1 text-center text-white font-medium w-44"
            style={{ borderRadius: '6px' }}
          >
            <p className="text-xl">CAFE</p>
          </div>

          <div className="bg-gray-200 rounded-2xl shadow-2xl p-6 w-60">
            <h2 className="text-2xl font-bold mt-6">Chicago</h2>
            <p className="mt-2 text-gray-700">
              Facere excepturi ut repellendus amet hic dolor culpa sapiente!
              Exercitationem libero quas recusandae.
            </p>

            <hr className="my-3" />

            <div className="text-gray-700">
              <p className="font-semibold">Monday - Friday</p>
              <p className="text-red-300">06:00 AM - 10:00 PM</p>

              <p className="mt-2 font-semibold">Saturday - Sunday</p>
              <p className="text-red-300">06:00 AM - 10:00 PM</p>
            </div>

            <hr className="my-3" />

            <footer className="text-gray-700">
              <p>(+91) 7778964459</p>
              <p>noreply@beicecream.com</p>
            </footer>
          </div>
        </div>
      </section>
      <section>
        <div className="space-x-8 mt-12 flex justify-center">
          <button className="rounded-4xl bg-red-700 text-white px-4 py-2 justify-between">
            Our Location <span className="bi bi-caret-right"></span>
          </button>
          <button className="rounded-3xl bg-red-700 text-white px-4 py-2 justify-between">
            Franchise <span className="bi bi-caret-right"></span>
          </button>
        </div>
      </section>
    </>
  )
}

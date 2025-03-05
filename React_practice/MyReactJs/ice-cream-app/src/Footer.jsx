import 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Footer() {
  return (
    <>
      <section className="w-full text-left mt-10 mx-16 flex">
        <div className="w-5xl ">
          <h1 className="text-3xl font-extrabold text-pink-300">
            HOMEMADE ICE CREAM MADE
          </h1>

          <h1 className="text-6xl font-extrabold " style={{ color: '#E73C56' }}>
            WITH PASSION
          </h1>
        </div>
        <div className="w-60 space-x-8 ">
          <i className="bi bi-twitter text-2xl text-pink-300"></i>
          <i className="bi bi-facebook text-2xl text-pink-300"></i>
          <i className="bi bi-instagram text-2xl text-pink-300"></i>
          <div className="inline-block w-96 -mx-12 mt-9">
            <p className="font-bold">
              Feel free to contact{' '}
              <span className="text-pink-400 ">(+91) 7778964459</span>
            </p>
          </div>
        </div>
      </section>
      <hr className="mt-4" />
      <section className="m-4 text-center">
        <p>
          @2025 Betheme <span className="text-pink-400 ">Muffin group </span> |
          All Rights Reserved | Powered by{' '}
          <span className="text-pink-400 ">
            | All Rights Reserved | Powered by.
          </span>
        </p>
      </section>
    </>
  )
}

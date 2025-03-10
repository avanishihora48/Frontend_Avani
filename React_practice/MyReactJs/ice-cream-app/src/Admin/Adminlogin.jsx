import 'react'
import loginimg from './assets/images/about-us-benner-img.png'
export default function Adminlogin() {
  return (
    <>
      <section className="flex ">
        <div className="w-96 h-96 mt-32 mx-48">
          <img src={loginimg} />
        </div>
        <div className="w-96 h-96 mt-40 text-2xl font-bold -mx-11">
          <h1 className="ms-7">BEICECREAM ADMIN LOGIN</h1>
          <form>
            <div className="form-group m-7 underline-offset-2">
              <input
                type="text"
                placeholder="Enter Admin Name"
                required
                className="border-b-2 border-black outline-none w-full text-lg p-1"
              />
              <input
                type="text"
                placeholder="Enter Password "
                required
                className="border-b-2 border-black outline-none w-full text-lg p-1 mt-7"
              />
              <button className="mt-6 bg-black text-white p-3 rounded-xl">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

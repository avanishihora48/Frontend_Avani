import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
export default function Login() {
  return (
    <>
      <div className="flex justify-center  min-h-screen bg-gray-100">
        <div className="w-128 h-160 mx-4 p-8 rounded-2xl bg-gray-200 text-center header">
          <h1 className="text-5xl mt-3">TO-DO LIST</h1>
          <hr className="mt-2 w-40 mx-40" />
          <p className="text-lg mt-10">Login to your account</p>

          <form className="flex flex-col space-y-4 mt-10 ">
            <div className="flex items-center space-x-3 justify-center">
              <button type="submit" className="frm">
                <i className="bi bi-envelope-fill text-xl"></i>
              </button>
              <input
                type="text"
                placeholder="Email"
                className="form-group border border-gray-300 p-2 rounded-md w-80"
              />
            </div>

            <div className="flex items-center space-x-3 justify-center">
              <button type="submit" className="frm">
                <i className="bi bi-lock text-xl"></i>
              </button>
              <input
                type="text"
                placeholder="Password"
                className="form-group border border-gray-300 p-2 rounded-md w-80"
              />
            </div>

            <div>
              <button type="submit" className="button">
                Login
              </button>
              <p className="mt-11 text-2xl"> -or login with-</p>
            </div>
            <div className="space-x-7 mt-3">
              <button className="bg-gray-300 p-2 w-28 rounded-sm hover:bg-black hover:text-white gap-x-3">
                <i className="bi bi-apple mx-2 text-xl"></i>
                Apple
              </button>
              <button className="bg-black text-white p-2 w-28 rounded-sm hover:bg-gray-300 hover:text-black">
                <i className="bi bi-google mx-2 text-xl"></i>
                Google
              </button>
            </div>
          </form>
          <p className="mt-20">Don't have an account? Sign Up</p>
        </div>
      </div>
    </>
  )
}

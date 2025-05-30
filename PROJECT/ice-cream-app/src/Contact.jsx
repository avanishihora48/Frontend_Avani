import 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="flex mt-16">
        <div className="w-1/2 ms-20 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d29531.771686750493!2d70.7896686!3d22.2980026!3m2!1i1024!2i768!4f13.1!2m1!1spatel%20ice%20cream%20rajkot!5e0!3m2!1sen!2sin!4v1741170679615!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="mx-9 w-full">
          <form>
            <div className="form-group ">
              <input
                placeholder="Enter Name*"
                type="text"
                className="form-control w-full border border-bottom-2  p-3 form-control"
                style={{ color: '#E73C56' }}
                required
              ></input>
            </div>
            <div className="form-group mt-3">
              <input
                placeholder="Enter Email*"
                type="email"
                className="form-control w-full border border-bottom-2  p-3 form-control"
                style={{ color: '#E73C56' }}
                required
              ></input>
            </div>
            <div className="form-group mt-3">
              <input
                placeholder="Enter Phone*"
                type="text"
                className="form-control w-full border border-bottom-2 p-3 form-control"
                style={{ color: '#E73C56' }}
                required
              ></input>
            </div>
            <div className="form-group mt-3">
              <input
                placeholder="Enter Address*"
                type="message"
                className="form-control w-full border border-bottom-2  p-3 form-control"
                style={{ color: '#E73C56' }}
                required
              ></input>
            </div>
            <div className="form-group mt-3">
              <textarea
                placeholder="Enter message*"
                className="form-control w-full border border-bottom-2  p-3 form-control text-pink-300 "
                style={{ color: '#E73C56' }}
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-group mt-5">
              <input
                type="submit"
                className=" text-red-400 form-control w-52 border border-bottom-2 border-red-500 p-3"
                value="Send"
              />

              <input
                type="reset"
                className="bg-red-700 text-white form-control w-52 border border-bottom-2 p-3 ms-5"
                value="Reset"
              />
            </div>
          </form>
        </div>
      </section>

      <div className="mt-36">
        <Footer />
      </div>
    </>
  )
}

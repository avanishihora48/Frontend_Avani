import 'react'
import AdminSidebar from './AdminSidebar'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function AddProducts() {
  const name = useRef('')
  const price = useRef('')
  const quantity = useRef('')
  const image = useRef('')
  const navigate = useNavigate()

  const productData = (e) => {
    e.preventDefault()

    let insert = {
      name: name.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
      image: image.current.value,
    }

    axios
      .post(`http://localhost:5000/add-products`, insert)
      .then(() => {
        Swal.fire({
          title: 'Thanks',
          text: 'Food item added successfully',
          icon: 'success',
        })
        navigate('/products')
        e.target.reset()
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Failed to add food item',
          icon: 'error',
        })
        console.error('Error adding food item:', error)
      })
  }

  return (
    <>
      <div className="flex min-h-screen">
        <AdminSidebar />

        <div className="bg-gradient-to-br from-pink-200 via-yellow-100 to-pink-300 p-12 rounded-3xl shadow-2xl w-full max-w-lg border border-pink-300 mx-40">
          <h1 className="text-5xl font-extrabold mb-10 text-center text-pink-800 tracking-wide">
            Add Ice Cream
          </h1>
          <form onSubmit={productData}>
            <div className="mb-8">
              <label className="block text-md font-semibold mb-3 text-pink-800">
                Ice Cream Name
              </label>
              <input
                type="text"
                className="w-full p-4 rounded-xl bg-pink-100 border border-pink-300 focus:ring-4 focus:ring-pink-500 text-pink-800 shadow-lg placeholder-pink-400"
                placeholder="Enter ice cream name"
                ref={name}
              />
            </div>

            <div className="mb-8">
              <label className="block text-md font-semibold mb-3 text-pink-800">
                Price
              </label>
              <input
                type="number"
                className="w-full p-4 rounded-xl bg-pink-100 border border-pink-300 focus:ring-4 focus:ring-pink-500 text-pink-800 shadow-lg placeholder-pink-400"
                placeholder="Enter price"
                ref={price}
              />
            </div>

            <div className="mb-8">
              <label className="block text-md font-semibold mb-3 text-pink-800">
                Quantity
              </label>
              <input
                type="number"
                className="w-full p-4 rounded-xl bg-pink-100 border border-pink-300 focus:ring-4 focus:ring-pink-500 text-pink-800 shadow-lg placeholder-pink-400"
                placeholder="Enter quantity"
                ref={quantity}
              />
            </div>

            <div className="mb-8">
              <label className="block text-md font-semibold mb-3 text-pink-800">
                Image
              </label>
              <input
                type="text"
                className="w-full p-4 rounded-xl bg-pink-100 border border-pink-300 focus:ring-4 focus:ring-pink-500 text-pink-800 shadow-lg placeholder-pink-400"
                placeholder="Choose an image"
                ref={image}
              />
            </div>
            <button
              type="submit"
              className="bg-pink-500 w-full py-4 rounded-xl hover:bg-pink-600 transition duration-300 text-2xl font-semibold shadow-lg text-white"
            >
              Add Ice Cream
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function AddProducts() {
  const productName = useRef('')
  const productPrice = useRef('')
  const productDescription = useRef('')

  const navigate = useNavigate()

  const productData = (e) => {
    e.preventDefault()

    let insert = {
      productName: productName.current.value,
      productPrice: productPrice.current.value,
      productDescription: productDescription.current.value,
    }

    axios
      .post(`http://localhost:5000/add-products`, insert)
      .then(() => {
        Swal.fire({
          title: 'Thanks',
          text: 'Food item added successfully',
          icon: 'success',
        })
        navigate('/showproducts')
        e.target.reset()
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Failed to add product item',
          icon: 'error',
        })
        console.error('Error adding product item:', error)
      })
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
            Add Product
          </h2>

          <form onSubmit={productData}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Product Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-amber-300"
                placeholder="Enter product name"
                ref={productName}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Product Price
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-amber-300"
                placeholder="Enter product price"
                ref={productPrice}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">
                Description
              </label>
              <textarea
                className="w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-amber-300"
                placeholder="Enter product description"
                ref={productDescription}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white p-2 rounded-lg font-semibold hover:bg-amber-600"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

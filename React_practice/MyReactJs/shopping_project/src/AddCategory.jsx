import React, { useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
export default function AddCategory() {
  const categoryName = useRef('')
  const price = useRef('')
  const description = useRef('')

  const navigate = useNavigate()

  const categoryData = (e) => {
    e.preventDefault()

    let insert = {
      categoryName: categoryName.current.value,
      price: price.current.value,
      description: description.current.value,
    }

    axios
      .post(`http://localhost:5000/add-category`, insert)
      .then(() => {
        Swal.fire({
          title: 'Thanks',
          text: 'Food item added successfully',
          icon: 'success',
        })
        navigate('/showcategory')
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          Add Category
        </h2>

        <form onSubmit={categoryData}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Category Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-amber-300"
              placeholder="Enter category name"
              ref={categoryName}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Category Price
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-amber-300"
              placeholder="Enter category name"
              ref={price}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              className="w-full p-2 border rounded-lg mt-1 focus:ring focus:ring-amber-300"
              placeholder="Enter category description"
              ref={description}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-white p-2 rounded-lg font-semibold hover:bg-amber-600"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  )
}

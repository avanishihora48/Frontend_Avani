import React, { useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function AddFood() {
  const foodName = useRef('')
  const price = useRef('')
  const category = useRef('')
  const navigate = useNavigate()

  const foodData = (e) => {
    e.preventDefault()

    let insert = {
      foodName: foodName.current.value,
      price: price.current.value,
      category: category.current.value,
    }

    axios
      .post(`http://localhost:8000/food-items`, insert)
      .then(() => {
        Swal.fire({
          title: 'Thanks',
          text: 'Food item added successfully',
          icon: 'success',
        })
        navigate('/adminpanel')
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
    <div className="ml-64 p-10 flex justify-center items-center min-h-screen mt-16">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Food Item</h1>
        <form onSubmit={foodData}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Food Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-green-400"
              placeholder="Enter food name"
              ref={foodName}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Price</label>
            <input
              type="number"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-green-400"
              placeholder="Enter price"
              ref={price}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-green-400"
              ref={category}
            >
              <option value="">Select Category</option>
              <option>Pizza</option>
              <option>Burger</option>
              <option>Dessert</option>
              <option>Drink</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 w-full p-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Add Food
          </button>
        </form>
      </div>
    </div>
  )
}

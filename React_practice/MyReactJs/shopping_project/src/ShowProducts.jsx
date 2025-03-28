import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Pencil, Trash2 } from 'lucide-react'
import Swal from 'sweetalert2'

export default function Showproducts() {
  const [productItems, setProductItems] = useState('')

  useEffect(() => {
    fetchProductItems()
  }, [])

  const fetchProductItems = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/add-products`)
      setProductItems(response.data)
    } catch (error) {
      console.error('Error fetching food items:', error)
    }
  }

  const handleEdit = (id) => {
    console.log(`Edit item with Id: ${id}`)
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/add-products/${id}`)
    setProductItems(productItems.filter((item) => item.id !== id))

    Swal.fire({
      icon: 'error',
      title: 'Ohh...',
      text: 'item deleted',
      footer: '<a href="#">Why do I have this issue?</a>',
    })
  }

  return (
    <div className="p-10 mt-7 flex justify-center w-auto mx-96">
      <div className="w-full max-w-5xl overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white text-center">
              <th className="p-4">ID</th>
              <th className="p-4">Product Name</th>
              <th className="p-4">Product Price</th>
              <th className="p-4">Product Description</th>

              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {productItems.length > 0 ? (
              productItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b text-center hover:bg-gray-100"
                >
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.productName || 'N/A'}</td>
                  <td className="p-4">₹{item.productPrice}</td>
                  <td className="p-4">{item.productDescription}</td>
                  <td className="p-4 flex justify-center gap-4">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4 text-gray-500">
                  No category available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

import axios from 'axios'
import { Pencil, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import AdminSidebar from './AdminSidebar'

export default function Products() {
  const [productItems, setProductItems] = useState([])

  useEffect(() => {
    fetchProductItems()
  }, [])

  const fetchProductItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/add-products')
      setProductItems(response.data)
    } catch (error) {
      console.error('Error fetching product items:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to load products. Please try again later.',
      })
    }
  }

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/add-products/${id}`)
      setProductItems(productItems.filter((item) => item.id !== id))
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Item successfully deleted.',
      })
    } catch (error) {
      console.error('Error deleting product:', error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to delete item. Please try again.',
      })
    }
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="w-full">
        <div className="flex flex-col items-center mt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Products List
          </h1>
        </div>
        <div className="p-10 flex justify-center w-full">
          <div className="w-full max-w-5xl overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-pink-300 text-white text-center">
                  <th className="p-4">ID</th>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Product Price</th>
                  <th className="p-4">Product Quantity</th>
                  <th className="p-4">Product Image</th>
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
                      <td className="p-4">{item.name || 'N/A'}</td>
                      <td className="p-4">₹{item.price}</td>
                      <td className="p-4">{item.quantity}</td>
                      <td className="p-4">
                        <img src={item.image} />
                      </td>

                      <td className="p-4 flex justify-center gap-4">
                        <button className="text-blue-500 hover:text-blue-700 p-2">
                          <Pencil size={18} />
                        </button>
                        <button
                          onClick={() => deleteProduct(item.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center p-4 text-gray-500">
                      No products available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

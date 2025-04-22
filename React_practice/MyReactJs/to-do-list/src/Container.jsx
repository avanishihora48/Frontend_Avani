import React, { useEffect, useState } from 'react'
import person from './assets/images/img1.jpg'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Container() {
  const [openId, setOpenId] = useState('')
  const [items, setItems] = useState('')
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()
  const tasksPerPage = 10

  useEffect(() => {
    axios.get(`http://localhost:8000/add-task`).then((response) => {
      setItems(response.data)
      setCount(response.data.length)
    })
  }, [])

  // delete data....
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/add-task/${id}`)
    setItems(items.filter((item) => item.id !== id))

    Swal.fire({
      icon: 'error',
      title: 'Ohh...',
      text: 'item deleted',
      footer: '<a href="#">Why do I have this issue?</a>',
    })
  }

  const indexOfLastTask = currentPage * tasksPerPage
  const indexOfFirstTask = indexOfLastTask - tasksPerPage
  const currentTasks = items.slice(indexOfFirstTask, indexOfLastTask)

  const handleNextPage = () => {
    if (currentPage < Math.ceil(items.length / tasksPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <>
      <div className="w-1/2 mt-10 mx-auto rounded-2xl min-h-[200px] flex justify-between items-center px-6 container shadow-lg">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-5">
            <img
              src={person}
              className="w-full h-full object-cover"
              alt="profile"
            />
          </div>
          <div className="text-white">
            <p>Good Evening!</p>
            <b className="text-2xl">Erick Smith</b>
          </div>
        </div>
        <div className="flex space-x-6 text-white text-2xl">
          <i className="bi bi-search cursor-pointer"></i>
          <i className="bi bi-bell-fill cursor-pointer"></i>
        </div>
      </div>

      <div className="flex justify-center bg-gray-100 w-1/2 mx-auto -mt-6 rounded-2xl shadow-md p-6">
        <div className="w-full">
          <div className="flex justify-center space-x-6 mb-4">
            <button className="w-36 h-10 btn text-white rounded-md position-relative">
              <Link
                to="/task"
                className="relative inline-block w-36 h-10 text-white rounded-md text-center leading-10 transition"
              >
                My Task
                <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">
                  {count}
                </span>
              </Link>
            </button>
            <button className="w-36 h-10 border-2 text-gray-900 rounded-md hover:bg-gray-200 transition">
              Display
            </button>
            <button className="w-36 h-10 border-2 text-gray-900 rounded-md hover:bg-gray-200 transition">
              Completed
            </button>
          </div>
          <b className="text-2xl mx-2">My Tasks</b>

          {currentTasks &&
            currentTasks.map((task) => (
              <div
                key={task.id}
                className="border-2 rounded-2xl p-4 h-auto flex mt-7 justify-between items-start relative"
              >
                <p className="text-black px-4 w-full">
                  <span className="text-lg text-gray-800">
                    Task: {task.task}
                  </span>
                  <br />
                  Date: {task.date} | Time: {task.time} | Status: {task.status}
                </p>

                <div className="relative">
                  <i
                    className="bi bi-three-dots-vertical cursor-pointer"
                    onClick={() =>
                      setOpenId(openId === task.id ? null : task.id)
                    }
                  ></i>

                  {openId === task.id && (
                    <div className="absolute w-36 bg-white border rounded-md shadow-lg -mt-2">
                      <ul className="text-sm text-gray-700">
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer "
                          onClick={() => navigate(`/edit/${task.id}`)}
                        >
                          Edit
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleDelete(task.id)}
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}

          <div className="flex justify-center items-center space-x-4 mt-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-md hover:bg-gray-200 transition disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {Math.ceil(items.length / tasksPerPage)}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage >= Math.ceil(items.length / tasksPerPage)}
              className="px-4 py-2 border rounded-md hover:bg-gray-200 transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

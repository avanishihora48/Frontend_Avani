import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import Swal from 'sweetalert2'

export default function Task() {
  const task = useRef('')
  const time = useRef('')
  const date = useRef('')
  const status = useRef('')
  const navigate = useNavigate()
  const taskData = (e) => {
    e.preventDefault()

    let insert = {
      task: task.current.value,
      time: time.current.value,
      date: date.current.value,
      status: status.current.value,
    }

    axios
      .post(`http://localhost:8000/add-task`, insert)
      .then(() => {
        Swal.fire({
          title: 'Thanks',
          text: 'Task added successfully',
          icon: 'success',
        })
        navigate('/container')
        e.target.reset()
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Failed to add task',
          icon: 'error',
        })
        console.error('Error adding task:', error)
      })
  }
  return (
    <>
      <div className="flex justify-center  min-h-screen bg-gray-100">
        <div className="w-128 h-130 mx-4 p-8 rounded-2xl bg-gray-200 text-center header mt-16">
          <h1 className="text-5xl mt-3">Task Assign</h1>
          <hr className="mt-2 w-40 mx-40" />

          <form className="flex flex-col space-y-4 mt-10 " onSubmit={taskData}>
            <div className="flex items-center space-x-3 justify-center">
              <input
                type="text"
                placeholder="Enter Task: "
                ref={task}
                className="form-group border border-gray-300 p-2 rounded-md w-80"
              />
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <input
                type="text"
                ref={time}
                placeholder="Enter Time: "
                className="form-group border border-gray-300 p-2 rounded-md w-80"
              />
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <input
                type="date"
                ref={date}
                className="form-group border border-gray-300 p-2 rounded-md w-80"
              />
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <select
                type="text"
                placeholder="status "
                ref={status}
                className="form-group border
                  border-gray-300 p-2 rounded-md w-80"
              >
                <option>-Status-</option>
                <option value="pending">Pending</option>
                <option value="resolved">Resolved</option>
              </select>
            </div>
            <div>
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

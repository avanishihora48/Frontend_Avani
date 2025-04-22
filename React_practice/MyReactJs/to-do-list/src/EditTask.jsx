import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function EditTask() {
  const [tasks, setTasks] = useState('')
  const task = useRef('')
  const time = useRef('')
  const date = useRef('')
  const status = useRef('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/add-task/${id}`).then((response) => {
      setTasks(response.data)
      task.current.value = response.data.task
      time.current.value = response.data.time
      date.current.value = response.data.date
      status.current.value = response.data.status
    })
  }, [id])

  const updateTask = (e) => {
    e.preventDefault()

    let upd = {
      task: task.current.value,
      time: time.current.value,
      date: date.current.value,
    }

    axios.put(`http://localhost:8000/add-task/${id}`, upd).then(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Task Updated successfully!',
        icon: 'success',
      })
      navigate('/container')
    })
  }

  return (
    <>
      <div className="flex justify-center min-h-screen bg-gray-100">
        <div className="w-128 h-auto mx-4 p-8 rounded-2xl bg-gray-200 text-center mt-16">
          <h1 className="text-5xl mb-4">Update Task</h1>
          <hr className="w-40 mx-auto mb-8" />

          <form className="flex flex-col space-y-6" onSubmit={updateTask}>
            <input
              type="text"
              placeholder="Enter Task"
              ref={task}
              className="border border-gray-300 p-2 rounded-md w-80 mx-auto"
            />
            <input
              type="text"
              placeholder="Enter Time"
              ref={time}
              className="border border-gray-300 p-2 rounded-md w-80 mx-auto"
            />
            <input
              type="date"
              ref={date}
              className="border border-gray-300 p-2 rounded-md w-80 mx-auto"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-40 mx-auto hover:bg-blue-600"
            >
              Update Task
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

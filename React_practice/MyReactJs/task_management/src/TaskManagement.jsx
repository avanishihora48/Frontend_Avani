import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function TaskManagement() {
  const [name, setName] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [taskName, setTaskName] = useState('')
  const [taskCount, setTaskCount] = useState(() => {
    return Number(localStorage.getItem('taskCount')) || 0
  })

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('taskCount', taskCount)
  }, [taskCount])

  const handleIncrement = () => {
    const newCount = taskCount + 1
    setTaskCount(newCount)
    localStorage.setItem('taskCount', newCount)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name && taskName && taskDate) {
      const insert = {
        name: name,
        taskDate: taskDate,
        taskName: taskName,
      }

      axios
        .post('http://localhost:5000/add-task', insert)
        .then(() => {
          Swal.fire({
            title: 'Thanks',
            text: 'Task added successfully',
            icon: 'success',
          })
          handleIncrement()
          setName('')
          setTaskName('')
          setTaskDate('')
          navigate('/addtask')
        })
        .catch((error) => {
          Swal.fire({
            title: 'Error',
            text: 'Failed to add task',
            icon: 'error',
          })
          console.error('Error adding task:', error)
        })
    } else {
      alert('Please fill out all fields.')
    }
  }

  return (
    <>
      <div className="w-96 bg-black text-xl text-white rounded-xl p-7 mx-96 mt-12">
        <div className="flex justify-between items-center">
          <div className="mx-2">Add Task</div>
          <div className="flex items-center space-x-3">
            <span>Task Assigned:</span>
            <span className="bg-white text-black px-3 py-1 rounded-full">
              {taskCount}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="border-2 mt-9 p-3 w-full bg-transparent text-white placeholder-white"
            placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="border-2 mt-9 p-3 w-full bg-transparent text-white placeholder-white"
            placeholder="Enter Date"
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            required
          />

          <input
            className="border-2 mt-9 p-3 w-full bg-transparent text-white placeholder-white"
            placeholder="Enter Task"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />

          <div className="flex justify-between mt-5">
            <button
              type="submit"
              className="rounded-xl bg-white text-black p-3"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>

      <style>
        {`
          input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
          }
        `}
      </style>
    </>
  )
}

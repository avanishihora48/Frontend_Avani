import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todoSlice'

export default function AddTask() {
  const [input, setInput] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleAdd = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <div className="bg-white w-50 mx-auto p-5">
      <h1 className="fs-3">Add Task</h1>
      <p className="fs-5">Let's add some to-do tasks via Redux Toolkit</p>
      <form className="mt-2" onSubmit={handleAdd}>
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add something to the list *"
            className="form-control"
          />
          <button className="btn btn-sm btn-dark text-white w-25" type="submit">
            <span className="bi bi-plus fs-4"></span>
          </button>
        </div>
      </form>
    </div>
  )
}

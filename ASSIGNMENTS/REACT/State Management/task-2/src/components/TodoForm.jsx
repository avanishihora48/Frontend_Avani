import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../recoil/todoState'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = () => {
  const [task, setTask] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addTask = (e) => {
    e.preventDefault()
    if (!task.trim()) return
    setTodoList((oldList) => [
      ...oldList,
      { id: uuidv4(), text: task, isComplete: false },
    ])
    setTask('')
  }

  return (
    <form onSubmit={addTask} className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 p-2 border rounded-md shadow-md"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm

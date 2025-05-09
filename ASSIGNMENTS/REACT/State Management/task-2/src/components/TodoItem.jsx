import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../recoil/todoState'

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const toggleComplete = () => {
    const updatedList = todoList.map((task) =>
      task.id === item.id ? { ...task, isComplete: !task.isComplete } : task
    )
    setTodoList(updatedList)
  }

  const deleteTask = () => {
    const updatedList = todoList.filter((task) => task.id !== item.id)
    setTodoList(updatedList)
  }

  return (
    <div className="flex items-center justify-between p-2 bg-gray-200 rounded-md shadow-md mb-2">
      <span
        onClick={toggleComplete}
        className={`flex-1 cursor-pointer ${
          item.isComplete ? 'line-through text-gray-500' : ''
        }`}
      >
        {item.text}
      </span>
      <button
        onClick={deleteTask}
        className="ml-4 px-3 py-1 text-white bg-red-500 rounded-md shadow-md"
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem

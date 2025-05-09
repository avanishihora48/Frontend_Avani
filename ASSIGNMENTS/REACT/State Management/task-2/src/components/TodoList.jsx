import React from 'react'

const TodoItem = ({ item }) => {
  if (!item) return null

  return (
    <div className="flex justify-between items-center p-2">
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={() => {}}
        className="mr-2"
      />
      <span className={item.isComplete ? 'line-through text-gray-500' : ''}>
        {item.text}
      </span>
      <button className="bg-red-500 text-white py-1 px-2 rounded">
        Delete
      </button>
    </div>
  )
}

export default TodoItem

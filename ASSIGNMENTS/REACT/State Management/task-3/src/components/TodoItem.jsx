import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo, updateTodo } from '../store/todoSlice'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, newText }))
    setIsEditing(false)
  }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </>
      )}
    </li>
  )
}

export default TodoItem

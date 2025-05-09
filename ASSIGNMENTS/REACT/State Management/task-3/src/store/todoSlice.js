import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { id: uuidv4(), text: action.payload, completed: false }
      state.push(newTodo)
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload
      const todo = state.find((todo) => todo.id === id)
      if (todo) {
        todo.text = newText
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
  },
})

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer

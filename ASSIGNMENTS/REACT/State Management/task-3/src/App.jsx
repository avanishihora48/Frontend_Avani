import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="app-container">
      <h1>Redux CRUD App</h1>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default App

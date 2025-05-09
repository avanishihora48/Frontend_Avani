import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoStats from './components/TodoStats'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Recoil To-Do List</h1>
      <TodoForm />
      <TodoList />
      <TodoStats />
    </div>
  )
}

export default App

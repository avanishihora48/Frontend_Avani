import React from 'react'
import { useTheme } from './ThemeContext'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }
    >
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4">Welcome to {theme} mode!</h1>
        <button
          onClick={toggleTheme}
          className="p-2 px-4 border rounded-lg bg-blue-500 text-white"
        >
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  )
}

export default App

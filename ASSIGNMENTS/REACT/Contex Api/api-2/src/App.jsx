// src/App.jsx
import React from 'react'
import { useAuth } from '../AuthProvider'
import { Button } from './components/ui/button'

const App = () => {
  const { user, login, logout } = useAuth()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {user ? (
        <>
          <h1 className="text-2xl font-bold">Welcome, {user}!</h1>
          <Button onClick={logout} className="bg-red-500 hover:bg-red-600">
            Logout
          </Button>
        </>
      ) : (
        <>
          <h1 className="text-xl">Please log in to continue</h1>
          <Button
            onClick={() => login('Avani')}
            className="bg-blue-500 hover:bg-blue-600"
          >
            Login
          </Button>
        </>
      )}
    </div>
  )
}

export default App

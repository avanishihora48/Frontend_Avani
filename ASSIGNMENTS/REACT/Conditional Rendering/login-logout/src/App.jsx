import React from 'react'
import { useState } from 'react'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginStatus = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <div>
      <button onClick={loginStatus}>{isLoggedIn ? 'Logout' : 'Login'}</button>
    </div>
  )
}

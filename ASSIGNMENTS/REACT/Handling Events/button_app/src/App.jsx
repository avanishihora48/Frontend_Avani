import React, { useState } from 'react'

export default function App() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
  }
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <h1>{clicked ? 'Clicked!!' : 'Not Clicked!'}</h1>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: 'black',
          width: '130px',
          height: '50px',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Click
      </button>
    </div>
  )
}

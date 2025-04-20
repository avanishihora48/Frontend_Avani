import React, { useState } from 'react'

export default function App() {
  const [age, setAge] = useState('')
  const [message, setMessage] = useState('')

  const calAge = () => {
    if (Number(age) >= 18) {
      setMessage('Eligible for vote')
    } else {
      setMessage('Not Eligible')
    }
  }
  return (
    <>
      <div>
        <input
          style={{
            width: '100%',
            padding: '12px',
            marginTop: '15px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
            outline: 'none',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9f9f9',
          }}
        />
        <button onClick={calAge}>Click</button>
        <h1>{message}</h1>
      </div>
    </>
  )
}

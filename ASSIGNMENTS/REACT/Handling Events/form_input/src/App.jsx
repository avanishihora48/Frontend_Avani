import React, { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')

  const enterValue = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <div>
        <h1>Dynamic Input Value:</h1>
        <input
          type="text"
          placeholder="Enter value.."
          value={text}
          onChange={enterValue}
          style={{
            padding: '10px',
            width: '200px',
            marginBottom: '20px',
            fontSize: '16px',
          }}
        ></input>
        <p>Your input value: {text}</p>
      </div>
    </>
  )
}

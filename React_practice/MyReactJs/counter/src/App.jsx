import React from 'react'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  const subtractingValue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value:{count} </h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={subtractingValue}>Decrement</button>
    </>
  )
}

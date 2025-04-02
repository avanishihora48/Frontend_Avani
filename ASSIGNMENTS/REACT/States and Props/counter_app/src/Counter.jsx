import React from 'react'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ marginLeft: '500px' }}>
      <h2>Counter : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}

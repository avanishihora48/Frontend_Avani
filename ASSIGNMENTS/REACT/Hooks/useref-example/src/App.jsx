import React, { useState, useRef } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const renderCount = useRef(1)

  const handleClick = () => {
    setCount(count + 1)
    renderCount.current += 1
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>State Counter: {count}</h2>
      <h3>Render Count (via useRef): {renderCount.current}</h3>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

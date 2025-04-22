import React, { useState } from 'react'
import LoggerComponent from './LoggerComponent'

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>Logger Example</h1>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} LoggerComponent
      </button>
      {show && <LoggerComponent />}
    </div>
  )
}

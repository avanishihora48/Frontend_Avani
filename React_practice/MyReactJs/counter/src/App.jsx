import React from 'react'
import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
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

/*

setCount(count + 1) =>
When you do multiple setCount(count + 1) calls in the same function, React batches them together during rendering.
Since count doesn't update immediately, each line still sees the same value of count.

 setCount((prevCount) => prevCount + 1) =>
Each update will get the latest value, So it really adds 5.

*/

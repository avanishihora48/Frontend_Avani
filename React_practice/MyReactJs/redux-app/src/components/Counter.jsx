import React from 'react'

export default function Counter(props) {
  const { counter, increment, decrement, reset } = props

  return (
    <div className="text-center mt-5 space-y-4">
      <h1 className="text-3xl font-bold">{counter}</h1>
      <div className="space-x-2">
        <button
          onClick={increment}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

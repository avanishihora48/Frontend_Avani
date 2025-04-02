import React from 'react'
import UseCard from './UseCard'

export default function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <UseCard name="Avani Shihora" age={24} location="Gujarat, India" />
      </div>
    </>
  )
}

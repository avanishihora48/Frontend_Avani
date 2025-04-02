import React from 'react'

export default function UseCard(props) {
  return (
    <>
      <div className="bg-white rounded-2xl border w-96 h-auto p-10">
        <h2 className="text-xl font-semibold text-gray-800">{props.name}</h2>
        <p className="text-gray-600">
          <strong>Age:</strong> {props.age}
        </p>
        <p className="text-gray-600">
          <strong>Location:</strong> {props.location}
        </p>
      </div>
    </>
  )
}

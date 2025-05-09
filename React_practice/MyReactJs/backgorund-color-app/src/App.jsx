import React, { useState } from 'react'

export default function App() {
  const [color, setColor] = useState('orange')

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="w-auto rounded mt-4 m-auto bg-white p-3">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Red', value: 'red' },
              { name: 'Green', value: 'green' },
              { name: 'Blue', value: 'blue' },
              { name: 'Violet', value: 'violet' },
              { name: 'Grey', value: 'gray' },
              { name: 'Yellow', value: 'yellow' },
              { name: 'Pink', value: 'pink' },
              { name: 'Purple', value: 'purple' },
              { name: 'Orange', value: 'orange' },
              { name: 'White', value: 'white' },
              { name: 'Black', value: 'black' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setColor(item.value)}
                style={{ backgroundColor: item.value }}
                className={`rounded text-white text-2xl w-24 h-10 ${
                  item.value === 'white' ? 'text-black' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

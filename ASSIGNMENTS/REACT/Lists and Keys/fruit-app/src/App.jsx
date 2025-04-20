import React from 'react'

export default function App() {
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Fruit List</h2>
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ marginBottom: '8px', fontSize: '18px' }}>
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  )
}

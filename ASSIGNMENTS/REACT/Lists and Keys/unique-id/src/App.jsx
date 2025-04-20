import React from 'react'

export default function App() {
  const users = [
    { id: 101, name: 'Avani' },
    { id: 102, name: 'Rudra' },
    { id: 103, name: 'Neha' },
    { id: 104, name: 'Yash' },
  ]

  return (
    <>
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              ID: {user.id}, Name: {user.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

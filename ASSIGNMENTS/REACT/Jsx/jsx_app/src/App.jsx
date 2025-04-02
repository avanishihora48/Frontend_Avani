import React from 'react'

export default function App() {
  const topic = 'JSX'
  const description =
    'JSX allows you to write HTML inside JavaScript and makes UI development easier.'

  return (
    <>
      <div>
        <h1>Welcome to {topic}</h1>
        <p>{description}</p>
      </div>
    </>
  )
}

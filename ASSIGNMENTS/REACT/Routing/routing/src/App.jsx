import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl text-center text-blue-600">This is Home</h2>
    </div>
  )
}

function About() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl text-center text-blue-600">This is About</h2>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className="bg-black text-2xl text-white text-center">
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

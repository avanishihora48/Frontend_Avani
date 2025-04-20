import React, { useState } from 'react'

function EmailValidationForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    return pattern.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      setError('Email is required')
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address')
    } else {
      setError('')
      alert('Email is valid!')
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            padding: '8px',
            marginTop: '5px',
          }}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit" style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default EmailValidationForm

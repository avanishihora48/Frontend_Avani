import React from 'react'

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-4 text-gray-700 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card

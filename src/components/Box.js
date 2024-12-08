import React from 'react'

export default function Box({ children }) {
  return (
    <div style={{ border: '1px solid black', padding: '1rem' }}>
      {children}
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>О нас</h1>
        <nav>
            <Link to="/">На главную</Link>
        </nav>
    </div>
  )
}

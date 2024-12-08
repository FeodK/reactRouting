import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
        <h1>Главная страница</h1>
        <nav>
            <Link to="/about">О нас</Link>
        </nav>
    </div>
  )
}

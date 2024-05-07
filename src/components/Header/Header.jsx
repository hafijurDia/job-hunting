import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/statistics">Statistics</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/applied-job">Applied Job</Link>
    </nav>
  )
}

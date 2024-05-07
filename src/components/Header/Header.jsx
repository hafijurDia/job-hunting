import React from 'react'
import { Link } from 'react-router-dom'
import ActiveLink from '../ActiveLink/ActiveLink'

export default function Header() {
  return (
    <nav className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/statistics">Statistics</ActiveLink>
      <ActiveLink to="/blog">Blog</ActiveLink>
      <ActiveLink to="/applied-job">Applied Job</ActiveLink>
    </nav>
  )
}

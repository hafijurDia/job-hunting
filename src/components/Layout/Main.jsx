import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
      <Header></Header>
      <div class="container mx-auto px-4">
      <Outlet></Outlet>
      </div>
    </div>
  )
}

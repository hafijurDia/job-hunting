import React from 'react'
import { NavLink } from 'react-router-dom'
import './ActiveLink.css'

export default function ActiveLink({to, children}) {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
            isActive
            ? "active"
            : ""
        }
        >
        {children}
        </NavLink>
    </div>
  );
}

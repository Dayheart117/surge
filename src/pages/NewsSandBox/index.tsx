

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
    <div>
      <div>News</div>
      <NavLink to="/login">login</NavLink>
    </div>
  )
}

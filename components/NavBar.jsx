import React from 'react'
import { NavLink } from 'react-router'
import '../Styling/NavBar.css'

const NavBar = () => {
  return (
    <div className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pastes">Pastes</NavLink>
    </div>
  )
}

export default NavBar
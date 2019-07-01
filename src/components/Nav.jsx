import React from 'react'
import { Link, Route } from 'react-router-dom'


function Nav() {
  return (
    <header>
      <nav id="nav-bar">
        <Link to="/">Home</Link>
        <a href="/#pic-section">About</a>
        <a href="/#contact-section">Contact</a>

      </nav>
    </header>
  )
}

export default Nav;
import React from "react"
import { Link } from "react-router-dom"
//import "bulma"



function Navbar () {
  return (
    <header>
      <nav className="navbar">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/fish-index">
          All Fish
        </Link>
        <Link className="navbar-item" to="/sustainable-eating">
          Sustainable Eating
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
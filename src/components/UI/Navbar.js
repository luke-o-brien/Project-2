import React from "react"
import { Link } from "react-router-dom"



function Navbar () {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">
            Home
          </Link>
          <Link to="/fish-index">
            All Fish
          </Link>
          <Link to="/sustainable-eating">
            Sustainable Eating
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
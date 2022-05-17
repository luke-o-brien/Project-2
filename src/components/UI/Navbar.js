import React from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"



function Navbar () {
  return (
    <header className={styles.nav}>
      <nav className={styles.nav}>
        <Link className={styles.navbar_item} to="/">
          Home
        </Link>
        <Link className={styles.navbar_item} to="/fish-index">
          All Fish
        </Link>
        <Link className={styles.navbar_item} to="/sustainable-eating">
          Sustainable Eating
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
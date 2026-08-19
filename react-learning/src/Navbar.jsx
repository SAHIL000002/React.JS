import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link to="/">home</Link>
        <Link to="/Services">services</Link>
        <Link to="/Contact">contact</Link>
    </nav>
  )

}

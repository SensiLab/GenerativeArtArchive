import React from "react"
import { Link } from "gatsby"

import "./header.css"

const Header = () => {
  return (
  <header className="full-inner">
    <h1>
      <Link to="/">Generative Systems Archive</Link>
    </h1>
  </header>
)}

export default Header

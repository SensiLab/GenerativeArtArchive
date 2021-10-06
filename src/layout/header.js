import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <h1 style={{fontWeight: 'normal', textAlign: 'center', maxWidth: '40rem', margin: '2rem auto'}}>
    <Link to="/">Generative Systems Archive</Link>
    </h1>
  </header>
)

export default Header

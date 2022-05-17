import React from "react"
import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./footer.css"
import "./content-list.css"

function ContentList({ children }) {
  return (
    <>
    <Header/>
      <ul className="directory-list full-inner">      
        <li><Link to="/">Home</Link></li>
        <li><Link to="/entries/concepts">Concepts</Link></li>
        <li><Link to="/entries/algorithms">Algorithms</Link></li>
        <li><Link to="/entries/artworks">Artworks</Link></li>
      </ul>
    <div className="full-inner">{children}</div>
    <Footer />
    </>
  )
}

export default ContentList
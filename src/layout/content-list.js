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
    <div className="full-inner">
      <ul className="directory-list">      
        <li><Link to="/">Home</Link></li>
        <li><Link to="/entries/concepts">Concepts</Link></li>
        <li><Link to="/entries/algorithms">Algorithms</Link></li>
        <li><Link to="/entries/artworks">Artworks</Link></li>
      </ul>
      {children}
    </div>
    <Footer />
    </>
  )
}

export default ContentList
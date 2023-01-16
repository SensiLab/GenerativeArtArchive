import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SearchBox from "../components/search-box"

import "./header-expanded.css"

const HeaderExpanded = () => {
  return (
  <header>
    <StaticImage 
        src="../images/logo-expanded.svg" 
        alt="Generative Systems Archive logo"
        className="logo-expanded"
        placeholder="blurred"
        width={378}
    />
    <SearchBox />
  </header>
)}

export default HeaderExpanded

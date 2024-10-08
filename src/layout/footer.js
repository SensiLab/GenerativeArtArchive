import React from "react"
import { Link } from "gatsby"

import "./footer.css"

const Footer = () => (
  <footer>
    <div className="full-inner">
      <h1>
        <Link to="/">Generative Systems Archive</Link>
      </h1>
      <ul className="footer-links">
          <li><a href="https://github.com/SensiLab/GenerativeArtArchive">Contribute</a></li>
          <li><a href="https://sensilab.monash.edu">Sensilab</a></li>
      </ul>
    </div>
  </footer>
)

export default Footer

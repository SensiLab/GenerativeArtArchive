import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./entry.css"

function Entry({ children }) {
    return (
        <>
        <Header/>
        <div>{children}</div>
        </>
    )
}

Entry.propTypes = {
    children: PropTypes.node.isRequired,
    }
    
export default Entry
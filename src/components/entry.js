import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "./footer.css";
import "./entry.css";

function Entry({ children }) {
  return (
    <>
      <Header />
      <div className="full-inner">{children}</div>
      <Footer />
    </>
  );
}

Entry.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Entry;

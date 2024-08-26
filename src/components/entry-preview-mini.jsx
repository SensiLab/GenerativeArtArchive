import React from "react";
import { Link } from "gatsby";

const EntryPreviewMini = ({ node }) => {
  const { title, thumbnailURL, slug } = node;

  return (
    <div
      style={{
        width: "100px",
        paddingBottom: "10px",
        borderBottom: "3px solid lightgrey",
      }}
    >
      <Link
        to={slug}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textDecoration: "none",
          color: "black",
        }}
      >
        <img src={thumbnailURL} style={{ width: "100px", height: "100px" }} />
        {title.toUpperCase()}
      </Link>
    </div>
  );
};

export default EntryPreviewMini;

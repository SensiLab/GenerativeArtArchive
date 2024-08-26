import React from "react";
import { Link } from "gatsby";

import "./search-results.css";

const SearchResult = ({ result }) => {
  const { slug, title, tags } = result;

  const label = title.toUpperCase();
  const tagList = tags
    ? tags.split(",").map((tag) => {
        return tag.length > 0
          ? `#${tag.trim().replace(" ", "-").toUpperCase()} `
          : null;
      })
    : [];

  return (
    <Link
      to={slug}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div
        className="search-result-container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <p
          style={{
            fontSize: "1.5em",
            fontWeight: "lighter",
            margin: "5px 0 5px 0",
          }}
        >
          {label}
        </p>
        {tagList.length > 0 && (
          <p
            style={{
              fontSize: "0.9em",
              fontWeight: "lighter",
              margin: "0",
              paddingBottom: "5px",
            }}
          >
            {tagList}
          </p>
        )}
      </div>
    </Link>
  );
};

export default SearchResult;

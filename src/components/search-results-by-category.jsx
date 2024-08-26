import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SearchResult from "./search-result";

import { CATEGORY_TO_LABEL_MAP } from "../constants/categories";

const SearchResultsByCategory = ({ category, results }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/search-icon-/" } }) {
        edges {
          node {
            relativePath
            name
            publicURL
          }
        }
      }
    }
  `);

  const getIconByCategory = (category) => {
    const iconName = `search-icon-${category}`;
    const edge = data.allFile.edges.find(({ node }) => node.name === iconName);
    return edge ? edge.node.publicURL : null;
  };

  const iconUrl = getIconByCategory(category);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {iconUrl && (
          <img src={iconUrl} alt={`${category} icon`} width={12} height={12} />
        )}
        <h2>{CATEGORY_TO_LABEL_MAP[category]}</h2>
      </div>
      <div>
        {results.map((result) => (
          <SearchResult key={result.title} result={result} />
        ))}
      </div>
    </>
  );
};

export default SearchResultsByCategory;

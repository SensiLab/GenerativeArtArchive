import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import EntryPreview from "./entry-preview";

function ContentList({ currentCategory }) {
  // TODO: Possibly lift this up to prevent multiple calls
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              type
              description
              tags
              thumbnail {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const entries = data.allMarkdownRemark.edges.filter(
    ({ node }) => node.frontmatter.type === currentCategory
  );

  return (
    <div
      style={{
        padding: "0px 15px 10px 15px",
        border: "1px solid black",
      }}
    >
      <div style={{ borderBottom: "1px solid black" }}>
        <p>
          CATEGORY DESCRIPTION. A DESCRIPTION OF THE CURRENTLY SELECTED
          CATEGORY.
        </p>
      </div>
      <div style={{}}>
        <p>
          <i>Tag One, Tag Two, Tag Three, Tag Four</i>
        </p>
      </div>
      {/* START - Entries child */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {entries.map(({ node }) => {
          return <EntryPreview key={node.frontmatter.title} node={node} />;
        })}
      </div>
      {/* END - Entries child */}
    </div>
  );
}

export default ContentList;

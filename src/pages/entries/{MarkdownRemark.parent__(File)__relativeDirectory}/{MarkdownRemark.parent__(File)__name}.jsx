import React, { useState } from "react";
import { graphql } from "gatsby";

import Layout from "../../../components/layout";
import Sidebar from "../../../components/sidebar";

import { useTag } from "../../../contexts/TagContext";

function Entry({ data }) {
  const { allTags, currentTag, handleTagChange } = useTag();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const toggleSidebar = () => {
    const previousState = sidebarIsOpen;
    setSidebarIsOpen(!previousState);
  };

  const tagCallback = (tag) => {
    handleTagChange(tag);
  };

  return (
    <Layout tags={allTags} currentTag={currentTag} tagCallback={tagCallback}>
      <div
        style={{
          display: "flex",
          paddingTop: "15px",
          borderTop: "3px solid lightgrey",
        }}
      >
        {/* Sidebar - Start */}
        <div
          style={{
            display: "flex",
          }}
        >
          {sidebarIsOpen ? (
            <>
              <Sidebar type={data.markdownRemark.frontmatter.type} />
              <button
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  border: "none",
                  width: "20px",
                  paddingTop: "500px",
                }}
                onClick={toggleSidebar}
              >
                &lt;
              </button>
            </>
          ) : (
            <button
              style={{
                display: "flex",
                alignItems: "flex-start",
                border: "none",
                width: "20px",
                paddingTop: "500px",
              }}
              onClick={toggleSidebar}
            >
              &gt;
            </button>
          )}
        </div>
        {/* Sidebar - End */}
        <div
          style={{ padding: "0 100px" }}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  );
}

export default Entry;

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        type
      }
      html
    }
  }
`;

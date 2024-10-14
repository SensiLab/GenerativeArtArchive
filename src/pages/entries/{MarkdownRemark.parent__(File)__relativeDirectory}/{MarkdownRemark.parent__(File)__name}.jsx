import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism.css";

import Layout from "../../../components/layout";
import Sidebar from "../../../components/sidebar";

import { useCategory } from "../../../contexts/CategoryContext";
import { useTag } from "../../../contexts/TagContext";

import * as styles from "./entry.module.css";

function Entry({ data }) {
  const { currentCategory, handleCategoryChange } = useCategory();
  const { tagObject, allTags, setAllTags, currentTag, handleTagChange } =
    useTag();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(true);

  const toggleSidebar = () => {
    const previousState = sidebarIsOpen;
    setSidebarIsOpen(!previousState);
  };

  const tagCallback = (tag) => {
    handleTagChange(tag);
  };

  useEffect(() => {
    if (data.markdownRemark.frontmatter.type !== currentCategory) {
      handleCategoryChange(data.markdownRemark.frontmatter.type);
    }
  }, []);

  // Set tags based on entries in current category
  useEffect(() => {
    if (tagObject) {
      const tagArray = tagObject[currentCategory];
      setAllTags(tagArray);
      handleTagChange(tagArray[0]);
    }
  }, [currentCategory, tagObject]);

  return (
    <>
      {tagObject && allTags && (
        <Layout
          tags={allTags}
          currentTag={currentTag}
          tagCallback={tagCallback}
        >
          <div className={styles.entryContainer}>
            {/* Sidebar - Start */}
            <div className={styles.sidebarContainer}>
              {sidebarIsOpen ? (
                <>
                  <Sidebar type={data.markdownRemark.frontmatter.type} />
                  <button
                    className={styles.sidebarButton}
                    onClick={toggleSidebar}
                  >
                    &lt;
                  </button>
                </>
              ) : (
                <button
                  className={styles.sidebarButton}
                  onClick={toggleSidebar}
                >
                  &gt;
                </button>
              )}
            </div>
            {/* Sidebar - End */}
            <div
              className={styles.entryContent}
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </div>
        </Layout>
      )}
    </>
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

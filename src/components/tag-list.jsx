import React from "react";

import * as styles from "./tag-list.module.css";

const TagList = ({ tags, currentTag, callback }) => {
  const formatTag = (tag) => {
    // Replace hyphens with spaces and trim
    return tag.replace(/-/g, " ").trim();
  };

  return (
    <div className={styles.container}>
      {tags && tags.length > 0 ? (
        tags.map((tag, index) => (
          <p key={index}>
            <i
              onClick={() => {
                callback(tag);
              }}
              className={styles.tag}
              style={{
                textDecoration: tag === currentTag ? "underline" : "",
              }}
            >
              {formatTag(tag)}
              {index < tags.length - 1 && ","}
            </i>
          </p>
        ))
      ) : (
        <p>
          <i>All</i>
        </p>
      )}
    </div>
  );
};

export default TagList;

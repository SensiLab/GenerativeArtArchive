import React from "react";

const TagList = ({ tags, currentTag, callback }) => {
  const formatTag = (tag) => {
    // Replace hyphens with spaces and trim
    return tag.replace(/-/g, " ").trim();
  };

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      {tags && tags.length > 0 ? (
        tags.map((tag, index) => (
          <p key={index}>
            <i
              onClick={() => {
                callback(tag);
              }}
              style={{
                textTransform: "capitalize",
                cursor: "pointer",
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

import React from "react";
import { Link } from "gatsby";

import { useCategory } from "../contexts/CategoryContext";

import * as styles from "./search-result.module.css";

const SearchResult = ({ result, dialogClose, setQuery }) => {
  const { slug, title, tags, type } = result;
  const { handleCategoryChange } = useCategory();

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
      className={styles.link}
      onClick={() => {
        handleCategoryChange(type);
        dialogClose();
        setQuery("");
      }}
    >
      <div className={styles.searchResultInner}>
        <p className={styles.title}>{label}</p>
        {tagList.length > 0 && <p className={styles.tags}>{tagList}</p>}
      </div>
    </Link>
  );
};

export default SearchResult;

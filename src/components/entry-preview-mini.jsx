import React from "react";
import { Link } from "gatsby";

import * as styles from "./entry-preview-mini.module.css";

const EntryPreviewMini = ({ node }) => {
  const { title, thumbnailURL, slug } = node;

  return (
    <div className={styles.previewContainer}>
      <Link to={slug} className={styles.previewLink}>
        <img src={thumbnailURL} className={styles.previewImg} />
        {title.toUpperCase()}
      </Link>
    </div>
  );
};

export default EntryPreviewMini;

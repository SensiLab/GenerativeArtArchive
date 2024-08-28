import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./entry-preview.module.css";

const EntryPreview = ({ node }) => {
  const { slug, frontmatter } = node;
  const { title, description, tags, thumbnail } = frontmatter;
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    if (tags) {
      const tagSet = new Set();
      tags.split(",").forEach((tag) => {
        if (tag.length > 0) {
          const formattedTag = tag.replace(/-/g, " ").trim();
          tagSet.add(formattedTag);
        }
      });
      const tagArray = Array.from(tagSet);
      setAllTags(tagArray);
    }
  }, []);

  return (
    <div className={styles.previewContainer}>
      {/* Left Section (Text) */}
      <div className={styles.previewLeft}>
        <div className={styles.icon}>
          <div>
            <StaticImage
              src="../images/entry-preview-icon.svg"
              alt="Entry preview icon"
              width={15}
              height={15}
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <div>
            <Link to={slug} className={styles.titleLink}>
              <h1 className={styles.titleText}>{title.toUpperCase()}</h1>
            </Link>
          </div>
          <div className={styles.descriptionContainer}>{description}</div>
        </div>
        <div className={styles.tagsContainer}>
          <div className={styles.tagsInner}>
            {allTags &&
              allTags.length > 0 &&
              allTags.map((tag, index) => (
                <i key={index} className={styles.tag}>
                  {tag}
                  {index < allTags.length - 1 && ", "}
                </i>
              ))}
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className={styles.previewRight}>
        <div className={styles.imageContainer}>
          {thumbnail && (
            <Link to={slug} className={styles.imageLink}>
              <img className={styles.image} src={thumbnail.publicURL} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EntryPreview;

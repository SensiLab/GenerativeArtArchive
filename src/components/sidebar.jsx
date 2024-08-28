import React, { useEffect, useState } from "react";

import EntryPreviewMini from "./entry-preview-mini";
import { useEntriesData } from "../entry-queries";
import { CATEGORIES_TO_FILTER_MAP } from "../constants/categories";

import { useTag } from "../contexts/TagContext";

import * as styles from "./sidebar.module.css";

const Sidebar = ({ type }) => {
  const entries = useEntriesData();
  const entriesFilteredByCategory = entries[
    CATEGORIES_TO_FILTER_MAP[type]
  ].nodes.map((node) => ({
    title: node.frontmatter.title,
    thumbnailURL: node.frontmatter.thumbnail
      ? node.frontmatter.thumbnail.publicURL
      : null,
    slug: node.slug,
    tags: node.frontmatter.tags,
  }));
  const [entriesFilteredByTag, setEntriesFilteredByTag] = useState([]);
  const { currentTag } = useTag();

  useEffect(() => {
    if (currentTag === "all") {
      setEntriesFilteredByTag(entriesFilteredByCategory);
    } else {
      const filteredEntries = entriesFilteredByCategory.filter((entry) => {
        if (entry.tags) {
          const entryTags = entry.tags.split(",").map((tag) => tag.trim());
          return entryTags.includes(currentTag);
        }
        return false;
      });
      setEntriesFilteredByTag(filteredEntries);
    }
  }, [currentTag]);

  return (
    <div className={styles.scroller}>
      {entriesFilteredByTag.map((node) => {
        return <EntryPreviewMini key={node.title} node={node} />;
      })}
    </div>
  );
};

export default Sidebar;

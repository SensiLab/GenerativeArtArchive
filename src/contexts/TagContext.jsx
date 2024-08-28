import React, { createContext, useState, useContext, useEffect } from "react";

import { useEntriesData } from "../entry-queries";
import { CATEGORIES } from "../constants/categories";

const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [tagObject, setTagObject] = useState(null);
  const [allTags, setAllTags] = useState([]);
  const [currentTag, setCurrentTag] = useState(null);
  const entries = useEntriesData();

  const handleTagChange = (newTag) => {
    setCurrentTag(newTag);
  };

  useEffect(() => {
    const tempTagObject = {
      [CATEGORIES.concept]: [],
      [CATEGORIES.algorithm]: [],
      [CATEGORIES.example]: [],
      [CATEGORIES.artwork]: [],
    };

    Object.entries(entries).forEach(([key, value]) => {
      const entries = value.nodes;
      const tags = new Set();
      tags.add("all");
      entries.forEach((entry) => {
        if (entry.frontmatter.tags) {
          entry.frontmatter.tags.split(",").forEach((tag) => {
            if (tag.length > 0) {
              tags.add(tag.trim());
            }
          });
        }
      });
      tempTagObject[key.slice(0, -1)] = Array.from(tags);
    });

    setTagObject(tempTagObject);
  }, []);

  return (
    <TagContext.Provider
      value={{
        tagObject,
        allTags,
        setAllTags,
        currentTag,
        handleTagChange,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export const useTag = () => useContext(TagContext);

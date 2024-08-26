import React, { createContext, useState, useContext } from "react";

const TagContext = createContext();

export const TagProvider = ({ children }) => {
  const [allTags, setAllTags] = useState([]);
  const [currentTag, setCurrentTag] = useState(null);

  const handleTagChange = (newTag) => {
    setCurrentTag(newTag);
  };

  return (
    <TagContext.Provider
      value={{
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

import React, { createContext, useState, useContext } from "react";

import { CATEGORIES } from "../constants/categories";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES.concept);

  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <CategoryContext.Provider
      value={{
        currentCategory,
        handleCategoryChange,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);

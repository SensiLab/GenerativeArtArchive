import React, { useState } from "react";

import ContentMenu from "./content-menu";
import ContentList from "./content-list";

const CATEGORIES = {
  concept: "concept",
  algorithm: "algorithm",
  example: "example",
  artwork: "artwork",
};

const CATEGORY_TO_LABEL_MAP = {
  [CATEGORIES.concept]: "CONCEPTS",
  [CATEGORIES.algorithm]: "ALGORITHMS",
  [CATEGORIES.example]: "EXAMPLES",
  [CATEGORIES.artwork]: "ARTWORKS",
};

const CATEGORY_TO_COLOR_MAP = {
  [CATEGORIES.concept]: "#ffd34f",
  [CATEGORIES.algorithm]: "#148e41",
  [CATEGORIES.example]: "#53d0eb",
  [CATEGORIES.artwork]: "#e7e3c5",
};

const ContentMain = () => {
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES.concept);

  const handleCategoryChange = (newCategory) => {
    setCurrentCategory(newCategory);
  };

  return (
    <div style={{}}>
      <ContentMenu
        categories={CATEGORIES}
        handleCategoryChange={handleCategoryChange}
        currentCategory={currentCategory}
        categoryToLabelMap={CATEGORY_TO_LABEL_MAP}
        categoryToColorMap={CATEGORY_TO_COLOR_MAP}
      />
      <ContentList currentCategory={currentCategory} />
    </div>
  );
};

export default ContentMain;

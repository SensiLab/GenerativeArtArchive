import React from "react";

import * as styles from "./category-description.module.css";

import { useCategory } from "../contexts/CategoryContext";

import { CATEGORIES } from "../constants/categories";

const descriptions = {
  [CATEGORIES.concept]:
    "Fundamental ideas and principles underlying creative code and generative art.",
  [CATEGORIES.algorithm]:
    "Specific formulas, computational techniques and procedural methods used to create generative artworks.",
  [CATEGORIES.example]:
    "Implementations and code snippets demonstrating the use of various generative art techniques.",
  [CATEGORIES.artwork]:
    "A curated collection of generative art pieces, showcasing the diverse range of visual outputs possible through algorithmic creation.",
};

const CategoryDescription = () => {
  const { currentCategory } = useCategory();

  const descriptionText = descriptions[currentCategory].toUpperCase();

  return (
    <div className={styles.container}>
      <p className={styles.text}>{descriptionText}</p>
    </div>
  );
};

export default CategoryDescription;

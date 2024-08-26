import React from "react";

import { useCategory } from "../contexts/CategoryContext";

const FeaturedArticle = ({ article }) => {
  const { slug, frontmatter } = article;
  const { title, type, description } = frontmatter;
  const { handleCategoryChange } = useCategory();

  return (
    <section className="featured full">
      <div className="full-inner">
        <div className="featured-title-matter">
          <h2>Featured article</h2>
          <h1>{title}</h1>
        </div>
        <div className="featured-description">
          <p>{description}</p>
          <a
            className="start-reading"
            href={slug}
            onClick={() => {
              handleCategoryChange(type);
            }}
          >
            Start reading
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;

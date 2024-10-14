import React from "react";
import { Link } from "gatsby";

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
          <Link
            to={slug}
            className="start-reading"
            onClick={() => {
              handleCategoryChange(type);
            }}
          >
            Start reading
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;

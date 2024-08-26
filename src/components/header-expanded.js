import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SearchBox from "./search-box";
import InfoButton from "./info-button";
import P5Sketch from "./p5-sketch";

import { CATEGORIES } from "../constants/categories";

import { useCategory } from "../contexts/CategoryContext";

import "./header-expanded.css";

const HeaderExpanded = () => {
  const { handleCategoryChange } = useCategory();

  return (
    <header className="full-inner">
      <div className="header-background">
        <P5Sketch />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <Link
          to={`/?category=${CATEGORIES.concept}`}
          onClick={() => {
            handleCategoryChange(CATEGORIES.concept);
          }}
        >
          <StaticImage
            src="../images/logo-expanded.svg"
            alt="Generative Systems Archive logo"
            className="logo-expanded"
            placeholder="blurred"
            width={378}
          />
        </Link>
        <div style={{ display: "flex", gap: "10px", paddingTop: "1em" }}>
          <SearchBox />
          <InfoButton />
        </div>
      </div>
    </header>
  );
};

export default HeaderExpanded;

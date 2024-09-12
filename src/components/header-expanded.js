import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SearchBox from "./search-box";
import InfoButton from "./info-button";
import P5Sketch from "./p5-sketch";

import { CATEGORIES } from "../constants/categories";

import { useCategory } from "../contexts/CategoryContext";

import "./header.css";
import * as styles from "./header-expanded.module.css";

const HeaderExpanded = () => {
  const { handleCategoryChange } = useCategory();

  return (
    <header className="full-inner">
      <div className={styles.headerBackground}>
        <P5Sketch />
      </div>
      <div className={styles.headerContainer}>
        <Link
          to={"/"}
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
        <div className={styles.buttonsContainer}>
          <SearchBox />
          <InfoButton />
        </div>
      </div>
    </header>
  );
};

export default HeaderExpanded;

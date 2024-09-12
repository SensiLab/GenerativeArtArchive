import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import SearchBox from "./search-box";
import InfoButton from "./info-button";

import { useHome } from "../contexts/HomeContext";
import { useCategory } from "../contexts/CategoryContext";

import { CATEGORIES } from "../constants/categories";

import "./header.css";

const Header = () => {
  const { setIsExpanded } = useHome();
  const { handleCategoryChange } = useCategory();

  return (
    <header className="full-inner collapsed">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link
          to={"/"}
          onClick={() => {
            handleCategoryChange(CATEGORIES.concept);
            setIsExpanded(true);
          }}
        >
          <StaticImage src="../images/logo-small.svg" alt="home icon" />
        </Link>
        <div style={{ display: "flex", gap: "10px", paddingTop: "1em" }}>
          <SearchBox />
          <InfoButton />
        </div>
      </div>
    </header>
  );
};

export default Header;

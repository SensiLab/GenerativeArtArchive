import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";

import "./content-menu.css";

import ContributeModal from "./contribute-modal";

import { useHome } from "../contexts/HomeContext";
import { useCategory } from "../contexts/CategoryContext";

import {
  CATEGORIES,
  CATEGORY_TO_COLOR_MAP,
  CATEGORY_TO_LABEL_MAP,
} from "../constants/categories";

const ContentMenu = ({}) => {
  const { setIsExpanded } = useHome();
  const { currentCategory, handleCategoryChange } = useCategory();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateCategory = () => {
      const category =
        new URLSearchParams(window.location.search).get("category") ||
        currentCategory;
      handleCategoryChange(category);
    };

    updateCategory(); // Initial update
    window.addEventListener("popstate", updateCategory);

    return () => window.removeEventListener("popstate", updateCategory);
  }, []);

  const handleCategoryClick = (category) => {
    if (!isHomePage) {
      navigate(`/?category=${category}`);
      handleCategoryChange(category);
      setIsExpanded(false);
    } else {
      const url = new URL(window.location.href);
      url.searchParams.set("category", category);
      window.history.pushState({}, "", url);
      handleCategoryChange(category);
    }
  };

  const dialogOpen = () => {
    setOpen(true);
  };
  const dialogClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const isActive = (category) => {
    return currentCategory === category;
  };

  const categoryDivs = Object.entries(CATEGORIES).map(([key, _]) => (
    <div
      key={key}
      onClick={() => {
        handleCategoryClick(key);
      }}
      className={isActive(key) ? "button-selected button" : "button"}
      style={isActive(key) ? { backgroundColor: "white" } : {}}
    >
      <div
        style={{
          backgroundColor: CATEGORY_TO_COLOR_MAP[key],
          width: "22px",
          height: "25px",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      ></div>
      <div>
        <h1 className="category-button-text" style={{ margin: "0px" }}>
          {CATEGORY_TO_LABEL_MAP[key]}
        </h1>
      </div>
    </div>
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f3f3f3",
      }}
    >
      <div
        className="button-container"
        style={{ display: "flex", gap: "20px" }}
      >
        {categoryDivs}
      </div>
      <div className="menu-filler"></div>
      <div className="button" onClick={dialogOpen}>
        <h1
          className="category-button-text"
          style={{ margin: "0px", cursor: "pointer", zIndex: 1 }}
        >
          CONTRIBUTE
        </h1>
        <ContributeModal open={open} dialogClose={dialogClose} />
      </div>
    </div>
  );
};

export default ContentMenu;

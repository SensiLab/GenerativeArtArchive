import React from "react";
import { useLocation } from "@reach/router";

import HeaderExpanded from "./header-expanded";
import Header from "./header";
import Footer from "./footer";
import Menu from "./content-menu";
import CategoryDescription from "./category-description";
import TagList from "./tag-list";
import FeaturedArticle from "./featured-article";

import { useHome } from "../contexts/HomeContext";

import * as styles from "./layout.module.css";

const Layout = ({
  header: CustomHeader,
  featuredArticle,
  tags,
  currentTag,
  tagCallback,
  children,
}) => {
  const location = useLocation();
  const { isExpanded } = useHome();
  const isHomePage = location.pathname === "/";
  const isSecondaryPage =
    location.pathname === "/about/" || location.pathname === "/contact/";

  return (
    <div>
      {CustomHeader ? (
        <CustomHeader />
      ) : isHomePage && isExpanded ? (
        <HeaderExpanded />
      ) : (
        <Header />
      )}
      {!isSecondaryPage && (
        <>
          {isHomePage && isExpanded && featuredArticle && (
            <FeaturedArticle article={featuredArticle} />
          )}
          <Menu />
          <div className={styles.entryList}>
            <CategoryDescription />
            <TagList
              tags={tags}
              currentTag={currentTag}
              callback={tagCallback}
            />
            <>{children}</>
          </div>
        </>
      )}
      {isSecondaryPage && children}
      <Footer />
    </div>
  );
};

export default Layout;

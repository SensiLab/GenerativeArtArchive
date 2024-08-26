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
          <div
            style={{
              padding: "0px 15px 10px 15px",
              border: "1px solid black",
            }}
          >
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

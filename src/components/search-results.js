import React, { useEffect, useState } from "react";
import { useFlexSearch } from "react-use-flexsearch";
import { useStaticQuery, graphql } from "gatsby";

import SearchResultsByCategory from "./search-results-by-category";

import { CATEGORIES } from "../constants/categories";

const SearchResults = ({ searchTerm }) => {
  const searchData = useStaticQuery(
    graphql`
      {
        localSearchEntries {
          store
          index
        }
      }
    `
  );
  const store = searchData["localSearchEntries"]["store"];
  const index = searchData["localSearchEntries"]["index"];
  const results = useFlexSearch(searchTerm, index, store);

  const [resultsByCategory, setResultsByCategory] = useState({
    [CATEGORIES.concept]: [],
    [CATEGORIES.example]: [],
    [CATEGORIES.algorithm]: [],
    [CATEGORIES.artwork]: [],
  });

  useEffect(() => {
    // Filter results into their respective categories
    const resultsByCategoryTemp = {
      [CATEGORIES.concept]: [],
      [CATEGORIES.example]: [],
      [CATEGORIES.algorithm]: [],
      [CATEGORIES.artwork]: [],
    };

    results.forEach((result) => {
      const resultCategory = resultsByCategoryTemp[result.type];
      resultCategory.push(result);
    });

    setResultsByCategory(resultsByCategoryTemp);
  }, [results]);

  return (
    <div>
      <div>
        {Object.entries(resultsByCategory).map(([key, value]) => {
          return (
            value &&
            value.length > 0 && (
              <SearchResultsByCategory
                key={key}
                category={key}
                results={value}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;

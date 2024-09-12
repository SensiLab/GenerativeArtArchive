import React, { useEffect } from "react";
import { navigate } from "gatsby";
import "@fontsource/roboto";

import { HomeProvider } from "./src/contexts/HomeContext";
import { CategoryProvider } from "./src/contexts/CategoryContext";
import { TagProvider } from "./src/contexts/TagContext";

const RefreshRedirect = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isRefreshing = sessionStorage.getItem("isRefreshing");

      // Use the performance API to check if it's a reload
      const navigationEntries = performance.getEntriesByType("navigation");
      const isReload =
        navigationEntries.length > 0 && navigationEntries[0].type === "reload";

      if (isReload && isRefreshing === "true") {
        sessionStorage.removeItem("isRefreshing");
        // Only redirect if it was a refresh
        navigate("/");
      }

      const handleBeforeUnload = () => {
        sessionStorage.setItem("isRefreshing", "true");
      };

      window.addEventListener("beforeunload", handleBeforeUnload);

      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, []);

  return children;
};

export const wrapRootElement = ({ element }) => (
  <RefreshRedirect>
    <HomeProvider>
      <CategoryProvider>
        <TagProvider>{element}</TagProvider>
      </CategoryProvider>
    </HomeProvider>
  </RefreshRedirect>
);

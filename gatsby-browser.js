import React from "react";
import "@fontsource/roboto";

import { HomeProvider } from "./src/contexts/HomeContext";
import { CategoryProvider } from "./src/contexts/CategoryContext";
import { TagProvider } from "./src/contexts/TagContext";

export const wrapPageElement = ({ element }) => (
  <HomeProvider>
    <CategoryProvider>
      <TagProvider>{element}</TagProvider>
    </CategoryProvider>
  </HomeProvider>
);

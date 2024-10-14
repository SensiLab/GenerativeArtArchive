import React from "react";
import "@fontsource/roboto";

export const wrapRootElement = ({}) => {
  // Render a minimal placeholder during SSR to avoid context issues
  return <div />;
};

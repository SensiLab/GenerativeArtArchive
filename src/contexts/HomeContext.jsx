import React, { createContext, useState, useContext } from "react";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <HomeContext.Provider
      value={{
        isExpanded,
        setIsExpanded,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => useContext(HomeContext);

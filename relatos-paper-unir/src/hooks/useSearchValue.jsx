import { useState } from "react";
import { SearchValueContext } from "../context/SearchValueContext";

export const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState(""); 

  const updateSearchValue = (value) => {
    setSearchValue(value);
  };

  const clearSearchValue = () => {
    setSearchValue("");
  };

  return {
    searchValue,
    updateSearchValue,
    clearSearchValue,
  };
};

export const SearchValueProvider = ({ children }) => {
  const searchContextValue = useSearchValue();

  return (
    <SearchValueContext.Provider value={searchContextValue}>
      {children}
    </SearchValueContext.Provider>
  );
};

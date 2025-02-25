import { createContext, useState, useContext } from "react";
import { products } from "../../Data/Data";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [product, setProduct] = useState(products);

  return (
    <SearchContext.Provider value={{ product, setProduct }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
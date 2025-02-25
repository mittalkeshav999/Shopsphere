import { createContext, useState, useContext } from "react";
const CurrencyContext = createContext();

const currencyOptions = {
  INR: { symbol: "₹", rate: 1 },
  USD: { symbol: "$", rate: 0.011 },
  EUR: { symbol: "€", rate: 0.011 },

};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");


  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, currencyOptions }}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom Hook for easy access
export const useCurrency = () => useContext(CurrencyContext);
import React, { createContext, useState, useContext, useEffect } from "react";
import en from "./English.json";
import hi from "./Hindi.json";
import jp from "./Japanese.json";

const languages = [
  { isoCode: "en", name: "English" },
  { isoCode: "hi", name: "हिन्दी" },
  { isoCode: "jp", name: "日本語" }
];

const translations = { en, hi, jp };

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState("en"); // Default language
  const [currentTranslations, setCurrentTranslations] = useState(translations[language]);
  const missingTranslations = {};

  useEffect(() => {
    setCurrentTranslations(translations[language]);
  }, [language]);


  const t = (key) => {
    if (!currentTranslations[key]) {
      missingTranslations[key] = key;
      console.warn("Missing translations:", missingTranslations);
    }
    return currentTranslations[key] || key; 
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Custom Hook
export function useTranslation() {
  return useContext(TranslationContext);
}

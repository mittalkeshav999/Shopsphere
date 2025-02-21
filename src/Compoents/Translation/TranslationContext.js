import React, { createContext, useState, useContext, useEffect } from "react";
import en from "./English.json";
import hi from "./Hindi.json";
import jp from "./Japanese.json";

// Define available languages
const languages = [
  { isoCode: "en", name: "English" },
  { isoCode: "hi", name: "हिन्दी" },
  { isoCode: "jp", name: "日本語" }
];

// Store translations
const translations = { en, hi, jp };

// Create Context
const TranslationContext = createContext();

// Provider Component
export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState("en"); // Default language
  const [currentTranslations, setCurrentTranslations] = useState(translations[language]);
  const missingTranslations = {};

  useEffect(() => {
    setCurrentTranslations(translations[language]);
  }, [language]);

  // Function to change language
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  // Function to translate keys
  const t = (key) => {
    if (!currentTranslations[key]) {
      missingTranslations[key] = key;
      console.warn("Missing translations:", missingTranslations);
    }
    return currentTranslations[key] || key; // If key is missing, return the original text
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, t, languages }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Custom Hook
export function useTranslation() {
  return useContext(TranslationContext);
}

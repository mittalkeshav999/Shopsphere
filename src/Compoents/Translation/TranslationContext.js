import React, { createContext, useState, useEffect, useContext, useMemo } from "react";
import en from "./English.json";
import hi from "./Hindi.json";
import jp from "./Japanese.json";

// Define available languages
const languages = [
  { isoCode: "en", name: "English" },
  { isoCode: "hi", name: "हिन्दी" },
  { isoCode: "jp", name: "日本語" }
];

// Load translations dynamically
const translations = { en, hi, jp };

// Create context
const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState("en"); // Default language

  // ✅ Compute `currentTranslations` dynamically instead of setting state
  const currentTranslations = useMemo(() => translations[language] || {}, [language]);

  useEffect(() => {
    logMissingTranslations();
  }, [language]); // ✅ Only trigger missing translation check on language change

  const changeLanguage = (lang) => setLanguage(lang);

  // ✅ Use a function that safely handles missing keys
  const t = (key) => currentTranslations[key] || key; // Fallback to key if not found

  const isTranslated = (key) => currentTranslations[key] !== undefined; // ✅ Check actual value, not just key presence

  // ✅ Count missing translations based on English as the reference
  const countMissingTranslations = () => {
    const referenceKeys = Object.keys(translations["en"]); // Use English as a base
    const currentLangTranslations = translations[language] || {}; // ✅ Get latest language translations
    const missingKeys = referenceKeys.filter((key) => currentLangTranslations[key] === undefined);
    
    console.log(`🚨 Missing words in ${language}:`, missingKeys); // ✅ Log missing words
    return missingKeys.length;
  };

  // ✅ Log missing translations count whenever language changes
  const logMissingTranslations = () => {
    console.log(`🚨 Missing translations in ${language}: ${countMissingTranslations()}`);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, t, isTranslated, countMissingTranslations, languages }}>
      {children}
    </TranslationContext.Provider>
  );
}

// Custom hook for translation usage
export function useTranslation() {
  return useContext(TranslationContext);
}

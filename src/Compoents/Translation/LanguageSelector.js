import React from "react";
import { useTranslation } from "./TranslationContext";

export default function LanguageSelector() {
  const { language, changeLanguage, languages } = useTranslation();

  return (
    <div className="d-flex align-items-center">
      <label className="me-2">🌐:</label>
      <select className="form-select w-auto" value={language} onChange={(e) => changeLanguage(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang.isoCode} value={lang.isoCode}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

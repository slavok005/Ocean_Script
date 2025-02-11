"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Импорт иконки

const languages = ["ENG", "DE"];

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("ENG");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 hover:text-gray-300"
      >
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
        <span>{language}</span>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-24 bg-gray-800 text-white rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang}
              className="block w-full px-4 py-2 text-center hover:bg-gray-700"
              onClick={() => selectLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

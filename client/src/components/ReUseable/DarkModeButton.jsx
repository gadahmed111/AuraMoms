/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const ThemeMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const rootElement = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, rootElement]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <label
      htmlFor="themeToggle"
      className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 dark:bg-neutral-700 transition"
    >
      <input
        type="checkbox"
        id="themeToggle"
        className="peer sr-only"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />

      <span className="absolute inset-y-0 left-0 m-1 w-6 h-6 rounded-full bg-white dark:bg-white transition-all peer-checked:translate-x-6"></span>

      <span className="absolute inset-y-0 left-8 flex items-center">
        {theme === "light" ? (
          <CiLight className="text-yellow-500 font-bold text-2xl absolute right-1 " />
        ) : (
          <CiDark className="text-black text-2xl absolute -left-1" />
        )}
      </span>
    </label>
  );
};

export default ThemeMode;

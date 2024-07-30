import { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeChanger = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleClick = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.theme = !isDarkMode ? "dark" : "light";
  };

  return (
    <button onClick={handleClick}>
      {isDarkMode ? <MdDarkMode size="25" /> : <MdOutlineLightMode size="25" />}
    </button>
  );
};

export default ThemeChanger;

import { useState, useEffect } from "react";

type ThemeState = "light" | "dark";

function useTheme() {
  const [theme, setTheme] = useState<ThemeState>("light");
  const inverseTheme: ThemeState = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(inverseTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, inverseTheme]);
  return { inverseTheme, setTheme };
}

export default useTheme;

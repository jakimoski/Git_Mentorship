import { createContext, useEffect, useState } from "react";
import { TChildren, TThemeContext } from "../types/types";

export const ThemeContext = createContext({} as TThemeContext);

export default function ThemeContextProvider({ children }: TChildren) {
  // Check system if default theme is dark

  const initial = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const localTheme: boolean | "" = JSON.parse(
    localStorage.getItem("theme") || `""`
  );

  const isBrowserDefaultDark = () => {
    if (localTheme === "") {
      localStorage.setItem("theme", JSON.stringify(initial));
      return initial;
    } else {
      return localTheme;
    }
  };

  const [isDark, setIsDark] = useState<boolean>(isBrowserDefaultDark());

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", JSON.stringify(true));
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", JSON.stringify(false));
    }
  }, [isDark]);

  function toggleIsDark() {
    setIsDark((isDark) => !isDark);
    // localStorage.setItem("theme", JSON.stringify(isDark));
  }

  const themeValue = {
    theme: isDark,
    setTheme: toggleIsDark,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
}

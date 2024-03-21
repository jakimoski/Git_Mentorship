import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return <button onClick={setTheme}>{theme ? "Light" : "Dark"}</button>;
}

export default ToggleTheme;

// rfce

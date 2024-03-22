import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={setTheme}>
      {theme ? (
        <FontAwesomeIcon className="theme-toggle__icon" icon={faSun} />
      ) : (
        <FontAwesomeIcon className="theme-toggle__icon" icon={faMoon} />
      )}
    </button>
  );
}

export default ToggleTheme;

// rfce

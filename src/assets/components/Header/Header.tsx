import { NavLink } from "react-router-dom";
import "./header.css";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? `active nav__link` : "nav__link"
              }
              to={"/"}
              end
            >
              Feed
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav__link" : "nav__link"
              }
              to={"create"}
            >
              Create
            </NavLink>
          </li>
        </ul>
      </nav>
      <ToggleTheme />
    </header>
  );
}

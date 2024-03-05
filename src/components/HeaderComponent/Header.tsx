import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div>
          <span className="logo">Expenses</span>
        </div>
        <nav>
          <NavLink className="nav-link" to="/">
            <span>Overview</span>
          </NavLink>
          <NavLink className="nav-link" to="/expenses">
            <span>Expenses</span>
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;

import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? css.activePage : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/catalog"}
        className={({ isActive }) => (isActive ? css.activePage : "")}
      >
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;

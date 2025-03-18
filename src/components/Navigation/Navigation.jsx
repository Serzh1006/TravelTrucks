import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/catalog"}>Catalog</NavLink>
    </nav>
  );
};

export default Navigation;

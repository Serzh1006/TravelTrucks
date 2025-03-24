import { Link } from "react-router-dom";
import css from "./notfoundpage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notfound}>
      <h1>404</h1>
      <Link className={css.homelink} to={"/"}>
        Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;

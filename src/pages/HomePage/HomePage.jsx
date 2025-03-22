import { Link } from "react-router-dom";
import css from "./homepage.module.css";

const HomePage = () => {
  return (
    <section className={css.sectionHero}>
      <div className={css.containerHero}>
        <h1 className={css.titleHero}>Campers of your dreams</h1>
        <p className={css.textHero}>
          You can find everything you want in our catalog
        </p>
        <Link to={"/catalog"} className={css.linkHero}>
          View Now
        </Link>
      </div>
    </section>
  );
};

export default HomePage;

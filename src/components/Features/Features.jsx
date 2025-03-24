import { useOutletContext } from "react-router-dom";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import css from "./features.module.css";

const Features = () => {
  const truckObj = useOutletContext();
  return (
    <div className={css.featuresInfoBox}>
      <CategoriesList dataObj={truckObj} />
      <h3 className={css.detailsTitle}>Vehicle details</h3>
      <ul className={css.aboutTruckInfoList}>
        <li>
          <p className={css.textAboutTruck}>
            Form<span>{truckObj.form}</span>
          </p>
        </li>
        <li>
          <p className={css.textAboutTruck}>
            Length<span>{truckObj.length}</span>
          </p>
        </li>
        <li>
          <p className={css.textAboutTruck}>
            Width
            <span>{truckObj.width}</span>
          </p>
        </li>
        <li>
          <p className={css.textAboutTruck}>
            Height
            <span>{truckObj.height}</span>
          </p>
        </li>
        <li>
          <p className={css.textAboutTruck}>
            Tank
            <span>{truckObj.tank}</span>
          </p>
        </li>
        <li>
          <p className={css.textAboutTruck}>
            Consumption
            <span>{truckObj.consumption}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Features;

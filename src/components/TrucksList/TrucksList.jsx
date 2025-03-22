import { visibleTrucks } from "../../redux/selectors";
import { useSelector } from "react-redux";
import TruckItem from "../TruckItem/Truckitem";
import css from "./truckslist.module.css";

const TrucksList = () => {
  const visibleItems = useSelector(visibleTrucks);

  return (
    <div>
      <ul className={css.cardList}>
        {visibleItems?.map((truck) => {
          return (
            <li key={truck.id}>
              <TruckItem idCard={truck.id} data={truck} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TrucksList;

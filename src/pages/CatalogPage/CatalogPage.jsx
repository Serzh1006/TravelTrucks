import { useEffect } from "react";
import { fetchAll } from "../../redux/fetchTrucks";
import { useDispatch } from "react-redux";
import TrucksList from "../../components/TrucksList/TrucksList";
import LocationFilter from "../../components/LocationFilter/LocationFilter";
import css from "./catalogpage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className="container">
      <div className={css.wrapCatalogPage}>
        <LocationFilter />
        <TrucksList />
      </div>
    </div>
  );
};

export default CatalogPage;

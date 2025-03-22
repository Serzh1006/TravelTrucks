import { useEffect } from "react";
import { fetchAll } from "../../redux/fetchTrucks";
import { useDispatch } from "react-redux";
import TrucksList from "../../components/TrucksList/TrucksList";
import LocationFilter from "../../components/LocationFilter/LocationFilter";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      <LocationFilter />
      <TrucksList />
    </>
  );
};

export default CatalogPage;

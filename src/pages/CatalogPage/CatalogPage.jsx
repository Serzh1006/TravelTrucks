import { useEffect } from "react";
import { fetchAll } from "../../redux/fetchTrucks";
import { useDispatch } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <>
      <div>Catalog Page</div>
    </>
  );
};

export default CatalogPage;

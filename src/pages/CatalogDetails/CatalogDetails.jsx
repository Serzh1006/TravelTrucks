import { useParams } from "react-router-dom";
import { fetchByID } from "../../redux/fetchTrucks";
import { useEffect } from "react";
import { selectInfoAboutCard } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";

const CatalogDetails = () => {
  const { id } = useParams();
  const cardData = useSelector(selectInfoAboutCard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchByID(id));
  }, [dispatch, id]);

  return <div>CatalogDetails</div>;
};

export default CatalogDetails;

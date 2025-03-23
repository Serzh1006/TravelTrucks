import { useParams } from "react-router-dom";
import { fetchByID } from "../../redux/fetchTrucks";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import GalleryTruck from "../../components/GalleryTruck/GalleryTruck";
import Subscribe from "../../components/Subscribe/Subscribe";
import css from "./catalogdetails.module.css";

const CatalogDetails = () => {
  const { id } = useParams();
  const [truckInfo, setTruckInfo] = useState({});

  useEffect(() => {
    try {
      fetchByID(id).then((data) => setTruckInfo(data));
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  return (
    <div>
      <GalleryTruck data={truckInfo} />
      <div className="container">
        <div className={css.linksWrap}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${css.linksIntoCatalog} ${css.active}`
                : css.linksIntoCatalog
            }
            to={"features"}
          >
            Features
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${css.linksIntoCatalog} ${css.active}`
                : css.linksIntoCatalog
            }
            to={"reviews"}
          >
            Reviews
          </NavLink>
        </div>
      </div>
      <Subscribe />
      <Outlet context={truckInfo} />
    </div>
  );
};

export default CatalogDetails;

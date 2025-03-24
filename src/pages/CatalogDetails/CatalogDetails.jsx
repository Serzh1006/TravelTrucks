import { useParams } from "react-router-dom";
import { fetchByID } from "../../redux/fetchTrucks";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import iziToast from "izitoast";
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
      iziToast.error({
        title: "Error",
        message: error.message,
        position: "topRight",
      });
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
      <div className="container">
        <div className={css.outletWrap}>
          <Outlet context={truckInfo} />
          <Subscribe />
        </div>
      </div>
    </div>
  );
};

export default CatalogDetails;

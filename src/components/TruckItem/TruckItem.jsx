import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { selectFavorites } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import CategoriesList from "../CategoriesList/CategoriesList";
import { addFavCard, removeFavCard } from "../../redux/favoritesSlice";
import css from "../TruckItem/truckitem.module.css";

const TruckItem = ({ data, idCard }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const favItems = useSelector(selectFavorites);
  const dispatch = useDispatch();

  useEffect(() => {
    const idEl = favItems.find((id) => id === idCard);
    if (idEl) {
      setIsFavorite(true);
    }
  }, [idCard, favItems]);

  const addRemoveCardToFavorites = (id) => {
    if (!isFavorite) {
      setIsFavorite(true);
      dispatch(addFavCard(id));
      iziToast.success({
        title: "OK",
        message: "Added to save!",
        position: "topRight",
      });
      return;
    }
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(removeFavCard(id));
      iziToast.success({
        title: "OK",
        message: "Remove from save!",
        position: "topRight",
      });
      return;
    }
  };

  return (
    <>
      <div className={css.itemWrap}>
        <div className={css.imgBox}>
          <img src={data.gallery[0].original} alt={data.name} />
        </div>
        <div>
          <div className={css.box1}>
            <div className={css.titlePriceBox}>
              <h2 className={css.title}>{data.name}</h2>
              <p className={css.price}>
                €{`${data.price},00`}
                <button
                  className={css.btnLike}
                  type="button"
                  onClick={() => addRemoveCardToFavorites(idCard)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 9.854L10.659 7.1705C10.326 6.506 9.7485 5.5505 8.931 4.778C8.127 4.0175 7.164 3.5 6 3.5C3.486 3.5 1.5 5.489 1.5 7.88C1.5 9.6965 2.331 10.979 4.302 12.935C4.8075 13.436 5.3835 13.9775 6.021 14.5745C7.683 16.1345 9.75 18.0755 12 20.6705C14.25 18.0755 16.317 16.1345 17.979 14.5745C18.6165 13.9775 19.194 13.4345 19.698 12.935C21.669 10.979 22.5 9.6965 22.5 7.88C22.5 5.489 20.514 3.5 18 3.5C16.8345 3.5 15.873 4.0175 15.069 4.778C14.2515 5.5505 13.674 6.506 13.341 7.1705L12 9.854ZM12.588 22.292C12.5158 22.3776 12.4257 22.4463 12.3242 22.4935C12.2226 22.5407 12.112 22.5651 12 22.5651C11.888 22.5651 11.7774 22.5407 11.6758 22.4935C11.5743 22.4463 11.4842 22.3776 11.412 22.292C9.0105 19.439 6.837 17.399 5.0475 15.7205C1.95 12.812 0 10.9835 0 7.88C0 4.6325 2.685 2 6 2C8.4 2 10.0785 3.575 11.106 5.012C11.496 5.5595 11.793 6.086 12 6.5C12.2597 5.982 12.5586 5.48456 12.894 5.012C13.9215 3.5735 15.6 2 18 2C21.315 2 24 4.6325 24 7.88C24 10.9835 22.05 12.812 18.9525 15.7205C17.163 17.4005 14.9895 19.442 12.588 22.292Z"
                      fill={isFavorite ? "#e44848" : "#101828"}
                    />
                  </svg>
                </button>
              </p>
            </div>
            <div className={css.wrapLocation}>
              <span className={css.raiting}>
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.55778 0.838169C7.74538 0.482595 8.25462 0.482596 8.44222 0.838169L10.3305 4.41705C10.4028 4.55417 10.5347 4.64997 10.6874 4.67641L14.6747 5.36629C15.0708 5.43484 15.2282 5.91915 14.948 6.20745L12.1277 9.10921C12.0197 9.22039 11.9693 9.3754 11.9914 9.52886L12.5674 13.5341C12.6246 13.932 12.2126 14.2314 11.8519 14.054L8.22062 12.2685C8.0815 12.2001 7.9185 12.2001 7.77938 12.2685L4.14815 14.054C3.78737 14.2314 3.37539 13.932 3.43262 13.5341L4.00861 9.52886C4.03068 9.3754 3.98031 9.22039 3.87226 9.10921L1.05204 6.20745C0.771841 5.91915 0.929206 5.43484 1.32535 5.36629L5.31256 4.67641C5.46533 4.64997 5.59719 4.55417 5.66954 4.41705L7.55778 0.838169Z"
                    fill="#FFC531"
                  />
                </svg>
                {data.rating}({data.reviews.length} Reviews)
              </span>
              <div className={css.boxLocation}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_12186_511)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.817 0.112823C15.8743 0.159759 15.9204 0.218822 15.952 0.285748C15.9837 0.352674 16 0.425792 16 0.499823V14.4998C15.9999 14.6154 15.9598 14.7273 15.8866 14.8167C15.8133 14.906 15.7113 14.9672 15.598 14.9898L10.598 15.9898C10.5333 16.0028 10.4667 16.0028 10.402 15.9898L5.5 15.0098L0.598 15.9898C0.525489 16.0043 0.450665 16.0025 0.378921 15.9846C0.307176 15.9667 0.240296 15.9331 0.183099 15.8863C0.125903 15.8394 0.0798134 15.7804 0.0481518 15.7136C0.0164902 15.6468 4.46527e-05 15.5738 0 15.4998L0 1.49982C6.9782e-05 1.38428 0.0401561 1.27232 0.113443 1.18299C0.186731 1.09366 0.288695 1.03247 0.402 1.00982L5.402 0.00982311C5.46669 -0.00310763 5.53331 -0.00310763 5.598 0.00982311L10.5 0.989823L15.402 0.00982311C15.4745 -0.00476108 15.5493 -0.00308756 15.6211 0.0147231C15.6928 0.0325338 15.7597 0.0660382 15.817 0.112823ZM10 1.90982L6 1.10982V14.0898L10 14.8898V1.90982ZM11 14.8898L15 14.0898V1.10982L11 1.90982V14.8898ZM5 14.0898V1.10982L1 1.90982V14.8898L5 14.0898Z"
                      fill="#101828"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12186_511">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className={css.location}>{data.location}</p>
              </div>
            </div>
            <p className={css.description}>{data.description}</p>
            <CategoriesList dataObj={data} />
          </div>
          <Link to={`${idCard}/features`} className={css.btnShowMore}>
            Show more
          </Link>
        </div>
      </div>
    </>
  );
};

export default TruckItem;

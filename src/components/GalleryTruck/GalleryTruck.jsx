import { nanoid } from "nanoid";
import css from "./gallerytruck.module.css";

const GalleryTruck = ({ data }) => {
  console.log(data);

  return (
    <>
      <section>
        <div className="container">
          <div className={css.titlePriceBox2}>
            <h2 className={css.title2}>{data?.name}</h2>
            <div className={css.wrapLocation2}>
              <span className={css.raiting2}>
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
                {data?.rating2}({data?.reviews?.length} Reviews)
              </span>
              <div className={css.boxLocation2}>
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
                <p className={css.location2}>{data?.location}</p>
              </div>
            </div>
            <p className={css.price2}>€{data?.price}</p>
          </div>
          <ul className={css.galleryListTruck}>
            {data?.gallery?.map((obj) => {
              return (
                <li key={nanoid()}>
                  <div className={css.boxImgGallery}>
                    <img src={obj.original} alt={obj.name} />
                  </div>
                </li>
              );
            })}
          </ul>
          <p className={css.descriptionDetail}>{data?.description}</p>
        </div>
      </section>

      <section></section>
    </>
  );
};

export default GalleryTruck;

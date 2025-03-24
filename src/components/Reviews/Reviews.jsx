import { useOutletContext } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./reviews.module.css";

const Reviews = () => {
  const truckObj = useOutletContext();

  return (
    <div className={css.reviewsWrapperPrimary}>
      <ul className={css.listReviews}>
        {truckObj?.reviews?.map((obj) => {
          return (
            <li key={nanoid()}>
              <div className={css.boxReviews}>
                <div className={css.wrapName}>
                  <div className={css.letterWrap}>
                    <p className={css.firstLetter}>
                      {obj?.reviewer_name.charAt(0)}
                    </p>
                  </div>
                  <div className={css.nameRaitingWrap}>
                    <p className={css.nameReviews}>{obj?.reviewer_name}</p>
                    <p className={css.raitingReviews}>
                      {"⭐".repeat(obj.reviewer_rating)}
                    </p>
                  </div>
                </div>
                <p className={css.commentReviews}>{obj?.comment}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;

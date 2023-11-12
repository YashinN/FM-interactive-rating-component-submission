import styles from "./RatingScreen.module.css";
import Star from "./svg/Star.svg";

const ratings = [1, 2, 3, 4, 5];

const RatingScreen = () => {
  return (
    <>
      <div className={styles.starWrapper}>
        <img src={Star} alt="Orange Star" />
      </div>
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.paragraph}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className={styles.ratingGroup}>
        {ratings.map((rating, index) => (
          <button className={styles.ratingBtn}>{index + 1}</button>
        ))}
      </div>

      <button className={styles.submitBtn}>submit</button>
    </>
  );
};

export default RatingScreen;

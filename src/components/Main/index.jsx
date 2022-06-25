import React from "react";
import styles from "./Main.module.css";
import MainCard from "../Cards/MainCard";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title__container}>
        <div className={styles.title}>
          <h1>Your gateway to Product Industry</h1>
        </div>
      </div>
      <div className={styles.card__container}>
        <div className={styles.card}>
          <MainCard />
        </div>
      </div>

      <img
        className={styles.arrow__top}
        src="https://res.cloudinary.com/iiitm/image/upload/v1656186620/drozee/Arrow_1_zrncu1.png"
        alt=""
      />
      <img
        className={styles.arrow__btm}
        src="https://res.cloudinary.com/iiitm/image/upload/v1656186620/drozee/Arrow_2_qsqjat.png"
        alt=""
      />
    </div>
  );
};

export default index;

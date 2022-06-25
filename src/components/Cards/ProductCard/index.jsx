import React from "react";
import styles from "./ProductCard.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <div className={styles.image}></div>
        <div className={styles.product__details}>
          <p className={styles.p1__title}>Product Design</p>
          <p className={styles.p2__desciption}>
            You’ll learn from the best in the design industry; join Dan Mall and
            the former hiring manager at Google, for live and interactive
            sessions.
          </p>
        </div>
        <div className={styles.insight}>
          <button>Insight</button>
        </div>
      </div>
    </div>
  );
};

export default index;

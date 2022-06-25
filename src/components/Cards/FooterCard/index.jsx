import React from "react";
import styles from "./FooterCard.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <p className={styles.p1__title}>Product Design</p>
      <p className={styles.p2__desciption}>
        You’ll learn from the best in the design industry; join Dan Mall and the
        former hiring manager at Google, for live and interactive sessions.
      </p>
    </div>
  );
};

export default index;

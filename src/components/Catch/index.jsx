import React from "react";
import styles from "./Catch.module.css";
const index = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.title}>
        <p>CATCH</p>
        <h1>One week In-house sponsered design camp in mountains</h1>
      </div>
      <div className={styles.catch__card}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
        <div className={styles.three}></div>
        <div className={styles.four}></div>
        <div className={styles.five}></div>
        <div className={styles.six}></div>
        <div className={styles.sev}></div>
        <div className={styles.eight}></div>
      </div>
    </div>
  );
};

export default index;

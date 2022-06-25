import React from "react";
import styles from "./Curriculum.module.css";
import CardLr from "../Cards/CurriculumCard/CardLr";
import CardSm from "../Cards/CurriculumCard/CardSm";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>CURRICULUM</p>
        <h1>Learn-by-doing with our extensive 12-week product design course</h1>
      </div>
      <div className={styles.cards}>
        <CardSm />
        <CardSm />
        <CardSm />
        <CardSm />
      </div>
      <div className={styles.grid}>
        <CardLr />
        <CardLr />
        <CardLr />
        <CardLr />
        <CardLr />
        <CardLr />
      </div>
      <div className={styles.action}>
        <p>Expend All</p>
      </div>
    </div>
  );
};

export default index;

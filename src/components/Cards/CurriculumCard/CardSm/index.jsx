import React from "react";
import styles from "./CardSm.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <p className={styles.p1__title}>Start your course</p>
      <p className={styles.p2__desciption}>
        Introduce yourself in the student Slack, meet your mentor, and get
        set-up by reviewing course material.
      </p>
    </div>
  );
};

export default index;

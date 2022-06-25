import React from "react";
import styles from "./CardLr.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner__container}>
        <div className={styles.title}>
          <p>Week One</p>
          <p className={styles.p2__title}>Getting Started</p>
        </div>

        <div className={styles.list}>
          <li>Breaking the ice and meeting your</li>
          <li> Getting to know your instructor </li>
          <li>Introduction to UX and UI design</li>
          <li> What is the design thinking process</li>
          <li> The double diamond approach</li>
        </div>
      </div>
    </div>
  );
};

export default index;

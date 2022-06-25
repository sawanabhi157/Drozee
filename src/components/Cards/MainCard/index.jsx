import React from "react";
import styles from "./MainCard.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p>
          A new kind of internet university – one that is focused on helping you
          build a network, learn new skills and build the right mindset.
        </p>
      </div>
      <div className={styles.button}>
        <button>Deep down into Courses</button>
      </div>
    </div>
  );
};

export default index;

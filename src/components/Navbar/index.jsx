import React from "react";
import styles from "./Navbar.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.nav__buttons}>
          <button className={styles.login}>Log In</button>
          <button className={styles.get__start}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default index;

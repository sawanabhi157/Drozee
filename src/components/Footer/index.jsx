import React from "react";
import styles from "./Footer.module.css";
import FooterCard from "../../components/Cards/FooterCard";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__top}>
        <p>WHAT’S INCLUDED</p>
        <h1 className={styles.h1__footer}>
          An immersive and interactive learning experience
        </h1>
      </div>
      <div className={styles.footer__btm}>
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
      </div>
    </div>
  );
};

export default index;

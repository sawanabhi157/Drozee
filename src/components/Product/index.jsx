import React from "react";
import styles from "./Product.module.css";
import ProductCard from "../../components/Cards/ProductCard";
const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>IN 12 WEEKS</p>
        <h1>Here is what you'll learn and become!</h1>
      </div>
      <div className={styles.grid__cards}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default index;

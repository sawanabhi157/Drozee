import React from "react";
import styles from "./Home.module.css";
import Catch from "../../components/Catch";
import Navbar from "../../components/Navbar";
import Curriculum from "../../components/Curriculum";
import Footer from "../../components/Footer";
import Product from "../../components/Product";
import Main from "../../components/Main";
const index = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main />
      <Product />
      <Curriculum />
      <Catch />
      <Footer />
    </div>
  );
};

export default index;

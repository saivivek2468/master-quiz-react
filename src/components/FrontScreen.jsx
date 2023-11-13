import React from "react";
import styles from "./FrontScreen.module.css";
import SubjectsScreen from "./SubjectsScreen";
import Layout from "../layout/Layout";
import { useGlobalContext } from "../context/context";

const FrontScreen = () => {
  return (
    <Layout isHeightFull={true}>
      <div className={styles.text}>
        <p className={styles.textHeading1}>Welcome to the</p>
        <p className={styles.textHeading2}>Frontend Quiz!</p>
        <p className={styles.textParagraph}>Pick a subject to get started</p>
      </div>
      <SubjectsScreen />
    </Layout>
  );
};

export default FrontScreen;

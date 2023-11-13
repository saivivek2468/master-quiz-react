import React from "react";
import { useGlobalContext } from "../context/context";
import styles from "./Header.module.css";

function Header() {
  const {
    quizData: { image, color, title },
  } = useGlobalContext();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerDetails}>
        <img src={image} style={{ backgroundColor: `${color}` }} />
        <p>{title}</p>
      </div>
      <div className={styles.modes}>Modes</div>
    </div>
  );
}

export default Header;

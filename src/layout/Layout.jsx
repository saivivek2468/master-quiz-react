import React from "react";
import styles from "./Layout.module.css";

function Layout({ children, isHeightFull }) {
  return (
    <div
      className={styles.container}
      style={{ height: isHeightFull ? "100vh" : "" }}
    >
      {children}
    </div>
  );
}

export default Layout;

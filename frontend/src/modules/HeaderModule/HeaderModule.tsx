import React from "react";
import styles from "./HeaderModule.module.scss";

export const HeaderModule = () => {
  return (
    <header className={styles.contentHeader}>
      <a className={styles.linkLogo} href="">
        <img className={styles.imageArrow} src="assets/logo.svg" alt="Blocks" />
      </a>
    </header>
  );
};

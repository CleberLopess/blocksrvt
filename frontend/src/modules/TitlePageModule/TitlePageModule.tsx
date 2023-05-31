import React from "react";
import styles from "./TitlePageModule.module.scss";

export const TitlePageModule = () => {
  return (
    <section className={styles.wrapper}>
      <article className={styles.article}>
        <span className={styles.label}>Catátogo</span>
      </article>
    </section>
  );
};

import React, { memo } from "react";
import styles from "./Card.module.scss";
import { CartComponentType } from "./Card.type";

export const Card = memo(function card({
  image,
  label,
  handleClickCard,
}: CartComponentType) {
  return (
    <div className={styles.contentCard} onClick={handleClickCard}>
      <div className={styles.contentImage}>
        <img
          className={styles.image}
          src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${image}.jpg`}
          alt="lustre"
        />
      </div>
      <div className={styles.contentFooter}>
        <span className={styles.label}>{label}</span>
        <div className={styles.contentLink}>
          <a className={styles.link} href="">
            <img
              className={styles.imageLink}
              src="assets/arrow-link.svg"
              alt="arrow-link"
            />
          </a>
        </div>
      </div>
    </div>
  );
});

import React, { memo } from "react";
import styles from "./Button.module.scss";
import { ButtonComponentType } from "./Button.type";

export const Button = memo(function button({
  handleClickButton,
  label,
}: ButtonComponentType) {
  return (
    <button className={styles.contentButton} onClick={handleClickButton}>
      <span className={styles.label}>{label}</span>
      <div className={styles.contentimage}>
        <img
          className={styles.imageArrow}
          src="assets/arrow-right.svg"
          alt="arrow-right"
        />
      </div>
    </button>
  );
});

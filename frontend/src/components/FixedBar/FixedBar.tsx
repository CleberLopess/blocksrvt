import { Button } from "components/Button/Button";
import React from "react";
import styles from "./FixedBar.module.scss";

export const FixedBar = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.contentFixedBar}>
        <button className={styles.closeButton}>
          <strong>Fechar</strong>
          <img
            className={styles.imageCloseButton}
            src="assets/close-button.svg"
            alt="close-button"
          />
        </button>
        <div className={styles.contentLabel}>
          <span className={styles.label}>
            Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
            <strong>BRL 19,99</strong>
          </span>
        </div>
        <Button handleClickButton={() => {}} label="Quero ser premiun" />
      </div>
    </section>
  );
};

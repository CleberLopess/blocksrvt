import React from "react";
import styles from "./FooterModule.module.scss";

export const FooterModule = () => {
  const dataMock = [
    {
      id: 1,
      label: "Sobre",
      link: "/sobre",
    },
    {
      id: 2,
      label: "FAQ",
      link: "/FAQ",
    },
    { id: 3, label: "Termos de uso", link: "/termos-de-uso" },
    {
      id: 4,
      label: "Politica de privacidade",
      link: "/Politica-de-privacidade",
    },
  ];

  return (
    <footer className={styles.contentFooter}>
      <article className={styles.contentArticle}>
        <ul className={styles.contentUl}>
          {dataMock.map((item) => (
            <li key={item.id} className={styles.contentLi}>
              <a className={styles.contentLink} href={item.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </footer>
  );
};

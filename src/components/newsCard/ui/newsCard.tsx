import type React from "react";
import styles from "./newsCard.module.css";

interface newsCardProps {
  imageSrc: string;
  title: string;
  text: string;
  date: string;
  url: string;
}

export const NewsCard: React.FC<newsCardProps> = ({ imageSrc, title, text, date, url }) => {
  return (
    <>
      <a href={url} target="_blank" className={styles.card}>
        <div className={styles.card_image_block}>
          <img src={imageSrc} alt="" className={styles.card_image} />
        </div>
        <div className={styles.card_content}>
          <h2 className={styles.card_title}>{title}</h2>
          <p className={styles.card_text}>{text}</p>
          <span className={styles.card_date}>{date}</span>
        </div>
      </a>
    </>
  );
};

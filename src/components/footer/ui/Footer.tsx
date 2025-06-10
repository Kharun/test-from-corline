import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  const links = [
    {
      title: "Log In",
      link: "",
    },
    {
      title: "About Us",
      link: "",
    },
    {
      title: "Publishers",
      link: "",
    },
    {
      title: "Sitemap",
      link: "",
    },
  ];

  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer_nav}>
          {links.map((item) => (
            <Link to={item.link} key={item.link} className={styles.footer_link}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className={styles.powered_by}>
          <p>Powered by</p>
          <img src="src/assets/footer_logo.png" alt="" />
        </div>
        <p className={styles.bottom_desc}>© 2023 Besider. Inspired by Insider</p>
      </div>
    </>
  );
};

import { Link } from "react-router-dom";
import { BurgerIcon, CloseIcon } from "../../../assets/icons";
import styles from "./Navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [showBurger, setShowBurger] = useState(false);

  const handleShowBurger = () => {
    setShowBurger((prev) => !prev);
  };

  const navLinks = [
    {
      title: "Science",
      link: "",
    },
    {
      title: "General",
      link: "",
    },
    {
      title: "Entertainment",
      link: "",
    },
    {
      title: "Technology",
      link: "",
    },
    {
      title: "Business",
      link: "",
    },
    {
      title: "Health",
      link: "",
    },
    {
      title: "Sports",
      link: "",
    },
  ];

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.burger} onClick={handleShowBurger}>
          <BurgerIcon />
        </div>

        <a href="#" className={styles.logo}>
          BESIDER
        </a>

        <div className={`${styles.burger_content} ${showBurger && styles.active}`}>
          <div className={styles.close} onClick={handleShowBurger}>
            <CloseIcon />
          </div>

          <nav className={styles.burger_links}>
            {navLinks.map((item, idx) => (
              <Link to={item.link} key={idx} className={styles.burger_link}>
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

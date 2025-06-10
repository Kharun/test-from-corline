import { Outlet } from "react-router-dom";
import { Navbar } from "../../navbar";
import styles from "./Layout.module.css";
import { Footer } from "../../footer";

export const Layout = () => {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

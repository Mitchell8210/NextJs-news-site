import React from "react";
import styles from "../styles/components/Layout.module.css";
import Header from "./Header";
const Layout = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        {children}
        <div>
          by{" "}
          <span className={styles.creator}>
            <a
              href="https://github.com/Mitchell8210"
              target="_blank"
              rel="noreferrer noopeener"
            >
              Mitchell R.
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Layout;

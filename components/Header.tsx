import React from "react";
import HeaderStyles from "../styles/components/Header.module.css";
const Header = () => {
  return (
    <div className={HeaderStyles.container}>
      <div className={HeaderStyles.title}>Daily News Source</div>
    </div>
  );
};

export default Header;

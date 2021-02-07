import React from "react";
import { Button } from "antd";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Button className={styles.btnContainer} type="text">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default Header;

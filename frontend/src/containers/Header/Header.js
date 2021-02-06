import React from "react";
import { Button } from "antd";
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <Button>Home</Button>
      <Button style={{ float: "right" }}>Add player</Button>
    </div>
  );
};

export default Header;

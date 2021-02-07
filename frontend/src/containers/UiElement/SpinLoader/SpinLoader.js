import React from "react";
import { Spin } from "antd";
import styles from "./SpinLoader.module.scss";

const SpinLoader = () => (
  <div className={styles.container}>
    <Spin />
  </div>
);

export default SpinLoader;

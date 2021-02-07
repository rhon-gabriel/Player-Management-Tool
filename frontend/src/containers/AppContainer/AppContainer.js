import React from "react";
import Players from "../Players/Players";
import Header from "../Header/Header";
import { Layout } from "antd";
import styles from "./AppContainer.module.scss";

const AppContainer = () => {
  return (
    <Layout className={"app"} style={{ height: "100vh" }}>
      <Layout.Header className={styles.header}>
        <Header />
      </Layout.Header>
      <Layout.Content className={styles.content}>
        <Players />
      </Layout.Content>
      <Layout.Footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/rhoneilgabriel/"
          className={styles.footerText}
        >
          Rhoneil Gabriel
        </a>
      </Layout.Footer>
    </Layout>
  );
};

export default AppContainer;

import React from "react";
import Players from "../Players/Players";
import Header from "../Header/Header";
import { Layout } from "antd";

const AppContainer = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Header
        style={{
          backgroundColor: "#203a43",
        }}
      >
        <Header />
      </Layout.Header>
      <Layout.Content style={{ height: "50%" }}>
        <Players />
      </Layout.Content>
      <Layout.Footer style={{ backgroundColor: "#134E5E" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/rhoneilgabriel/"
          style={{ color: "#73C8A9", float: "right" }}
        >
          Rhoneil Gabriel
        </a>
      </Layout.Footer>
    </Layout>
  );
};

export default AppContainer;

import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "antd";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <Row className={styles.container}>
      <Col span={24}>
        <Link to="/players">
          <div className={styles.btnContainer}>
            <Button type="text">start</Button>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux/actions";
import styles from "./Players.module.scss";
import { Row, Col, Button, Avatar, Alert } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import PlayerCard from "./PlayerCard/PlayerCard";
import SpinLoader from "../UiElement/SpinLoader/SpinLoader";
import Popup from "../UiElement/Popup/Popup";

const Players = () => {
  const { results, loading, error } = useSelector((state) => state.players);
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPlayers());
  }, []); // eslint-disable-line

  const onSelect = (player) => {
    setSelectedPlayer(player);
  };

  function confirm(e) {
    console.log(e);
  }

  return (
    <div className={styles.container}>
      <Row style={{ height: "100%" }}>
        {!isReady ? (
          <Col span={24}>
            {error && <Alert message="Something went wrong" type="error" />}
            <div className={styles.btnContainer}>
              <Button onClick={() => setIsReady(true)}>Ready to play?</Button>
            </div>
          </Col>
        ) : (
          <>
            <Col span={24}>
              {error && <Alert message="Something went wrong" type="error" />}
            </Col>
            <Col span={10}>
              {selectedPlayer && (
                <PlayerCard selectedPlayer={selectedPlayer} loading={loading} />
              )}
            </Col>
            <Col span={14} className={styles.selectPlayer}>
              <h1 className={styles.title}>Select a player</h1>
              <div className={styles.cardContainer}>
                {loading ? (
                  <SpinLoader />
                ) : (
                  results &&
                  results.map((player) => {
                    return (
                      <div key={player.id} className={styles.card}>
                        <Popup className={styles.close} onConfirm={confirm}>
                          <CloseCircleOutlined />
                        </Popup>
                        <div
                          className={styles.cardContent}
                          onClick={() => onSelect(player)}
                        >
                          <Avatar
                            className={styles.avatar}
                            size={70}
                            src={player.avatar}
                          />
                          <div className={styles.name}>{player.name}</div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};

export default Players;

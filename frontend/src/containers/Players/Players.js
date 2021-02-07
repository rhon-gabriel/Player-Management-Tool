import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./redux/actions";
import styles from "./Players.module.scss";
import { Row, Col, Alert } from "antd";
import { useHistory, useRouteMatch } from "react-router-dom";
import PlayerCard from "./PlayerCard/PlayerCard";
import PlayersList from "./PlayersList/PlayersList";
import AddPlayer from "./AddPlayer/AddPlayer";

const Players = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { results, player, loading, error } = useSelector(
    (state) => state.players
  );
  const history = useHistory();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const isPlayerSelected = (player) => {
    if(player == null) {
      history.push(`${url}`);
    }
  }

  useEffect(() => {
    dispatch(actions.getPlayers());
  }, []); // eslint-disable-line

  useEffect(() => {
    isPlayerSelected(player)
  }, [player]); // eslint-disable-line

  return (
    <div className={styles.container}>
      <Row className={styles.row}>
        {error && (
          <Col span={24}>
            <Alert message="Something went wrong" type="error" />
          </Col>
        )}
        <Col span={10}>{player && <PlayerCard />}</Col>
        <Col span={14} className={styles.selectPlayer}>
          <AddPlayer
            setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible}
          />
          <PlayersList
            results={results}
            loading={loading}
            showModal={showModal}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Players;

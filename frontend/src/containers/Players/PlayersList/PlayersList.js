import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import * as actions from "../redux/actions";
import styles from "./PlayersList.module.scss";
import { Avatar } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const PlayersList = ({ results, showModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { url } = useRouteMatch();

  const onSelect = (id) => {
    dispatch(actions.getPlayer(id));
    history.push(`${url}/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.listHeader}>
        <h1 className={styles.title}>Select a player</h1>
        <UserAddOutlined className={styles.addBtn} onClick={showModal} />
      </div>
      <div className={styles.cardContainer}>
        {results &&
          results.map((item) => {
            return (
              <div key={item.id} className={styles.card}>
                <div
                  className={styles.cardContent}
                  onClick={() => onSelect(item.id)}
                >
                  <Avatar
                    className={styles.avatar}
                    size={70}
                    src={item.avatar}
                  />
                  <div className={styles.name}>{item.name}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PlayersList;

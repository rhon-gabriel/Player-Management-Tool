import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import styles from "./PlayerCard.module.scss";
import { Form, Input, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import SpinLoader from "../../UiElement/SpinLoader/SpinLoader";
import Popup from "../../UiElement/Popup/Popup";

const PlayerCard = () => {
  const { player, loading } = useSelector((state) => state.players);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    player && form.resetFields();
  }, [player]); // eslint-disable-line

  const onFinish = (values) => {
    const id = player?.id;
    dispatch(actions.updatePlayer({ id, values }));
    setIsEditing(false);
  };

  const confirm = (id) => {
    dispatch(actions.deletePlayer(id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {loading ? (
          <SpinLoader />
        ) : (
          player && (
            <Form
              key={player.id}
              form={form}
              initialValues={player}
              onFinish={onFinish}
            >
              <div>
                <img
                  alt="avatar"
                  className={styles.avatar}
                  src={player.avatar}
                />
                <Form.Item name="name">
                  <Input className={styles.name} disabled={!isEditing}></Input>
                </Form.Item>
                <div className={styles.bottomContainer}>
                  <Popup
                    className={styles.delete}
                    onConfirm={() => confirm(player.id)}
                  >
                    <DeleteOutlined />
                  </Popup>
                  {!isEditing && (
                    <EditOutlined
                      className={styles.edit}
                      onClick={() => setIsEditing(true)}
                    />
                  )}
                  {isEditing && (
                    <div>
                      <Button
                        ghost
                        style={{ marginRight: 8 }}
                        className={styles.buttonCancel}
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        ghost
                        style={{ border: "1px solid #4286f4" }}
                        className={styles.buttonSubmit}
                        htmlType="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Form>
          )
        )}
      </div>
    </div>
  );
};

export default PlayerCard;

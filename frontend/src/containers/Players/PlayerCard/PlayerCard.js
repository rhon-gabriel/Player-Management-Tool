import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions";
import styles from "./PlayerCard.module.scss";
import { Form, Input, Button, Dropdown } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import SpinLoader from "../../UiElement/SpinLoader/SpinLoader";
import Popup from "../../UiElement/Popup/Popup";

const PlayerCard = ({ selectedPlayer, loading }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    selectedPlayer && form.resetFields();
  }, [selectedPlayer]); // eslint-disable-line

  const onFinish = (values) => {
    const id = selectedPlayer?.id;
    dispatch(actions.updatePlayer({ id, values }));
    setIsEditing(false);
  };

  function confirm(e) {
    console.log(e);
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {loading ? (
          <SpinLoader />
        ) : (
          selectedPlayer && (
            <Form
              key={selectedPlayer.id}
              form={form}
              initialValues={selectedPlayer}
              onFinish={onFinish}
            >
              <div>
                <Dropdown
                  placement="topCenter"
                  overlay={<Button>See more</Button>}
                >
                  <EllipsisOutlined
                    className={styles.ellipsisIcon}
                    key="ellipsis"
                  />
                </Dropdown>
                <img
                  alt="avatar"
                  className={styles.avatar}
                  src={selectedPlayer.avatar}
                />
                <Form.Item name="name">
                  <Input className={styles.name} disabled={!isEditing}></Input>
                </Form.Item>
                <div className={styles.bottomContainer}>
                  <Popup className={styles.delete} onConfirm={confirm}>
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

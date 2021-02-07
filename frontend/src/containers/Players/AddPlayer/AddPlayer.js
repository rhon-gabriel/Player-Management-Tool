import React, { useEffect } from "react";
import { Modal, Form, Button, Input } from "antd";
import { useDispatch } from "react-redux";
import * as actions from "../../Players/redux/actions";
import styles from "./AddPlayer.module.scss";

const AddPlayer = ({ isModalVisible, setIsModalVisible }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    form.resetFields();
  }, [isModalVisible]); // eslint-disable-line

  const onFinish = (values) => {
    dispatch(actions.addPlayer(values));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <Modal
        className="modal"
        title="New player"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please add a player name",
              },
            ]}
          >
            <Input
              className={styles.name}
              allowClear
              placeholder="Player Name"
            ></Input>
          </Form.Item>
          <div className={styles.bottomContainer}>
            <Button
              style={{ marginRight: 8 }}
              className={styles.buttonCancel}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              style={{ border: "1px solid #4286f4" }}
              className={styles.buttonSubmit}
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddPlayer;

import { Popconfirm } from "antd";

const Popup = (props) => (
  <Popconfirm
    {...props}
    title="Are you sure to delete this player?"
    okText="Yes"
    cancelText="No"
  >
    <div>{props.children}</div>
  </Popconfirm>
);

export default Popup;

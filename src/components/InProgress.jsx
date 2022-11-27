import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import ListModal from "./Modal.jsx";

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};
const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

export default function InProgress() {
  return (
    <div className="drop-down">
      <Dropdown
        menu={{
          items,
          onClick,
        }}
      >
        <a onClick={(e) => e.preventDefault}>
          <Space className="dropdown-title">
            In progress
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
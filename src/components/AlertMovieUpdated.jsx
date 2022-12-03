import { Alert, Space } from "antd";

export default function AlertMovieUpdated() {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Alert
        message="Success!"
        description="Your movie watch status has been updated to: In Progress"
        type="success"
        showIcon
      />
    </Space>
  );
}

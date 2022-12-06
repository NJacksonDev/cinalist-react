import { Alert, Space } from "antd";

export default function AlertMovieWatchStatusUpdated({
  showAlert,
  setShowAlert,
}) {
  console.log("should show alert");
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Alert
        message="Success!"
        description="Your movie watch status has been updated."
        type="success"
        showIcon
        closable
        onClose={() => {
          setShowAlert(!showAlert);
        }}
      />
    </Space>
  );
}

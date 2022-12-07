import { Alert, Space } from "antd";

export default function AlertMovieWatchStatusUpdated({
  showAlertUpdated,
  setShowAlertUpdated,
}) {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Alert
        className="alert-movie-updated"
        message="Success!"
        description="Your movie watch status has been updated."
        type="success"
        showIcon
        closable
        onClose={() => {
          setShowAlertUpdated(!showAlertUpdated);
        }}
      />
    </Space>
  );
}

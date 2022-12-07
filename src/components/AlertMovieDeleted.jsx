import { Alert, Space } from "antd";

export default function AlertMovieWatchStatusDeleted({
  showAlertDeleted,
  setShowAlertDeleted,
}) {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Alert
        className="alert-movie-deleted"
        message="Success!"
        description="Your movie has been removed from your list."
        type="success"
        showIcon
        closable
        onClose={() => {
          setShowAlertDeleted(!showAlertDeleted);
        }}
      />
    </Space>
  );
}

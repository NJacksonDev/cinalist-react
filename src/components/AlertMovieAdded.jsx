import { Alert, Space } from "antd";

export default function AlertMovieWatchStatusAdded({
  showAlertAdded,
  setShowAlertAdded,
}) {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Alert
        className="alert-movie-added"
        message="Success!"
        description="This movie has been added to your list."
        type="success"
        showIcon
        closable
        onClose={() => {
          setShowAlertAdded(!showAlertAdded);
        }}
      />
    </Space>
  );
}

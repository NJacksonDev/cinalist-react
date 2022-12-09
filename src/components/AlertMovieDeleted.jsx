import { Alert, Space } from "antd";

export default function AlertMovieWatchStatusDeleted({
  showAlertDeleted,
  setShowAlertDeleted,
}) {
  return (
    <Alert
      className="alert-movie"
      message="Success!"
      description="Your movie has been removed from your list."
      type="success"
      showIcon
      closable
      onClose={() => {
        setShowAlertDeleted(!showAlertDeleted);
      }}
    />
  );
}

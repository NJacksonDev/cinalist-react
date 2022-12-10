import { Alert } from "antd";

export default function AlertMovieWatchStatusUpdated({
  showAlertUpdated,
  setShowAlertUpdated,
}) {
  return (
    <Alert
      className="alert-movie"
      message="Success!"
      description="Your movie watch status has been updated."
      type="success"
      showIcon
      closable
      onClose={() => {
        setShowAlertUpdated(!showAlertUpdated);
      }}
    />
  );
}

import { Alert } from "antd";

export default function AlertMovieWatchStatusAdded({
  showAlertAdded,
  setShowAlertAdded,
}) {
  return (
    <Alert
      className="alert-movie"
      message="Success!"
      description="This movie has been added to your list."
      type="success"
      showIcon
      closable
      onClose={() => {
        setShowAlertAdded(!showAlertAdded);
      }}
    />
  );
}

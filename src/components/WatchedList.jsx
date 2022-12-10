import { Avatar, List, Button } from "antd";
import { useState, useEffect } from "react";

export default function WatchedList({
  user,
  setIsUpdated,
  isUpdated,
  showAlertUpdated,
  showAlertDeleted,
  setShowAlertDeleted,
}) {
  const [watchedListResults, setWatchedListResults] = useState();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_ENDPOINT}/usersavedmovies/watched/${user.uid}`
    )
      .then((results) => results.json())
      .then((data) => setWatchedListResults(data))
      .catch(alert);
  }, [showAlertUpdated, isUpdated, showAlertDeleted]);

  const handleClickChangeMovieStatusToDeleted = (item_id) => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/usersavedmovies`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: item_id, uid: user.uid }),
    })
      .then(() => {
        setShowAlertDeleted(!showAlertDeleted);
        setIsUpdated(!isUpdated);
      })
      .catch(alert);
  };

  return (
    <>
      <List
        className="watched-list"
        itemLayout="vertical"
        header={<h2>Watched List</h2>}
        dataSource={watchedListResults}
        renderItem={(item) => (
          <List.Item
            className="watched-list-meta"
            actions={[
              <Button
                type="primary"
                size="small"
                className="list-button"
                style={{ marginLeft: "150px" }}
                onClick={() => handleClickChangeMovieStatusToDeleted(item._id)}
              >
                Remove Movie
              </Button>,
            ]}
          >
            <List.Item.Meta
              className="watched-list-item-meta"
              avatar={<Avatar src={item.poster} size={110} shape="square" />}
              title={<h3>{item.title}</h3>}
              description={item.year}
            />
          </List.Item>
        )}
      />
    </>
  );
}

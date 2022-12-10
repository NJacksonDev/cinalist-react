import { Avatar, Button, List } from "antd";
import { useState, useEffect } from "react";

export default function InProgressList({
  user,
  setIsUpdated,
  isUpdated,
  showAlertUpdated,
  setShowAlertUpdated,
  showAlertDeleted,
  setShowAlertDeleted,
}) {
  const [inProgressListResults, setInProgressListResults] = useState();

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_ENDPOINT}/usersavedmovies/inprogress/${user.uid}`
    )
      .then((results) => results.json())
      .then((data) => {
        setInProgressListResults(data);
      })
      .catch(alert);
  }, [showAlertUpdated, isUpdated, showAlertDeleted]);

  const handleClickChangeMovieStatusToWatched = (item_id) => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/usersavedmovies/inprogress`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: item_id, uid: user.uid }),
    })
      .then(() => {
        setShowAlertUpdated(!showAlertUpdated);
        setIsUpdated(!isUpdated);
      })
      .catch(alert);
  };

  const handleClickChangeMovieStatusToDeleted = (item_id) => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/usersavedmovies`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: item_id, uid: user.uid }),
    })
      .then(() => {
        setIsUpdated(!isUpdated);
        setShowAlertDeleted(!showAlertDeleted);
      })
      .catch(alert);
  };

  return (
    <>
      <List
        className="inprogress-list"
        itemLayout="vertical"
        bordered
        header={<h2>In Progress List</h2>}
        dataSource={inProgressListResults}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                size="small"
                className="list-button"
                onClick={() => handleClickChangeMovieStatusToWatched(item._id)}
              >
                Add to: Watched
              </Button>,
              <Button
                type="primary"
                size="small"
                className="list-button"
                onClick={() => handleClickChangeMovieStatusToDeleted(item._id)}
              >
                Remove Movie
              </Button>,
            ]}
          >
            <List.Item.Meta
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

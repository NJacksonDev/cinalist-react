import { Avatar, Button, List } from "antd";
import { useState, useEffect } from "react";
import AlertMovieWatchStatusUpdated from "./AlertMovieUpdated";
import AlertMovieWatchStatusDeleted from "./AlertMovieDeleted";

export default function ToWatchList({
  user,
  setIsUpdated,
  isUpdated,
  showAlertUpdated,
  setShowAlertUpdated,
  showAlertDeleted,
  setShowAlertDeleted,
}) {
  const [toWatchListResults, setToWatchListResults] = useState();

  useEffect(() => {
    fetch(`http://localhost:5002/usersavedmovies/towatch`)
      .then((results) => results.json())
      .then((data) => setToWatchListResults(data))
      .catch(alert);
  }, [showAlertUpdated, isUpdated, showAlertDeleted]);

  // http://localhost:5002/usersavedmovies/towatch
  // https://practice-cloud-api-nj.web.app/usersavedmovies/towatch

  const handleClickChangeMovieStatusToInProgress = (item_id) => {
    fetch(`http://localhost:5002/usersavedmovies/towatch/movetoinprogress`, {
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

  const handleClickChangeMovieStatusToWatched = (item_id) => {
    fetch(`http://localhost:5002/usersavedmovies/towatch/movetowatched`, {
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
    fetch(`http://localhost:5002/usersavedmovies`, {
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
      <div>
        {showAlertUpdated && (
          <AlertMovieWatchStatusUpdated
            showAlertUpdated={showAlertUpdated}
            setShowAlertUpdated={setShowAlertUpdated}
          />
        )}
      </div>
      {showAlertDeleted && (
        <AlertMovieWatchStatusDeleted
          showAlertDeleted={showAlertDeleted}
          setShowAlertDeleted={setShowAlertDeleted}
        />
      )}
      <br />
      <List
        className="towatch-list"
        itemLayout="vertical"
        bordered
        header={<h2>To Watch List</h2>}
        dataSource={toWatchListResults}
        renderItem={(item) => (
          <List.Item
            className="to-watch-list-meta"
            actions={[
              <Button
                type="primary"
                size="small"
                onClick={() =>
                  handleClickChangeMovieStatusToInProgress(item._id)
                }
              >
                Add to: In Progress
              </Button>,
              <Button
                type="primary"
                size="small"
                onClick={() => handleClickChangeMovieStatusToWatched(item._id)}
              >
                Add to: Watched
              </Button>,
              <Button
                type="primary"
                size="small"
                onClick={() => handleClickChangeMovieStatusToDeleted(item._id)}
              >
                Remove Movie
              </Button>,
            ]}
          >
            <List.Item.Meta
              className="to-watch-meta"
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

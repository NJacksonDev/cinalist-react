import { Avatar, Button, List } from "antd";
import { useState, useEffect } from "react";
import AlertMovieWatchStatusUpdated from "./AlertMovieUpdated";
import AlertMovieWatchStatusDeleted from "./AlertMovieDeleted";

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
    fetch(`${process.env.REACT_APP_ENDPOINT}/usersavedmovies/inprogress`)
      .then((results) => results.json())
      .then((data) => {
        setInProgressListResults(data);
      })
      .catch(alert);
  }, [showAlertUpdated, isUpdated, showAlertDeleted]);

  // http://localhost:5002/usersavedmovies/inprogress
  // https://practice-cloud-api-nj.web.app/usersavedmovies/inprogress

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

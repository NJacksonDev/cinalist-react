import { Avatar, Button, List } from "antd";
import { useState, useEffect } from "react";

export default function InProgressList({ user, isUpdated, setIsUpdated }) {
  const [inProgressListResults, setInProgressListResults] = useState();

  useEffect(() => {
    fetch(`http://localhost:5002/usersavedmovies/inprogress`)
      .then((results) => results.json())
      .then((data) => {
        setInProgressListResults(data);
        setIsUpdated(!isUpdated);
      })
      .catch(alert);
  }, [isUpdated]);

  // http://localhost:5002/usersavedmovies/inprogress
  // https://practice-cloud-api-nj.web.app/usersavedmovies/inprogress

  const handleClickChangeMovieStatusToWatched = (item_id) => {
    fetch(`http://localhost:5002/usersavedmovies/inprogress`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: item_id, uid: user.uid }),
    })
      .then(() => alert("movie updated to watched"))
      .catch(alert);
  };

  const handleClickChangeMovieStatusToDeleted = (item_id) => {
    fetch(`http://localhost:5002/usersavedmovies`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: item_id, uid: user.uid }),
    })
      .then(() => alert("movie removed from list"))
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

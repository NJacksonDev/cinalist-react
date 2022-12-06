import { Avatar, List, Button, Space } from "antd";
import { useState, useEffect } from "react";

export default function WatchedList({ user }) {
  const [watchedListResults, setWatchedListResults] = useState();

  useEffect(() => {
    fetch(`http://localhost:5002/usersavedmovies/watched`)
      .then((results) => results.json())
      .then((data) => setWatchedListResults(data))
      .catch(alert);
  }, []);

  // http://localhost:5002/usersavedmovies/watched
  // https://practice-cloud-api-nj.web.app/usersavedmovies/watched

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
        className="watched-list"
        itemLayout="vertical"
        header={<h2>Watched List</h2>}
        dataSource={watchedListResults}
        renderItem={(item) => (
          <List.Item
            className="watch-list-meta"
            actions={[
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

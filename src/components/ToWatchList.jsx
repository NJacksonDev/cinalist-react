import { Avatar, Button, List } from "antd";

export default function ToWatchList({ toWatchSearchResults, user }) {
  const handleClickChangeMovieStatus = (item_id) => {
    fetch(`http://localhost:5002/usersavedmovies/towatch`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: item_id, uid: user.uid }),
    })
      .then(() => alert("Your movie is updated."))
      .catch(alert);
  };

  return (
    <List
      className="search-list"
      itemLayout="horizontal"
      dataSource={toWatchSearchResults}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              type="primary"
              size="small"
              onClick={() => handleClickChangeMovieStatus(item._id)}
            >
              Add to: In Progress
            </Button>,
            <Button
              type="primary"
              size="small"
              //   onClick={() => handleAddMovie(item, "in progress")}
            >
              Add to: Watched
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
  );
}

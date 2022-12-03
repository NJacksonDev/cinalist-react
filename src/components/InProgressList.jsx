import { Avatar, Button, List } from "antd";
import AlertMovieUpdated from "./AlertMovieUpdated.jsx";

export default function InProgressList({ inProgressSearchResults, user }) {
  const handleClickChangeMovieStatusWatched = (item_id) => {
    fetch(`http://localhost:5002/usersavedmovies/towatch`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: item_id, uid: user.uid }),
    })
      .then(() => alert("movie updated to watched"))
      .catch(alert);
  };

  return (
    <List
      className="search-list"
      itemLayout="horizontal"
      dataSource={inProgressSearchResults}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              type="primary"
              size="small"
              onClick={() => handleClickChangeMovieStatusWatched(item._id)}
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

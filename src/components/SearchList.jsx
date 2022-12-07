import { Avatar, Button, List } from "antd";

export default function SearchList({
  searchResults,
  user,
  setIsUpdated,
  isUpdated,
  setShowAlert,
  showAlert,
}) {
  const handleAddMovie = (item, status) => {
    fetch(`http://localhost:5002/usersavedmovies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...item, status: status, uid: user.uid }),
    })
      .then(() => {
        setShowAlert(!showAlert);
        setIsUpdated(!isUpdated);
      })
      .catch(alert);
  };

  return (
    <List
      className="search-list"
      itemLayout="horizontal"
      dataSource={searchResults}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              type="primary"
              size="small"
              onClick={() => handleAddMovie(item, "to watch")}
            >
              Add to: To Watch
            </Button>,
            <Button
              type="primary"
              size="small"
              onClick={() => handleAddMovie(item, "in progress")}
            >
              Add to: In Progress
            </Button>,
            <Button
              type="primary"
              size="small"
              onClick={() => handleAddMovie(item, "watched")}
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

import { Avatar, Button, List } from "antd";
import AlertMovieWatchStatusAdded from "./AlertMovieAdded";

export default function SearchList({
  searchResults,
  user,
  setIsUpdated,
  isUpdated,
  showAlertAdded,
  setShowAlertAdded,
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
        setShowAlertAdded(!showAlertAdded);
        setIsUpdated(!isUpdated);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        {showAlertAdded && (
          <AlertMovieWatchStatusAdded
            showAlertAdded={showAlertAdded}
            setShowAlertAdded={setShowAlertAdded}
          />
        )}
      </div>
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
    </>
  );
}

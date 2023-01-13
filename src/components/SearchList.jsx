import { Avatar, Button, List } from "antd";
import AlertMovieWatchStatusAdded from "./AlertMovieAdded";
import "./SearchList.css";

export default function SearchList({
  searchResults,
  user,
  setIsUpdated,
  isUpdated,
  showAlertAdded,
  setShowAlertAdded,
}) {
  const handleAddMovie = (item, status) => {
    fetch(`${process.env.REACT_APP_ENDPOINT}/usersavedmovies`, {
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
                className="list-button"
                onClick={() => handleAddMovie(item, "to watch")}
              >
                Add to: To Watch
              </Button>,
              <Button
                type="primary"
                size="small"
                className="list-button"
                onClick={() => handleAddMovie(item, "in progress")}
              >
                Add to: In Progress
              </Button>,
              <Button
                type="primary"
                size="small"
                className="list-button"
                onClick={() => handleAddMovie(item, "watched")}
              >
                Add to: Watched
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.poster} size={110} shape="square" />}
              title={<h3>{item.title}</h3>}
              description={<h5>{item.year}</h5>}
            />
          </List.Item>
        )}
      />
    </>
  );
}

import { Avatar, Button, List } from "antd";

export default function ToWatchList({ toWatchSearchResults }) {
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
              //   onClick={() => handleAddMovie(item, "to watch")}
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
            <Button
              type="primary"
              size="small"
              //   onClick={() => handleAddMovie(item, "watched")}
            >
              Remove Movie from List
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

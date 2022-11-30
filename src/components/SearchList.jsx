import { Avatar, Button, List } from "antd";

export default function SearchList({ input }) {
  return (
    <List
      className="search-list"
      itemLayout="horizontal"
      dataSource={input}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button type="primary" size="small">
              Add to: Watched
            </Button>,
            <Button type="primary" size="small">
              Add to: In Progress
            </Button>,
            <Button type="primary" size="small">
              Add to: To Watch
            </Button>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.poster} size={110} shape="square" />}
            title={<h3 href="https://ant.design">{item.title}</h3>}
            description={item.year}
          />
        </List.Item>
      )}
    />
  );
}

import { Avatar, Button, List, Skeleton } from "antd";

export default function SearchList({ input }) {
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={input}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key="list-loadmore-edit">edit</a>,
            <a key="list-loadmore-more">more</a>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.poster} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.year}
          />
          {/* <Skeleton avatar title={false} loading={item.loading} active>
            <div>content</div>
          </Skeleton> */}
        </List.Item>
      )}
    />
  );
}

import { Avatar, Button, List, Space } from "antd";
import ToWatchList from "./ToWatchList";
import { useState } from "react";

export default function ToWatchButton({ user }) {
  const [toWatchSearchResults, setToWatchSearchResults] = useState();

  const handleClick = () => {
    fetch(`http://localhost:5002/usersavedmovies`)
      .then((results) => results.json())
      .then((data) => setToWatchSearchResults(data))
      .catch(alert);

    console.log(toWatchSearchResults);
  };

  // http://localhost:5002/usersavedmovies
  // https://practice-cloud-api-nj.web.app/usersavedmovies

  return (
    <Space wrap>
      <Button onClick={handleClick} type="primary">
        To Watch Button
        <ToWatchList user={user} toWatchSearchResults={toWatchSearchResults} />
      </Button>
    </Space>
  );
}

// export default function ToWatchList() {
//   return (
//     <List
//       className="search-list"
//       itemLayout="horizontal"
//       dataSource={input}
//       renderItem={(item) => (
//         <List.Item
//           actions={[
//             <Button
//               type="primary"
//               size="small"
//               onClick={() => handleAddMovie(item, "to watch")}
//             >
//               Add to: To Watch
//             </Button>,
//             <Button
//               type="primary"
//               size="small"
//               onClick={() => handleAddMovie(item, "in progress")}
//             >
//               Add to: In Progress
//             </Button>,
//             <Button
//               type="primary"
//               size="small"
//               onClick={() => handleAddMovie(item, "watched")}
//             >
//               Add to: Watched
//             </Button>,
//           ]}
//         >
//           <List.Item.Meta
//             avatar={<Avatar src={item.poster} size={110} shape="square" />}
//             title={<h3>{item.title}</h3>}
//             description={item.year}
//           />
//         </List.Item>
//       )}
//     />
//   );
// }

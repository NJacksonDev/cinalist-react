import { Avatar, Button, List, Space } from "antd";
import ToWatchList from "./ToWatchList";
import { useState } from "react";

export default function ToWatchButton({ user }) {
  const [toWatchSearchResults, setToWatchSearchResults] = useState();

  const handleClick = () => {
    fetch(`http://localhost:5002/usersavedmovies/towatch`)
      .then((results) => results.json())
      .then((data) => setToWatchSearchResults(data))
      .catch(alert);

    console.log(toWatchSearchResults);
  };

  // http://localhost:5002/usersavedmovies/towatch
  // https://practice-cloud-api-nj.web.app/usersavedmovies/towatch

  return (
    <Space wrap>
      <Button onClick={handleClick} type="primary">
        To Watch Button
        <ToWatchList user={user} toWatchSearchResults={toWatchSearchResults} />
      </Button>
    </Space>
  );
}

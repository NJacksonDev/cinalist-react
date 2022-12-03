import { Button, Space } from "antd";
import InProgressList from "./InProgressList";
import { useState } from "react";

export default function InProgressButton({ user }) {
  const [inProgressSearchResults, setInProgressSearchResults] = useState();

  const handleClick = () => {
    fetch(`http://localhost:5002/usersavedmovies/inprogress`)
      .then((results) => results.json())
      .then((data) => setInProgressSearchResults(data))
      .catch(alert);

    console.log(inProgressSearchResults);
  };

  // http://localhost:5002/usersavedmovies/inprogress
  // https://practice-cloud-api-nj.web.app/usersavedmovies/inprogress

  return (
    <Space wrap>
      <Button onClick={handleClick} type="primary">
        In Progress Button
      </Button>
      <InProgressList
        user={user}
        inProgressSearchResults={inProgressSearchResults}
      />
    </Space>
  );
}

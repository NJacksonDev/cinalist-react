import { Input, Space } from "antd";
import { useState } from "react";
const { Search } = Input;

export default function SearchBar() {
  const [input, setInput] = useState();

  function onSearch(value) {
    fetch(`http://localhost:3030/movies?term=${value}`)
      .then((results) => results.json())
      .then((data) => setInput(data))
      .catch(alert);

    console.log(input);
  }

  return (
    <Space direction="vertical">
      <Search
        placeholder="search movies"
        allowClear={true}
        clear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        style={{
          width: 1000,
        }}
      />
    </Space>
  );
}

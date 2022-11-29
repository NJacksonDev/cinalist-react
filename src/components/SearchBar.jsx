import { Input, Space } from "antd";
import { useState } from "react";
import SearchList from "./SearchList";
const { Search } = Input;

export default function SearchBar() {
  const [input, setInput] = useState();

  function onSearch(value) {
    if (!value) {
      setInput(null);
      return;
    }
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
      {input && <SearchList input={input} />}
    </Space>
  );
}

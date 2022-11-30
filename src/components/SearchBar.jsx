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
    fetch(`http://localhost:5002/movies?term=${value}`)
      .then((results) => results.json())
      .then((data) => setInput(data))
      .catch(alert);

    console.log(input);
    // http://127.0.0.1:5002/movies
    // http://localhost:3030/movies?term=${value}
    // https://practice-cloud-api-nj.web.app/movies?term=${value}
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

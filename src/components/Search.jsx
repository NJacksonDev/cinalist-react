import { useState } from "react";
import { Input } from "antd";
const { Search } = Input;

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div>
      <div className="search-text">Search for a movie below.</div>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        loading
        className="search-bar"
      />
    </div>
  );
}

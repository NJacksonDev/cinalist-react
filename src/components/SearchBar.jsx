import { Input, Space } from "antd";
import { useState } from "react";
import SearchList from "./SearchList";
const { Search } = Input;

export default function SearchBar({
  user,
  isUpdated,
  setIsUpdated,
  showAlertAdded,
  setShowAlertAdded,
}) {
  const [searchResults, setSearchResults] = useState();

  function onSearch(value) {
    if (!value) {
      setSearchResults(null);
      return;
    }
    fetch(`${process.env.REACT_APP_ENDPOINT}/movies?term=${value}`)
      .then((results) => results.json())
      .then((data) => setSearchResults(data))
      .catch(alert);
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
      {searchResults && (
        <SearchList
          user={user}
          searchResults={searchResults}
          setIsUpdated={setIsUpdated}
          isUpdated={isUpdated}
          setShowAlertAdded={setShowAlertAdded}
          showAlertAdded={showAlertAdded}
        />
      )}
    </Space>
  );
}

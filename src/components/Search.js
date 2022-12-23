import React from "react";

function Search({onSearch,onChangeSearch}) {



  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Search by name..."
        value={onSearch}
        onChange={(e) => onChangeSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;

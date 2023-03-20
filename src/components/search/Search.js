import React from "react";
import './Search.css'

function Search({onSearch,onChangeSearch}) {



  return (
    <div className="searchbar">
      <label htmlFor="search">Search Product:</label>
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

// components/Search.js
import React from 'react';

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search plants by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default Search;
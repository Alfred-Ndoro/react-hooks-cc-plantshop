// components/Search.js
import React from 'react';

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Type a name to search..." // Exact placeholder the test expects
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
        data-testid="search-input"
      />
    </div>
  );
}

export default Search;
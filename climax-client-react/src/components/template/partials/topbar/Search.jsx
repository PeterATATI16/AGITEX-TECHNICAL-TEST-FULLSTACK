import React from "react";

function Search() {
  return (
    <div className="iq-search-bar">
      <form action="#" className="searchbox">
        <input
          type="text"
          className="text search-input bg-white"
          placeholder="Rechercher sur climax..."
        />
        <a className="search-link" href="#">
          <i className="ri-search-line" />
        </a>
      </form>
    </div>
  );
}

export default Search;

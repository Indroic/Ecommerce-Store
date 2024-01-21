import React from "react";

export const SearchComponent = () => {
    

  return (
    <form>
      <div className="search-input">
        <input type="text" 
        name="searchText" 
        id=""
        placeholder="Avatar, Napoleon, Black Friday..." />
        <button>Search</button>
      </div>

      <div className="Search-Filters">
        

      </div>
    </form>
  );
};

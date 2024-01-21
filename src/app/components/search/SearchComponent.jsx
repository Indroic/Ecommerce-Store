import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export const SearchComponent = () => {
    
  const {search, setSearch} = useContext(SearchContext);

  const onInputChange = ({target})=>{
    const {name, value, type} = target;
    setSearch(prevState => ({
      ...prevState,
      [name]: [value]
    }))
  }

  return (
    <form>
      <div className="search-input">
        <input type="text" 
        name="searchText" 
        id=""
        placeholder="Avatar, Napoleon, Black Friday..."
        onChange={onInputChange}
        />
        <button>Search</button>
      </div>

      <div className="Search-Filters">
        

      </div>
    </form>
  );
};

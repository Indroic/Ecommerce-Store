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

  const onFormSubmit = (event)=>{
    event.preventDefault();
    onInputChange(event);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className="search-input">
        <input className={Boolean(search.errorMessage) ? "border-error" : null} type="text" 
        name="searchText" 
        id=""
        placeholder="Avatar, Napoleon, Black Friday..."
        onChange={onInputChange}
        />
        <button>Search</button>

        {
          Boolean(search.errorMessage) ? <p className={Boolean(search.errorMessage) ?`text-error`: "valid-text" }>{search.errorMessage}</p> : null
        }
      </div>

      <div className="Search-Filters">
        

      </div>
    </form>
  );
};

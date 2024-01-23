import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export const SearchComponent = () => {
    
  const {search, setSearch} = useContext(SearchContext);

  const onInputChange = ({target})=>{
    const {name, value, type} = target;
/*     console.log(name, value, type)
 */    setSearch(prevState => ({
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

       
      </div>
      {
          Boolean(search.errorMessage) ? <p className={Boolean(search.errorMessage) ?`text-error`: "valid-text" }>{search.errorMessage}</p> : null
        }
      <div className="search-filters">
        
        <select onChange={onInputChange} name="selectedYear" id=""
        value={search.selectedYear}
        >
          {
            search.years.map(year => 
              (<option onChange={onInputChange}  value={year} key={`${year}-${Math.random()}`}>{year[0].toUpperCase()+year.substring(1,year.length)}</option>))
          }
        </select>

        <select onChange={onInputChange} name="selectedCategory" id="" value={search.selectedCategory}>
          {
            search.categories.map(category => 
              (<option value={category} key={`${category}-${Math.random()}`} >{category[0].toUpperCase()+category.substring(1,category.length)}</option>))
          }
        </select>

      </div>
    </form>
  );
};

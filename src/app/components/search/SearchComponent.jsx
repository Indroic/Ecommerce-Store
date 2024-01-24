import React, { useContext, useId } from "react";
import { SearchContext } from "../../context/SearchContext";
import { FavsContext, FavsProvider } from "../../context/FavsProvider";
import { BiHeartCircle, BiNoEntry } from "react-icons/bi";

export const SearchComponent = () => {
  const { search, setSearch } = useContext(SearchContext);

  const { favorites, REMOVE_FROM_FAVORITE } = useContext(FavsContext);

  const allFavoriteIcons = useId();

  const onInputChange = ({ target }) => {
    const { name, value, type } = target;
    /*     console.log(name, value, type)
     */ setSearch((prevState) => ({
      ...prevState,
      [name]: [value],
    }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onInputChange(event);
  };

  return (
    <form className="display-search" onSubmit={onFormSubmit}>
      <div className="search-input">
        <input
          className={Boolean(search.errorMessage) ? "border-error" : null}
          type="text"
          name="searchText"
          id=""
          placeholder="Avatar, Napoleon, Black Friday..."
          onChange={onInputChange}
          autoFocus
        />
        <button>Search</button>

        <label className="label-favorite-cart" htmlFor={allFavoriteIcons}>
          <BiHeartCircle className="heart-icon"></BiHeartCircle>
        </label>

        <input
          className="checkbox-favorite-cart"
          type="checkbox"
          name=""
          id={allFavoriteIcons}
          hidden={true}
        />

        <div className="favorite-cart animate__animated animate__fadeIn">
          {favorites ? (
            <ul>
              {favorites?.map((favorite, index) => (
                <li key={`${favorite.id}-${Math.random()}`}>
                  <h3>Favorite Movies</h3>
                  <picture>
                    <img src={favorite.image} alt={favorite.title} />
                  </picture>

                  <h4>{favorite.title}</h4>

                  <BiNoEntry
                    className="no-entry-favorite"
                    onClick={() => REMOVE_FROM_FAVORITE(favorite)}
                  >
                    <button className="remove-from-favorite"></button>
                  </BiNoEntry>
                </li>
              ))}
            </ul>
          ) : (
            <p>There's Not Favorites Yet</p>
          )}
        </div>
      </div>
      {Boolean(search.errorMessage) ? (
        <p
          className={Boolean(search.errorMessage) ? `text-error` : "valid-text"}
        >
          {search.errorMessage}
        </p>
      ) : null}
      <div className="search-filters">
        <div className="content-since">
          <label htmlFor="">Content Since</label>
          <select
            onChange={onInputChange}
            name="selectedYear"
            id=""
            value={search.selectedYear}
          >
            {search.years.map((year) => (
              <option
                onChange={onInputChange}
                value={year}
                key={`${year}-${Math.random()}`}
              >
                {year[0].toUpperCase() + year.substring(1, year.length)}
              </option>
            ))}
          </select>
        </div>

        <div className="content-category">
          <label htmlFor="">Category</label>
          <select
            onChange={onInputChange}
            name="selectedCategory"
            id=""
            value={search.selectedCategory}
          >
            {search.categories.map((category) => (
              <option value={category} key={`${category}-${Math.random()}`}>
                {category[0].toUpperCase() +
                  category.substring(1, category.length)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};

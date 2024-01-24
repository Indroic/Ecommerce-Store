import React, { useContext, useEffect, useRef } from "react";
import { SearchComponent } from "../components/search/SearchComponent";
import { ProductsGridComponent } from "../components/grid/ProductsGridComponent";
import { getMovies } from "../services/getMovies";
import { SearchContext } from "../context/SearchContext";
import { filters } from "../filters/filters";

export const LandingPage = () => {
  const { search, setSearch } = useContext(SearchContext);

  const isFirstInput = useRef(true);

  const previousSearch = useRef(search.searchText);

  const { searched } = search;

  const { filterMovies, allCategories } = filters();

  const loadingMovies = (state) => {
    setSearch((prevState) => ({
      ...prevState,
      loading: state,
    }));
  };

  const seetingError = (errorMessage) => {
    setSearch((prevState) => ({
      ...prevState,
      errorMessage: errorMessage,
    }));
  };

  const validCharacters = /^[a-zA-Z0-9\s]+$/;

  const fetchingMovies = async (searched = "titanic") => {
    try {
      if (previousSearch.current.includes(search.searchText)) return;

      previousSearch.current = search.searchText;
      loadingMovies(true);

      const newMovies = await getMovies(searched);

      if (newMovies != undefined) {
        allCategories(newMovies);
      }

      const filtedMovies = filterMovies(newMovies);

      setSearch((prevState) => ({
        ...prevState,
        movies: filtedMovies,
      }));
      loadingMovies(false);
    } catch (error) {
      throw new Error(error.message);
    } finally {
      loadingMovies(false);
    }
  };

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search.searchText === "";
      return;
    }

    if (search.searchText.toString().trim().length <= 2) {
      return seetingError("The search needs to be at least 2 characters long");
    } else {
      seetingError("");
    }

    if (!validCharacters.test(search.searchText)) {
      return seetingError("The search needs to be valids characters");
    } else {
      seetingError("");
    }

    setSearch((prevState) => ({
      ...prevState,
      searched: search.searchText,
    }));
  }, [search.searchText]);

  useEffect(() => {
    fetchingMovies(search.searched);
  }, [search.searched, search.selectedCategory, search.selectedYear]);

  return (<>
  
    <div className="container">
      <header className="hero">
        <h1 className="movie-title">Store App</h1>
        <SearchComponent />
      </header>
      
    </div>

    <main>
        <ProductsGridComponent />
    </main>
  </>
  );
};

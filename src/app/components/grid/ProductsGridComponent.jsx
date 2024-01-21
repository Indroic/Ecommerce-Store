import React, { useState } from "react";
import { Search as initialMovies } from "../../mock/cinema.json";

export const ProductsGridComponent = () => {
  const [movies, setMovies] = useState(initialMovies);

  const hasMovies = movies.length > 0;

  return (
    <>
      {hasMovies ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <picture>
                <img src={movie.Poster} alt={movie.Title} />
              </picture>
              <h4>{movie.Title}</h4>

              <p>{movie.Type}</p>

              <p>{movie.Year}</p>

              <button>Favorite</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>There's No Movies to Show</p>
      )}
    </>
  );
};

import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
/* import { Search as initialMovies } from "../../mock/cinema.json"; */
import { BiHeartCircle } from "react-icons/bi";

export const ProductsGridComponent = () => {
  /*
  const [movies, setMovies] = useState(initialMovies); */

  const { search, setSearch, movies } = useContext(SearchContext);
  const hasMovies = search?.movies.length > 0;

  const mouseOver = (event)=>{
    console.log(event);
  }

  return (
    <>
      {search.loading ? (
        <p>
          <strong>Loading...</strong>
        </p>
      ) : null}

      {!hasMovies ? <p>There's No Movies to Show</p> : null}

      {hasMovies ? (
        <ul className="cinema-grid">
          {search.movies.map((movie) => (
            <li className="movie-card animate__animated animate__backInDown" key={movie.id}>
              <picture>
                <img
                  className="movie-img"
                  src={movie.image}
                  alt={movie.title}
                />
              </picture>
              <h4>{movie.title}</h4>

              <p>
                {movie.category[0].toUpperCase() +
                  movie.category.substring(1, movie.category.length)}
              </p>

              <p>{movie.year}</p>

              <div className="favorite">
                <BiHeartCircle onMouseOver={mouseOver} className="heart-icon">
                  <button className="favorite-button"></button>
                </BiHeartCircle>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

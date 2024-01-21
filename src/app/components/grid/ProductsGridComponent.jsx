import React, { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
/* import { Search as initialMovies } from "../../mock/cinema.json"; */

export const ProductsGridComponent = () =>  {
  /*
  const [movies, setMovies] = useState(initialMovies); */

  const {search, setSearch, movies} = useContext(SearchContext);
  const hasMovies = search?.movies.length > 0;

  return (
    <>
      {
        search.loading ? <p><strong>
          Loading...
          </strong></p> : null
      }

      
         {!hasMovies ?  
          <p>There's No Movies to Show</p> : null}
        
      

      {hasMovies ? (
        <ul>
          {search.movies.map((movie) => (
            <li key={movie.id}>
              <picture>
                <img src={movie.image} alt={movie.title} />
              </picture>
              <h4>{movie.title}</h4>

              <p>{movie.category}</p>

              <p>{movie.year}</p>

              <button>Favorite</button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

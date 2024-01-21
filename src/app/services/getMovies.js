
export const getMovies = async(search = titanic) => {
    const URL = `${import.meta.env.VITE_ENDPOINT}?apikey=${import.meta.env.VITE_API_KEY}&s=${search}`;
    console.log(URL);
    const resp = await fetch(URL);
    const data = await resp.json();

    const movies = data.Search.map(movie=>({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        category: movie.Type,
        image: movie.Poster,
    }))

    return movies;
}

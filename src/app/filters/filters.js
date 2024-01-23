import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

export const filters = () => {

    const {search, setSearch} = useContext(SearchContext);

    const allCategories = (movies)=>{
        const uniqueCategories = new Set();
        const uniqueYears = new Set(movies.category);

        uniqueCategories.add('all');
        uniqueYears.add('all');

        movies.filter(movie=>{
            if(search.selectedYear <= movie.year || search.selectedYear === 'all' && (search.selectedCategory[0] === movie.category || search.selectedCategory === 'all')) {
                movies.forEach(movie=> {
                    uniqueCategories.add(movie.category)})
                    uniqueYears.add(movie.year)
            }
        })
        
        setSearch(prevState => ({
            ...prevState,
            categories: Array.from(uniqueCategories).sort(),
            years: Array.from(uniqueYears).sort()
        }))
    }

    const allYears = (movies)=>{

    }
  
    const filterMovies = (movies)=>{
        return movies.filter(movie=>{

            return (search.selectedYear <= movie.year || search.selectedYear === 'all' && (search.selectedCategory[0] === movie.category || search.selectedCategory === 'all'))
        })
    }

    return {
        filterMovies, allCategories, allYears
    };

}

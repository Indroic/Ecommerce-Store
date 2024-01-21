import React, { useContext, useEffect } from 'react'
import { SearchComponent } from '../components/search/SearchComponent'
import { ProductsGridComponent } from '../components/grid/ProductsGridComponent'
import { getMovies } from '../services/getMovies'
import { SearchContext } from '../context/SearchContext'

export const LandingPage = () => {

  const {search, setSearch} = useContext(SearchContext);

  const {searched} = search;

  const loadingMovies = (state)=>{
    setSearch(prevState => ({
      ...prevState,
      loading: state,
    }))
  }

  const fetchingMovies = async(searched = 'titanic')=>{
    try {
        loadingMovies(true);
        const newMovies = await getMovies(searched)

        setSearch(prevState => ({
          ...prevState,
          movies:newMovies
        }))
        loadingMovies(false);
    } catch (error) {
        throw new Error(error.message);
    } finally{
        loadingMovies(false);
    }
  }

  useEffect(()=>{
    setSearch(prevState => ({
      ...prevState,
      searched: search.searchText
    }))
  }, [search.searchText])

  useEffect(() => {
    fetchingMovies(search.searched);
  }, [search.searched])
  

  return (
    
    <div className="container">

      <header className="hero">
      <h1>Store App</h1>
      <SearchComponent/>
      </header>
      
      <main>
        <ProductsGridComponent/>
      </main>


    </div>
  )
}

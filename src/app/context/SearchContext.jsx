import React from 'react'
import {useState, createContext} from 'react';

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {

    const [search, setSearch] = useState({
        searchText: '',
        searched: 'titanic',
        movies: [],
        categories : [],
        years: [],
        selectedCategory: [],
        selectedYear: [],
        loading: false,
        errorSearch: null,
    })

  return (
    <SearchContext.Provider value={{search, setSearch, searched: search.searched}}>
        {children}
    </SearchContext.Provider>
  )
}

import React from 'react'
import {useState, createContext} from 'react';

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {

    const [search, setSearch] = useState({
        searchText: '',
        search: '',
        products: [],
        categories : [],
        years: [],
        selectedCategory: [],
        selectedYear: [],
    })

  return (
    <SearchContext.Provider value={{search, setSearch}}>
        {children}
    </SearchContext.Provider>
  )
}

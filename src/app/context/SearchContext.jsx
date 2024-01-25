import { useState, createContext } from 'react'

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState({
    searchText: '',
    searched: 'titanic',
    movies: [],
    categories: ['all'],
    years: ['all'],
    selectedCategory: 'all',
    selectedYear: 'all',
    loading: false,
    errorSearch: ''
  })

  return (
    <SearchContext.Provider
      value={{ search, setSearch, searched: search.searched }}
    >
      {children}
    </SearchContext.Provider>
  )
}

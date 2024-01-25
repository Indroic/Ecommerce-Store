import React, { createContext, useReducer } from 'react'
import { favoriteReducer } from '../reducer/favoriteReducer'
import { types } from '../reducer/types'

export const FavsContext = createContext()

const initialState = JSON.parse(window.localStorage.getItem('favorites')) || []

export const FavsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoriteReducer, initialState)

  const ADD_TO_FAVORITE = (movie) =>
    dispatch({
      type: types.ADD_TO_FAVORITE,
      payload: movie
    })

  const REMOVE_FROM_FAVORITE = (movie) =>
    dispatch({
      type: types.REMOVE_FROM_FAVORITE,
      payload: movie
    })

  const CLEAN_FAVORITES = (movie) =>
    dispatch({
      type: types.CLEAN_FAVORITES,
      payload: movie
    })

  return (
    <FavsContext.Provider
      value={{
        ADD_TO_FAVORITE,
        REMOVE_FROM_FAVORITE,
        CLEAN_FAVORITES,
        favorites: state
      }}
    >
      {children}
    </FavsContext.Provider>
  )
}

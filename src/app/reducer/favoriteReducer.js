import { types } from './types'

const updateFavorites = (newState) => {
  window.localStorage.setItem('favorites', JSON.stringify(newState))
}

export const favoriteReducer = (state, action) => {
  const { type: typePayload, payload: actionPayload } = action

  if (typePayload === types.ADD_TO_FAVORITE) {
    const itemInFavorite = state?.findIndex(
      (movie) => movie.id === actionPayload.id
    )

    if (itemInFavorite != -1) {
      return state
    }

    const newState = [...state, { ...actionPayload }]

    updateFavorites(newState)
    return newState
  }

  if (typePayload === types.REMOVE_FROM_FAVORITE) {
    const newState = state.filter((movie) => movie.id !== actionPayload.id)

    updateFavorites(newState)
    return newState
  }

  if (typePayload === types.CLEAN_FAVORITES) {
    const newState = []
    updateFavorites(newState)
    return newState
  }

  return state
}

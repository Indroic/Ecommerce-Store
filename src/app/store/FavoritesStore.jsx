import { create } from 'zustand'

const initialState = JSON.parse(window.localStorage.getItem('favorites')) || []

const updateFavorites = (newState) => {
  window.localStorage.setItem('favorites', JSON.stringify(newState))
}

console.log(initialState)

export const useStore = create((set) => ({
  state: initialState,
  addToCart: (actionPayload) => {
    set((state) => {
      const itemInFavorite = state.findIndex(
        (movie) => movie.id === actionPayload.id
      )

      if (itemInFavorite !== -1) {
        // Elemento ya existe, no hagas nada
        return { state }
      }

      const newState = [...state, { ...actionPayload }]

      updateFavorites(newState)

      return { state: newState }
    })
  }
}))

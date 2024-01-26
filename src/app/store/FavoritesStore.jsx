import { create } from 'zustand'

const updateFavorites = (newState) => {
  window.localStorage.setItem('favorites', JSON.stringify(newState))
}

// funcion poara obtener el estado inicial
const getInitalState = () => {
  const initialState = JSON.parse(window.localStorage.getItem('favorites')) || []
  return initialState
}

export const useStore = create((set) => ({
  state: getInitalState(),
  addToCart: (actionPayload) => {
    set((state) => {
      // se obtiene el estado inicial
      const initialState = getInitalState()

      console.log('initialState', initialState)

      // si el elemento ya existe no lo agrega
      const itemInFavorite = initialState.findIndex(
        (movie) => movie.id === actionPayload.id
      )

      if (itemInFavorite !== -1) {
        // Elemento ya existe, no hagas nada
        return { state }
      }

      // si el elemento no existe lo agrega
      const newState = [...initialState, { ...actionPayload }]

      console.log('newState', newState)

      // actualiza el valor local
      updateFavorites(newState)

      return { state: newState }
    })
  }
}))

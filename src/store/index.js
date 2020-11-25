import {createStore} from 'redux'

const initialState = {
  favorites: []
}


function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const newFavorites = state.favorites.concat(action.payload.team)
      return {...state.favorites, favorites: newFavorites}
    case 'DELETE_FAVORITE':
      const favoritesAfterDelete = state.favorites.filter(favorite => favorite.team_id !== action.id)
      return {...state.favorites, favorites: favoritesAfterDelete}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store

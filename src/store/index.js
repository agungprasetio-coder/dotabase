import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  favorites: [],
  teams: []
}

export function fetchTeams () {
  return (dispatch) => {
    fetch('https://api.opendota.com/api/teams/')
    .then(res => { 
      if (!res.ok) {
        return Promise.reject('Something wrong!')
      }else{
        return res.json()
      }
    })
    .then(data => {
      dispatch({
        type: 'GET_TEAMS',
        payload: {
          data: data.slice(4,14)
        }
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TEAMS':
      const getTeams = state.teams.concat(action.payload.data)
      return {...state, teams: getTeams}
    case 'ADD_TEAM':
      const newTeamList = state.teams.concat(action.payload.newTeam)
      return {...state, teams: newTeamList}
    case 'DELETE_TEAM':
      const newArr = state.teams.filter(team => {
        return team.team_id !== action.payload.id
      })
      return {...state, teams: newArr}
    case 'ADD_FAVORITE':
      const newFavorites = state.favorites.concat(action.payload.team)
      return {...state, favorites: newFavorites}
    case 'DELETE_FAVORITE':
      const favoritesAfterDelete = state.favorites.filter(favorite => favorite.team_id !== action.payload.id)
      return {...state, favorites: favoritesAfterDelete}
    default:
      return state
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

export default store

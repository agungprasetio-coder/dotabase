import React, {useEffect} from 'react'
import Teamlist from './components/Teamlist'
import AddTeam from './components/AddTeam'
import {Switch, Link, Route} from 'react-router-dom'
import './App.css'
import TeamDetail from './components/TeamDetail'
import Favorite from './components/Favorite'
import {useSelector, useDispatch} from 'react-redux'
import {fetchTeams} from './store'
import AppContext from './context/AppContext'

function App () {
  const teams = useSelector(state => state.teams) 
  const dispatch = useDispatch()

  function deleteTeam(id) {
    dispatch({
      type: 'DELETE_TEAM',
      payload: {
        id
      }
    })
  }

  useEffect(() => {
    dispatch(fetchTeams())
  }, [])
  
  return (
    <>
      <AppContext.Provider value={{label: 'Tambahkan ke Favorit'}}>
        <nav className="navbar navbar-dark bg-dark justify-content-center border-bottom border-info shadow">
          <div className="navbar-brand text-info font-weight-bold">
            <Link to="/">Home</Link> | <Link to="/favorites">Favorite</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/teams/:teamId">
            <TeamDetail/>
          </Route>
          <Route path="/favorites">
            <Favorite/>
          </Route>
          <Route path="/">
            <Teamlist teams={teams} deleteTeam={deleteTeam}/>
            <AddTeam teams={teams}/>
          </Route>
        </Switch>
      </AppContext.Provider>
    </>
  ) 
}

export default App;

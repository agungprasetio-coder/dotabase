import React, {useEffect, useState} from 'react'
import Teamlist from './components/Teamlist'
import AddTeam from './components/AddTeam'
import {Switch, Link, Route} from 'react-router-dom'
import './App.css'
import TeamDetail from './components/TeamDetail'

function App () {
  const [teams, setTeams] = useState([])

  function deleteTeam(id) {
    // console.log(id, 'Deleted')
    const newArr = teams.filter(team => {
      return team.team_id !== id
    })
    setTeams(newArr)
  }

  useEffect(() => {
    fetch('https://api.opendota.com/api/teams/')
      .then(res => { 
        // console.log(res)
        if (!res.ok) {
          return Promise.reject('Something wrong!')
        }else{
          return res.json()
        }
      })
      .then(data => {
        // console.log(data)
        setTeams(data.slice(4,14))
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  return (
    <>
      <nav className="navbar navbar-dark bg-dark justify-content-center border-bottom border-info shadow">
        <div className="navbar-brand text-info font-weight-bold">
          <Link to="/">Home</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/teams/:teamId">
          <TeamDetail/>
        </Route>
        <Route path="/">
          <Teamlist teams={teams} deleteTeam={deleteTeam}/>
          <AddTeam teams={teams} setTeams={setTeams}/>
        </Route>
      </Switch>
    </>
  ) 
}

export default App;

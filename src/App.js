import React, {useEffect, useState} from 'react'
import Teamlist from './components/Teamlist'
import AddTeam from './components/AddTeam'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
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
      <Router>
        <nav className="navbar navbar-dark bg-dark justify-content-center border-bottom border-info shadow">
          <div className="navbar-brand text-info font-weight-bold">
            <Link to="/">Home</Link> | <Link to="/teams">Team List</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/teams">
            <Teamlist teams={teams} deleteTeam={deleteTeam}></Teamlist>
            <AddTeam teams={teams} setTeams={setTeams}></AddTeam>
          </Route>
          <Route path="/teams/:team_id">
            <TeamDetail></TeamDetail>
          </Route>
          <Route path="/">
            <h4 className="mt-4" align="center">Welcome Page</h4>
          </Route>
        </Switch>
      </Router>
    </>
  ) 
}

export default App;

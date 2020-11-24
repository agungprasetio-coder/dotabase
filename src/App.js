import React, {useEffect, useState} from 'react'
import Teamlist from './components/Teamlist'
import AddTeam from './components/AddTeam'

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
        <h1 className="h1 navbar-brand text-info font-weight-bold">Team List</h1>
      </nav>
      <Teamlist teams={teams} deleteTeam={deleteTeam}></Teamlist>
      <AddTeam teams={teams} setTeams={setTeams}></AddTeam>
    </>
  ) 
}

export default App;

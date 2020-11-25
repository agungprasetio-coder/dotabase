import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

function Teamlist(props) {
  const {teams, deleteTeam} = props
  const history = useHistory()
  const dispatch = useDispatch()

  function detailTeam(id) {
    history.push('/teams/' + id)
  }

  function addToFavorites(team) {
    // console.log(team, '<<<< nih dapet favorite team')
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        team
      }
    })
  }

  return (
		<table className="table table-borderless table-striped table-dark">
      <thead>
        <tr className="text-info">
          <th scope="col">#</th>
          <th scope="col">Logo</th>
          <th scope="col">Name</th>
          <th scope="col">Alias</th>
          <th scope="col">Wins</th>
          <th scope="col">Losses</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={team.team_id}>
            <th scope="row">{index + 1}</th>
            <td className="align-middle"><img style={{width:258, height:157}} className="img-thumbnail" src={team.logo_url} alt={team.name} title={team.name}></img></td>
            <td className="align-middle">{team.name}</td>
            <td className="align-middle">{team.tag}</td>
            <td className="align-middle">{team.wins}</td>
            <td className="align-middle">{team.losses}</td>
            <td className="align-middle"><button className="btn btn-info" onClick={() => addToFavorites(team)}>Add to Favorites</button>&nbsp;<button className="btn btn-secondary" onClick={() => detailTeam(team.team_id)}>Detail</button>&nbsp;<button className="btn btn-danger" onClick={() => deleteTeam(team.team_id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Teamlist

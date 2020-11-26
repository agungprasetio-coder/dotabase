import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import useFetch from '../helpers/useFetch'
import AppContext from '../context/AppContext'

function TeamDetail () {
  const { teamId } = useParams()
  const [team] = useFetch('https://api.opendota.com/api/teams/' + teamId)
  const dispatch = useDispatch()
  const appContext = useContext(AppContext)

  function addToFavorites (team) {
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        team
      }
    })
  }

  return (
    <>
      <div className="card bg-dark mt-3 mb-3 p-3 align-items-center ml-auto mr-auto" style={{width: "540px"}}>
        <img src={team.logo_url} className="card-img-top" alt={team.name} title={team.name} style={{width: "50%"}}/>
        <div className="card-body" style={{width: "90%"}}>
          <h5 className="card-title text-info text-center">{team.name}</h5>
          <table className="table text-white">
            <tbody>
              <tr>
                <td>Team ID</td>
                <td> : </td>
                <td>{team.team_id}</td>
              </tr>
              <tr>
                <td>Team Name</td>
                <td> : </td>
                <td>{team.name}</td>
              </tr>
              <tr>
                <td>Team Alias</td>
                <td> : </td>
                <td>{team.tag}</td>
              </tr>
              <tr>
                <td>Wins</td>
                <td> : </td>
                <td>{team.wins}</td>
              </tr>
              <tr>
                <td>Losses</td>
                <td> : </td>
                <td>{team.losses}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-block btn-outline-info" onClick={()=>addToFavorites(team)}>{appContext.label}</button>
        </div>
      </div>
    </>
  )
}

export default TeamDetail

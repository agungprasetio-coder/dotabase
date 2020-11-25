import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function TeamDetail () {
  const [team, setTeam] = useState({})
  const { team_id } = useParams()

  useEffect(() => {
    fetch(`https://api.opendota.com/api/teams/${team_id}`)
      .then(res => {
        if (!res.ok) {
          return Promise.reject('Something wrong!')
        } else {
          return res.json()
        }
      })
      .then(data => {
        setTeam(data)
      })
      .catch(err => {
        console.log(err)
      })
  })

  return (
    <>
      <ul>
        <li>Team ID: {team.team_id}</li>
        <li>Team Name: {team.name}</li>
        <li>Team Tag: {team.tag}</li>
        <li>Wins: {team.wins}</li>
        <li>Losses: {team.losses}</li>
      </ul>
    </>
  )
}

export default TeamDetail

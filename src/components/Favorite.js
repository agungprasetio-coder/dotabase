import {useSelector, useDispatch} from 'react-redux'

function Favorite() {
  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()
  console.log(favorites, '<<<< ini state dari store redux')
  function deleteTeam(id) {
    dispatch({
      type: 'DELETE_FAVORITE',
      id
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
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {favorites.map((team, index) => (
          <tr key={team.team_id}>
            <th scope="row">{index + 1}</th>
            <td className="align-middle"><img style={{width:258, height:157}} className="img-thumbnail" src={team.logo_url} alt={team.name} title={team.name}></img></td>
            <td className="align-middle">{team.name}</td>
            <td className="align-middle">{team.tag}</td>
            <td className="align-middle">{team.wins}</td>
            <td className="align-middle">{team.losses}</td>
            <td className="align-middle"><button className="btn btn-danger" onClick={() => deleteTeam(team.team_id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Favorite

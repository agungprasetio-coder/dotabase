import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      teams: []
    }
  }

  deleteTeam(id) {
    // console.log(id, 'Deleted')
    const {teams} = this.state
    const newArr = teams.filter(team => {
      return team.team_id !== id
    })
    this.setState({
      teams: newArr
    })
  }

  componentDidMount() {
    axios({
      url: 'https://api.opendota.com/api/teams/',
      method: 'GET'
    })
      .then(({ data }) => {
        this.setState({
          teams: data.slice(4,14)
        })
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }
  render() {
    const { teams } = this.state
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark justify-content-center border-bottom border-info shadow">
          <h1 className="h1 navbar-brand text-info font-weight-bold">Team List</h1>
        </nav>
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
            {teams.map((team, index) => (
              <tr key={team.team_id}>
                <th scope="row">{index + 1}</th>
                <td className="align-middle"><img style={{width:258, height:157}} className="img-thumbnail" src={team.logo_url} alt={team.name} title={team.name}></img></td>
                <td className="align-middle">{team.name}</td>
                <td className="align-middle">{team.tag}</td>
                <td className="align-middle">{team.wins}</td>
                <td className="align-middle">{team.losses}</td>
                <td className="align-middle"><button className="btn btn-danger" onClick={() => this.deleteTeam(team.team_id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    ) 
  }
}

export default App;

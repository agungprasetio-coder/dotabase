import React from 'react'
import axios from 'axios'
import Teamlist from './Teamlist'

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
        <Teamlist teams={teams} deleteTeam={this.deleteTeam.bind(this)}></Teamlist>
      </React.Fragment>
    ) 
  }
}

export default App;

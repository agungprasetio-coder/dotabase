import React, {useState} from 'react'

function AddTeam (props) {
  const {teams, setTeams} = props
  const [logo_url, setLogoUrl] = useState('')
  const [name, setName] = useState('')
  const [tag, setTag] = useState('')
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)

  function handleLogoUrl(e) {
    setLogoUrl(e.target.value)
  }

  function handleName(e) {
    setName(e.target.value)
  }

  function handleAlias(e) {
    setTag(e.target.value)
  }

  function handleWins(e) {
    setWins(e.target.value)
  }

  function handleLosses(e) {
    setLosses(e.target.value)
  }

  function handleSubmitForm(e) {
    e.preventDefault()
    const newTeam = {
      team_id: teams.length + 1,
      logo_url,
      name,
      tag,
      wins,
      losses
    }
    setTeams([newTeam, ...teams]) 
  }

  return (
    <>
      <button type="button" className="btn btn-primary position-absolute sticky-top" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Team</button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">            
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New Team</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmitForm}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="col-form-label">Logo URL:</label>
                  <input
                  type="text"
                  className="form-control"
                  id="logo"
                  value={logo_url}
                  onChange={handleLogoUrl}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Name:</label>
                  <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={handleName}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Alias:</label>
                  <input
                  type="text"
                  className="form-control"
                  id="alias"
                  value={tag}
                  onChange={handleAlias}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Wins:</label>
                  <input
                  type="number"
                  className="form-control"
                  id="wins"
                  value={wins}
                  onChange={handleWins}
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Losses:</label>
                  <input
                  type="number"
                  className="form-control"
                  id="losses"
                  value={losses}
                  onChange={handleLosses}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Add Team</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTeam
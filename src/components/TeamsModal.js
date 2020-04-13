import React from 'react';
import PropTypes from 'prop-types';
import './TeamsModal.css';

class TeamsModal extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      redNewPlayer: '',
      blueNewPlayer: '',
    }
  }

  addPlayer(color, newPlayer) {
    this.props.addPlayer(color, newPlayer);
    this.setState({ [`${color}NewPlayer`]: ''});
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <button className="close-modal" onClick={this.props.toggleTeamsModal}>✕</button>
          <h3 className="modal-title">Setup your teams</h3>
          <div className="teams-wrapper">
            <div className="team team-red">
              <h3 className="team-title">Team red</h3>
              <form onSubmit={() => this.addPlayer('red', this.state.redNewPlayer)}>
                {this.props.teams.red.map((player, index) => (
                  <input className="input" key={index} value={player} onChange={({ target: { value } }) => this.props.updatePlayer('red', value, player)} />
                ))}
                <input
                  className="input"
                  value={this.state.redNewPlayer}
                  onChange={({ target: { value } }) => this.setState({ redNewPlayer: value })}
                />
                <button type="submit" className="btn">Add player</button>
              </form>
            </div>
            <div className="team team-blue">
              <h3 className="team-title">Team blue</h3>
              <form onSubmit={() => this.addPlayer('blue', this.state.blueNewPlayer)}>
                {this.props.teams && this.props.teams.blue.map((player, index) => (
                  <input className="input" key={index} value={player} onChange={({ target: { value } }) => this.props.updatePlayer('red', value, player)} />
                ))}
                <input
                  className="input"
                  value={this.state.blueNewPlayer}
                  onChange={({ target: { value } }) => this.setState({ blueNewPlayer: value })}
                />
                <button type="submit" className="btn">Add player</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TeamsModal.propTypes = {
  addPlayer: PropTypes.func,
  toggleTeamsModal: PropTypes.func,
  updatePlayer: PropTypes.func,
  teams: PropTypes.objectOf(PropTypes.objectOf(PropTypes.ArrayOf(PropTypes.string))),
};


export default TeamsModal;

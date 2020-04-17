import React from 'react';
import PropTypes from 'prop-types';
import './Team.css';

class Team extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      newPlayer: '',
    }
  }

  addPlayer(newPlayer, e) {
    e.preventDefault();
    if (!newPlayer)
      return;
    this.props.addPlayer(this.props.teamColor, newPlayer);
    this.setState({ newPlayer: ''});
  }

  updatePlayer(updatedPlayer, playerIndex) {
    this.props.updatePlayer(this.props.teamColor, updatedPlayer, playerIndex);
  }

  render() {
    const { teams, teamColor, removePlayer } = this.props;
    const { newPlayer } = this.state;

    return (
      <div className="teams-wrapper">
        <div className={`team team-${teamColor}`}>
          <h3 className="team-title">Team {teamColor}</h3>
          <form onSubmit={e => this.addPlayer(newPlayer, e)}>
            <div className="players">
              {teams[teamColor].map((player, index) => (
                <div className="player-wrap" key={index}>
                  <input
                    className="input"
                    value={player}
                    onChange={({ target: { value } }) => this.updatePlayer(value, index)}
                  />
                  <span onClick={() => {removePlayer(teamColor, index)}} className="remove-player">x</span>
                </div>
              ))}
            </div>
            <input
              className="input"
              value={newPlayer}
              onChange={({ target: { value } }) => this.setState({ newPlayer: value })}
            />
            <button type="submit" className="btn">Add player</button>
          </form>
        </div>
      </div>
    );
  }
}

Team.propTypes = {
  addPlayer: PropTypes.func,
  updatePlayer: PropTypes.func,
  removePlayer: PropTypes.func,
  teams: PropTypes.object,
  teamColor: PropTypes.string,
};

export default Team;

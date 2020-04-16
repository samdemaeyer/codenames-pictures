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

  addPlayer(newPlayer) {
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
          <form onSubmit={() => this.addPlayer(newPlayer)}>
            {teams[teamColor].map((player, index) => (
              <div className="player-wrap">
                <input
                  className="input"
                  key={index}
                  value={player}
                  onChange={({ target: { value } }) => this.updatePlayer(value, index)}
                />
                <button onClick={() => removePlayer(teamColor, index)} className="remove-player">x</button>
              </div>
            ))}
            {!!teams[teamColor].length && <hr/>}
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

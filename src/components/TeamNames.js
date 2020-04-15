import React from 'react';
import PropTypes from 'prop-types';
import './TeamNames.css';

class TeamNames extends React.Component {
  render() {
    const {color, teams, score, addScore} = this.props;

    return (
      <div className={`team-names team-${color}`}>
        {teams[color].length ?
          <>
            <h1 className="team-score">{score[color]}</h1>
            <button className="btn" onClick={() => addScore(color)}>Score</button>
            <h3 className="teams-title">Team {color}</h3>
            <ul className="names">
              {teams[color].map((player, index) => (
                <li key={index}>
                  <p>{player}</p>
                </li>
              ))}
            </ul>
          </> : null}
      </div>
    );
  }
}

TeamNames.propTypes = {
  color: PropTypes.string,
  teams: PropTypes.object,
  score: PropTypes.object,
  addScore: PropTypes.func,
};

export default TeamNames;

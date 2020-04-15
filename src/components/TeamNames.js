import React from 'react';
import PropTypes from 'prop-types';
import './TeamNames.css';

class TeamNames extends React.Component {
  render() {
    const {color, teamNames, score, addScore} = this.props;

    return (
      <div className={`team-names team-${color}`}>
        {teamNames.length ? 
          <>
            <h3 className="teams-title">Team {color}: {score[color]}</h3>
            <ul className="names">
              {teamNames.map((player, index) => (
                <li key={index}>
                  <p>{player}</p>
                </li>
              ))}
            </ul>
            <button className="btn" onClick={() => addScore(color)}>Score</button>
          </> : null}
      </div>
    );
  }
}

TeamNames.propTypes = {
  color: PropTypes.string,
  teamNames: PropTypes.arrayOf(PropTypes.string),
  score: PropTypes.object,
  addScore: PropTypes.func,
};

export default TeamNames;

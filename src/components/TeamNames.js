import React from 'react';
import PropTypes from 'prop-types';
import './TeamNames.css';

class TeamNames extends React.Component {
  render() {
    const {color, teams, score, addScore, getGuessedCards} = this.props;

    return (
      <div className={`team-names team-${color}`}>
        {teams[color].length ?
          <>
            <h1 className="team-score">{score[color]}</h1>
            <h5 className="team-guessed-cards">Guessed cards: {getGuessedCards(color)}</h5>
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
  getGuessedCards: PropTypes.func,
};

export default TeamNames;

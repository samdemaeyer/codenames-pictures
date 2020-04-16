import React from 'react';
import PropTypes from 'prop-types';
import './TeamScore.css';

class TeamScore extends React.Component {
  render() {
    const {color, score, addScore} = this.props;

    return (
      <div className={`team-score team-${color}`}>
        <h1 className="score">{score[color]}</h1>
        <button className="btn" onClick={() => addScore(color)}>Score</button>
      </div>
    );
  }
}

TeamScore.propTypes = {
  color: PropTypes.string,
  score: PropTypes.object,
  addScore: PropTypes.func,
};

export default TeamScore;

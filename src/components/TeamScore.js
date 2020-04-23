import React from 'react';
import PropTypes from 'prop-types';
import './TeamScore.css';

const TeamScore = ({color, score, addScore}) => 
  <div className={`team-score team-${color}`}>
    <h1 className="score">{score[color]}</h1>
    <button className="btn" onClick={() => addScore(color)}>Score</button>
  </div>;

TeamScore.propTypes = {
  color: PropTypes.string,
  score: PropTypes.object,
  addScore: PropTypes.func,
};

export default TeamScore;

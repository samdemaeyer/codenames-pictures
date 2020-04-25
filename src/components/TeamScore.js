import React from 'react';
import PropTypes from 'prop-types';
import './TeamScore.css';
import classNames from 'classnames';

const TeamScore = ({color, score, addScore}) => 
  <div className={'team-score'}>
    <h1 className={classNames('score', `text-${color}`)}>{score[color]}</h1>
    <button className="btn" onClick={() => addScore(color)}>Score</button>
  </div>;

TeamScore.propTypes = {
  color: PropTypes.string,
  score: PropTypes.object,
  addScore: PropTypes.func,
};

export default TeamScore;

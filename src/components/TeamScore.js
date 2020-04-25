import React from 'react';
import PropTypes from 'prop-types';
import './TeamScore.css';
import classNames from 'classnames';
import GameContext from '../contexts/gameContext';

const TeamScore = ({color}) => {
  const {score, scorePlayer} = React.useContext(GameContext);

  return (
    <div className={'team-score'}>
      <h1 className={classNames('score', `text-${color}`)}>{score[color]}</h1>
      <button className="btn" onClick={() => scorePlayer(color)}>Score</button>
    </div>
  );
};

TeamScore.propTypes = {
  color: PropTypes.string,
};

export default TeamScore;

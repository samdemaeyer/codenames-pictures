import * as React from 'react';
import PropTypes from 'prop-types';
import './ScoreBoard.css';
import TeamScore from './TeamScore';
import classNames from 'classnames';

const ScoreBoard = props => {
  const [expanded, setExpanded] = React.useState(false);
  const {teams} = props;

  if (!teams.red.length || !teams.blue.length)
    return null;

  return (
    <div
      className={classNames('score-board', {'expanded': expanded})}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="score-wrapper">
        <TeamScore color="red" {...props}/>
        <TeamScore color="blue" {...props}/>
      </div>
    </div>
  );
};

ScoreBoard.propTypes = {
  teams: PropTypes.object,
  score: PropTypes.object,
  addScore: PropTypes.func,
  getGuessedCards: PropTypes.func,
};

export default ScoreBoard;

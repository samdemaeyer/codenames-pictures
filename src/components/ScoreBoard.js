import * as React from 'react';
import './ScoreBoard.css';
import TeamScore from './TeamScore';
import classNames from 'classnames';
import GameContext from '../contexts/gameContext';

const ScoreBoard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const {teams} = React.useContext(GameContext);

  if (!teams.red.length || !teams.blue.length)
    return null;

  return (
    <div
      className={classNames('score-board', {'expanded': expanded})}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="score-wrapper">
        <TeamScore color="red"/>
        <TeamScore color="blue"/>
      </div>
    </div>
  );
};

export default ScoreBoard;

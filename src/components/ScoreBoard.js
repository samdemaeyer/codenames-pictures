import * as React from 'react';
import './ScoreBoard.scss';
import TeamScore from './TeamScore';
import classNames from 'classnames';
import GameContext from '../contexts/gameContext';

const ScoreBoard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const { teams, isDuetGame, teamColors } = React.useContext(GameContext);
  const teamsSetup = teamColors.every(color => teams[color].length > 0);

  if (!teamsSetup || isDuetGame)
    return null;

  return (
    <div
      className={classNames('ScoreBoard', {'expanded': expanded})}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="score-wrapper">
        {teamColors.map(color => <TeamScore color={color} key={color}/>)}
      </div>
    </div>
  );
};

export default ScoreBoard;

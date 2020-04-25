import React from 'react';
import TeamsModal from './TeamsModal';
import ScoreBoard from './ScoreBoard';
import TeamSummary from './TeamSummary';
import Menu from './library/Menu';
import './Board.scss';
import {Link} from 'react-router-dom';
import GameContext from '../contexts/gameContext';
import CardGrid from './CardGrid';

const Board = () => {
  const { newGame, teamColors } = React.useContext(GameContext);
  const [showTeamsModal, setShowTeamsModal] = React.useState(false);
  const toggleTeamsModal = () => setShowTeamsModal(!showTeamsModal);

  return (
    <>
      <ScoreBoard/>
      {showTeamsModal && <TeamsModal toggleTeamsModal={toggleTeamsModal}/>}
      <div className="container">
        <div className="inner-container">
          <CardGrid/>
          <div className="side-wrapper">
            <div className="teams-summary">
              {teamColors.map(color => <TeamSummary key={color} color={color}/>)}
            </div>
            <Menu>
              <Link to="#" onClick={toggleTeamsModal}>
                  Teams
              </Link>
              <Link target="_blank" to={`/spy-master/${Math.floor(Math.random() * 100)}`}>
                  Spy Master
              </Link>
              <Link to="#" onClick={newGame}>
                  New Game
              </Link>
              <Link target="_blank" to="/">
                  Rules
              </Link>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;

import React from 'react';
import Card from './Card';
import TeamsModal from './TeamsModal';
import ScoreBoard from './ScoreBoard';
import TeamSummary from './TeamSummary';
import Menu from './Menu';
import './Board.css';
import {Link} from 'react-router-dom';
import GameContext from '../contexts/gameContext';

const Board = () => {
  const {cards, newGame} = React.useContext(GameContext);
  const [showTeamsModal, setShowTeamsModal] = React.useState(false);
  const toggleTeamsModal = () => setShowTeamsModal(!showTeamsModal);

  return (
    <div>
      <ScoreBoard/>
      {showTeamsModal && <TeamsModal toggleTeamsModal={toggleTeamsModal}/>}
      <div className="container">
        <div className="inner-container">
          <div className="grid">
            {cards.map((card, index) => (
              <Card
                key={card.cardId}
                card={card}
                index={index + 1}
              />
            ))}
          </div>
          <div className="side-wrapper">
            <div className="teams-summary">
              <TeamSummary color="red"/>
              <TeamSummary color="blue"/>
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
    </div>
  );
};

export default Board;

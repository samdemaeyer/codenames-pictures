import React from 'react';
import Card from '../components/Card';
import TeamsModal from '../components/TeamsModal';
import ScoreBoard from '../components/ScoreBoard';
import TeamSummary from '../components/TeamSummary';
import Menu from '../components/Menu';
import randomise from '../utils/array-helpers';
import './Board.css';
import {Link} from 'react-router-dom';

const randomiseCards = () => {
  const defaultCard = { color: '' };
  return randomise(
    [...Array(280)].map((_, i) => ({ cardId: i, ...defaultCard }))
  ).slice(0, 20);
};

const Board = () => {
  const [cards, setCards] = React.useState(randomiseCards());
  const [showTeamsModal, setShowTeamsModal] = React.useState(false);
  const [startingTeam, setStartingTeam] = React.useState('');
  const [teams, setTeams] = React.useState({red: [], blue: []});
  const [score, setScore] = React.useState({red: 0, blue: 0});

  const newGame = e => {
    e.preventDefault();
    setCards(randomiseCards());
    setStartingTeam('');
  };

  const setColor = (card, color) => {
    const newCards = [...cards];
    newCards.forEach(c => {
      if (card === c) c.color = color;
    });
    setCards(newCards);
  };

  const toggleTeamsModal = () => setShowTeamsModal(!showTeamsModal);

  const addPlayer = (color, player) => {
    const newTeams = {...teams};
    newTeams[color].push(player);
    setTeams(newTeams);
  };

  const updatePlayer = (color, newValue, index) => {
    const newArray = [...teams[color]];
    newArray[index] = newValue;
    setTeams({ ...teams, [color]: newArray });
  };

  const removePlayer = (color, index) => {
    const newArray = [...teams[color]];
    newArray.splice(index, 1);
    setTeams({ ...teams, [color]: newArray });
  };

  const shuffleTeams = () => {
    const allPlayers = randomise([...teams.red, ...teams.blue]);
    const roundFunction = Math.random() >= 0.5 ? Math.floor : Math.ceil;
    const breakAt = roundFunction(allPlayers.length / 2);
    setTeams({
      red: allPlayers.slice(0, breakAt),
      blue: allPlayers.slice(breakAt, allPlayers.length),
    });
    resetScores();
  };

  const pickSpyMasters = () => setTeams({
    red: randomise(teams.red),
    blue: randomise(teams.blue),
  });

  const scorePlayer = color => setScore({
    ...score,
    [color]: (score[color] + 1),
  });

  const resetScores = () => setScore({
    red: 0,
    blue: 0,
  });

  const getGuessedCardsAmount = color => cards.filter(card => card.color === color).length;

  const teamSummaryProps = {
    teams,
    startingTeam,
    getGuessedCards: getGuessedCardsAmount,
  };

  return (
    <div>
      <ScoreBoard
        teams={teams}
        score={score}
        addScore={scorePlayer}
        getGuessedCards={getGuessedCardsAmount}
      />
      {showTeamsModal ? (
        <TeamsModal
          teams={teams}
          startingTeam={startingTeam}
          addPlayer={addPlayer}
          updatePlayer={updatePlayer}
          removePlayer={removePlayer}
          shuffleTeams={shuffleTeams}
          toggleTeamsModal={toggleTeamsModal}
          pickSpyMasters={pickSpyMasters}
          setStaringTeam={setStartingTeam}
        />
      ) : null}
      <div className="container">
        <div className="inner-container">
          <div className="grid">
            {cards.map((card, index) => (
              <Card
                key={card.cardId}
                card={card}
                index={index + 1}
                setColor={setColor}
              />
            ))}
          </div>
          <div className="side-wrapper">
            <div className="teams-summary">
              <TeamSummary color="red" {...teamSummaryProps}/>
              <TeamSummary color="blue" {...teamSummaryProps}/>
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

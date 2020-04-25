import React from 'react';
import randomise from '../utils/array-helpers';
import GameContext from '../contexts/gameContext';
import Board from '../components/Board';

const randomiseCards = () => {
  const defaultCard = { color: '' };
  return randomise(
    [...Array(280)].map((_, i) => ({ cardId: i, ...defaultCard }))
  ).slice(0, 20);
};

const Game = () => {
  const [cards, setCards] = React.useState(randomiseCards());
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

  return (
    <GameContext.Provider value={{
      cards, 
      teams, 
      startingTeam,
      setStartingTeam,
      score, 
      newGame, 
      setColor, 
      addPlayer, 
      updatePlayer, 
      removePlayer, 
      shuffleTeams, 
      pickSpyMasters, 
      scorePlayer, 
      getGuessedCardsAmount,
    }}>
      <Board/>
    </GameContext.Provider>
  );
};

export default Game;

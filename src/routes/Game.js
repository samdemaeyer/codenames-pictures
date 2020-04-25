import React from 'react';
import GameContext from '../contexts/gameContext';
import Board from '../components/Board';
import {capitalizeFirstLetter} from '../utils/string-helpers';
import {randomise, chunkify} from '../utils/array-helpers';
import PropTypes from 'prop-types';

const randomiseCards = amount => randomise(
  [...Array(280)].map((_, i) => ({ cardId: i, color: '' }))
).slice(0, amount);

const Game = ({ teamColors, cardsAmount }) => {
  const isDuetGame = teamColors.length < 2;
  let cardColors = [
    {id: 'neutral', display: 'Neutral'},
    {id: 'black', display: 'Game Over'},
  ];
  teamColors.forEach(color => cardColors.unshift({ id: color, display: capitalizeFirstLetter(color) }));

  const getTeamObject = value => {
    const obj = {};
    teamColors.forEach(color => obj[color] = value);
    return obj;
  };

  const [cards, setCards] = React.useState(randomiseCards(cardsAmount));
  const [startingTeam, setStartingTeam] = React.useState('');
  const [teams, setTeams] = React.useState(getTeamObject([]));
  const [score, setScore] = React.useState(getTeamObject(0));

  const newGame = e => {
    e.preventDefault();
    setCards(randomiseCards(cardsAmount));
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
    const newTeam = [...teams[color]];
    newTeam.push(player);
    setTeams({
      ...teams,
      [color]: newTeam,
    });
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
    const allPlayers = teamColors.reduce((players, color) => [...players, ...teams[color]], []);
    const chunkedPlayers = chunkify(randomise(allPlayers), teamColors.length);
    let newTeams = {};
    teamColors.forEach((color, index) => newTeams[color] = chunkedPlayers[index] || []);
    setTeams(newTeams);
    resetScores();
  };

  const pickSpyMasters = () => {
    let newTeams = {};
    teamColors.forEach(color => {
      newTeams[color] = randomise(teams[color]);
    });
    setTeams(newTeams);
  };

  const scorePlayer = color => setScore({
    ...score,
    [color]: (score[color] + 1),
  });

  const resetScores = () => setScore(getTeamObject(0));
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
      cardColors,
      teamColors,
      isDuetGame,
    }}>
      <Board/>
    </GameContext.Provider>
  );
};

Game.propTypes = {
  teamColors: PropTypes.arrayOf(PropTypes.string),
  cardsAmount: PropTypes.number,
};

export default Game;

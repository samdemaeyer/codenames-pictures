import React from 'react';
import Card from './Card';
import TeamsModal from './TeamsModal';
import ScoreBoard from './ScoreBoard';
import TeamSummary from './TeamSummary';
import Menu from './Menu';
import randomise from '../utils/array-helpers';
import { getRandomInt } from '../utils/number-helpers';
import './Board.css';
import {Link} from 'react-router-dom';

class Board extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      cards: this.randomiseCards(),
      showTeamsModal: false,
      startingTeam: '',
      teams: {
        red: [],
        blue: [],
      },
      score: {
        red: 0,
        blue: 0,
      },
      spyMasters: {
        red: 0,
        blue: 0,
      },
    };
  }

  randomiseCards() {
    const defaultCard = { color: '' };
    return randomise(
      [...Array(280)].map((_, i) => ({ cardId: i, ...defaultCard }))
    ).slice(0, 20);
  }

  newGame = e => {
    e.preventDefault();
    this.setState({ cards: this.randomiseCards() });
    this.setState({ startingTeam: '' });
  };

  setColor = (card, color) => {
    const cards = [...this.state.cards];
    cards.forEach(c => {
      if (card === c) c.color = color;
    });
    this.setState({ cards });
  };

  toggleTeamsModal = () => {
    this.setState({ showTeamsModal: !this.state.showTeamsModal });
  };

  addPlayer = (color, player) => {
    const teams = {...this.state.teams};
    teams[color].push(player);
    this.setState({ teams });
  };

  updatePlayer = (color, newValue, index) => {
    const newArray = [...this.state.teams[color]];
    newArray[index] = newValue;
    this.setState({ teams: { ...this.state.teams, [color]: newArray } });
  };

  removePlayer = (color, index) => {
    const newArray = [...this.state.teams[color]];
    newArray.splice(index, 1);
    this.setState({ teams: { ...this.state.teams, [color]: newArray } });
  };

  shuffleTeams = () => {
    const allPlayers = randomise([...this.state.teams.red, ...this.state.teams.blue]);
    const roundFunction = Math.random() >= 0.5 ? Math.floor : Math.ceil;
    const breakAt = roundFunction(allPlayers.length / 2);
    this.setState({
      teams: {
        red: allPlayers.slice(0, breakAt),
        blue: allPlayers.slice(breakAt, allPlayers.length),
      },
    });
    this.resetScores();
    this.resetSpyMasters();
  };

  pickSpyMasters = () => {
    const {teams} = this.state;
    this.setState({
      spyMasters: {
        red: getRandomInt(teams.red.length),
        blue: getRandomInt(teams.blue.length),
      },
    });
  };

  resetSpyMasters = () => {
    this.setState({
      red: 0,
      blue: 0,
    });
  }

  isSpyMaster = (color, index) => {
    return this.state.spyMasters[color] === index;
  };

  scorePlayer = color => {
    this.setState({
      score: {
        ...this.state.score,
        [color]: (this.state.score[color] + 1),
      },
    });
  };

  resetScores = () => {
    this.setState({
      score: {
        red: 0,
        blue: 0,
      },
    });
  };

  getGuessedCardsAmount = color => {
    return this.state.cards.filter(card => card.color === color).length;
  };

  render() {
    const { showTeamsModal, teams, score, cards, startingTeam } = this.state;
    const teamSummaryProps = {
      teams,
      startingTeam,
      isSpyMaster: this.isSpyMaster,
      getGuessedCards: this.getGuessedCardsAmount,
    };

    return (
      <div>
        <ScoreBoard
          teams={teams}
          score={score}
          addScore={this.scorePlayer}
          getGuessedCards={this.getGuessedCardsAmount}
        />
        {showTeamsModal ? (
          <TeamsModal
            teams={teams}
            startingTeam={startingTeam}
            addPlayer={this.addPlayer}
            updatePlayer={this.updatePlayer}
            removePlayer={this.removePlayer}
            shuffleTeams={this.shuffleTeams}
            toggleTeamsModal={this.toggleTeamsModal}
            pickSpyMasters={this.pickSpyMasters}
            setStaringTeam={color => this.setState({ startingTeam: color })}
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
                  setColor={this.setColor}
                />
              ))}
            </div>
            <div className="side-wrapper">
              <div className="teams-summary">
                <TeamSummary color="red" {...teamSummaryProps}/>
                <TeamSummary color="blue" {...teamSummaryProps}/>
              </div>
              <Menu>
                <Link to="#" onClick={this.toggleTeamsModal}>
                  Teams
                </Link>
                <Link target="_blank" to={`/spy-master/${Math.floor(Math.random() * 100)}`}>
                  Spy Master
                </Link>
                <Link to="#" onClick={this.newGame}>
                  New Game
                </Link>
                <Link to="/">
                  Rules
                </Link>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;

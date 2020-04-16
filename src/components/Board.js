import React from 'react';
import Card from './Card';
import TeamsModal from './TeamsModal';
import ScoreBoard from './ScoreBoard';
import TeamSummary from './TeamSummary';
import ActionsMenu from './ActionsMenu';
import randomise from '../utils/array-helpers';
import { getRandomInt } from "../utils/number-helpers";
import './Board.css';

class Board extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: this.randomiseCards(),
      showTeamsModal: false,
      actionsExpanded: false,
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
        blue: 0
      }
    };
  }

  randomiseCards() {
    const defaultCard = {
      cardIsExpanded: false,
      contextMenuExpanded: false,
      color: '',
    };
    return randomise(
      [...Array(280)].map((_, i) => ({ cardId: i, ...defaultCard }))
    ).slice(0, 20);
  }

  toggleExpandCard(card) {
    this.resetCards(card);
    const cards = this.state.cards.concat();
    cards.forEach(c => {
      if (c.cardId === card.cardId) c.cardIsExpanded = !c.cardIsExpanded;
    });
    this.setState({ cards });
  }

  onContextMenu(card, e) {
    e.preventDefault();
    this.resetCards();
    const cards = this.state.cards.concat();
    cards.forEach(c => {
      if (c.cardId === card.cardId) c.contextMenuExpanded = !c.contextMenuExpanded;
    });
    this.setState({ cards });
  }

  resetAll(e) {
    if (e.target.className !== 'dropdown-trigger') {
      this.setState({ actionsExpanded: false });
    }
    if (e.target.parentElement.className === 'card') {
      return;
    }
    this.resetCards();
  }

  resetCards(card = {}) {
    const cards = this.state.cards.concat();
    cards.forEach(c => {
      if (c.cardId !== card.cardId) {
        c.cardIsExpanded = false;
        c.contextMenuExpanded = false;
      }
    });
    this.setState({ cards });
  }

  newGame(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({ cards: this.randomiseCards() });
    this.toggleExpandActions();
  }

  resetColor(card) {
    if (document.selection && document.selection.empty) {
      document.selection.empty();
    } else if (window.getSelection) {
      const sel = window.getSelection();
      sel.removeAllRanges();
    }
    card.color = '';
    this.setState({ cards: this.state.cards });
  }

  toggleTeamsModal(e) {
    e.preventDefault();
    this.setState({ showTeamsModal: !this.state.showTeamsModal });
  }

  toggleExpandActions() {
    this.setState({ actionsExpanded: !this.state.actionsExpanded });
  }

  addPlayer(color, player) {
    const teams = {...this.state.teams};
    teams[color].push(player);
    this.setState({ teams });
  }

  updatePlayer(color, newValue, index) {
    const newArray = [...this.state.teams[color]];
    newArray[index] = newValue;
    this.setState({ teams: { ...this.state.teams, [color]: newArray } });
  }

  removePlayer(color, index) {
    const newArray = [...this.state.teams[color]];
    newArray.splice(index, 1);
    this.setState({ teams: { ...this.state.teams, [color]: newArray } });
  }

  shuffleTeams() {
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
    this.pickSpyMasters();
  }

  pickSpyMasters() {
    const {teams} = this.state;
    this.setState({
      spyMasters: {
        red: getRandomInt(teams.red.length),
        blue: getRandomInt(teams.blue.length),
      },
    })
  }

  isSpyMaster(color, index) {
    return this.state.spyMasters[color] === index;
  }

  scorePlayer(color) {
    this.setState({
      score: {
        ...this.state.score,
        [color]: (this.state.score[color] + 1),
      },
    })
  }

  resetScores() {
    this.setState({
      score: {
        red: 0,
        blue: 0,
      },
    })
  }

  getGuessedCardsAmount(color) {
    return this.state.cards.filter(card => card.color === color).length
  }

  render() {
    const { showTeamsModal, teams, score, cards } = this.state;
    const teamSummaryProps = {
      teams,
      isSpyMaster: (color, index) => this.isSpyMaster(color, index),
      getGuessedCards: color => this.getGuessedCardsAmount(color),
    };

    return (
      <div>
        <ScoreBoard
          teams={teams}
          score={score}
          addScore={color => this.scorePlayer(color)}
          getGuessedCards={color => this.getGuessedCardsAmount(color)}
        />
        {showTeamsModal ? (
          <TeamsModal
            teams={teams}
            addPlayer={(color, player) => this.addPlayer(color, player)}
            updatePlayer={(color, newValue, player) =>
              this.updatePlayer(color, newValue, player)
            }
            removePlayer={(color, index) => this.removePlayer(color, index)}
            shuffleTeams={() => this.shuffleTeams()}
            toggleTeamsModal={e => this.toggleTeamsModal(e)}
            pickSpyMasters={() => this.pickSpyMasters()}
          />
        ) : null}
        <div className="container" onClick={e => this.resetAll(e)}>
          <div className="inner-container">
            <div className="grid">
              {cards.map((card, index) => (
                <Card
                  key={card.cardId}
                  card={card}
                  index={index + 1}
                  resetColor={() => this.resetColor(card)}
                  onClick={() => this.toggleExpandCard(card)}
                  onContextMenu={e => this.onContextMenu(card, e)}
                />
              ))}
            </div>
            <div className="side-wrapper">
              <div className="teams-summary">
                <TeamSummary color="red" {...teamSummaryProps}/>
                <TeamSummary color="blue" {...teamSummaryProps}/>
              </div>
              <ActionsMenu
                actionsExpanded={this.state.actionsExpanded}
                toggleTeamsModal={e => this.toggleTeamsModal(e)}
                newGame={e => this.newGame(e)}
                toggleExpandActions={() => this.toggleExpandActions()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;

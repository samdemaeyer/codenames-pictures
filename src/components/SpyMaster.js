import React from 'react';
import PropTypes from 'prop-types';
import './SpyMaster.css';

class SpyMaster extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      card: null,
      spyCardId: '',
      spyCardIdToDisplay: '',
      cardNotFound: false,
      showInput: false,
      cards: [],
    }
  }

  async componentDidMount() {
    const results = await fetch('/codenames-pictures/spy-master-cards.json');
    const cards = await results.json();
    const spyCardId = this.props.match.params.spyCardId;
    const card = cards.find(({ id }) => id === spyCardId);
    this.setState({
      card,
      cards,
      spyCardId,
      cardNotFound: !card,
      spyCardIdToDisplay: spyCardId,
    });
  }

  toggleInput(e) {
    e.preventDefault();
    this.setState({ showInput: !this.state.showInput });
  }

  findCard(e) {
    e.preventDefault();
    this.setState({ spyCardIdToDisplay: this.state.spyCardId });
    this.props.history.push(this.state.spyCardId);
    const card = this.state.cards.find(({ id }) => id === this.state.spyCardId);
    this.setState({ card, showInput: false, cardNotFound: !card });
  }

  changeSpyCardInput({ target }) {
    this.setState({ spyCardId: target.value });
  }

  render() {
    return (
      <div>
        <div className="find-card-wrapper">
          <p>Looking for a card? <a href="#" onClick={e => this.toggleInput(e)}>Click here</a> to find a specific card</p>
          {this.state.showInput ?
            <form onSubmit={e => this.findCard(e)}>
              <input className="input" value={this.state.spyCardId} onChange={e => this.changeSpyCardInput(e)} />
              <button className="btn blue">Search</button>
            </form>
            : null}
        </div>
        {this.state.card ?
          <div className="container spy-master">
            <h1 className="title">Spy master card: {this.state.spyCardIdToDisplay}</h1>
            <div className="card-container">
              <div className={`starting-color ${this.state.card.startingColor}`}></div>
              <div className="spy-grid">
                {this.state.card.cells.map(({ color }, index) => (
                  <div className={`card ${color}`} key={index}></div>
                ))}
              </div>
              <div className={`starting-color ${this.state.card.startingColor}`}></div>
            </div>
          </div> : null}
        {this.state.cardNotFound ?
          <div className="container spy-master">
            <h1 className="title">Spy master card &quot;{this.state.spyCardIdToDisplay}&quot; not found</h1>
          </div> : null}
      </div>
    );
  }
}

SpyMaster.propTypes = {
  match: PropTypes.object,
  history: PropTypes.array,
};

export default SpyMaster;

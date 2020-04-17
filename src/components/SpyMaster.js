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

  toggleInput = e => {
    e.preventDefault();
    this.setState({ showInput: !this.state.showInput });
  };

  findCard = e => {
    e.preventDefault();
    this.setState({ spyCardIdToDisplay: this.state.spyCardId });
    this.props.history.push(this.state.spyCardId);
    const card = this.state.cards.find(({ id }) => id === this.state.spyCardId);
    this.setState({ card, showInput: false, cardNotFound: !card });
  };

  changeSpyCardInput = ({ target }) => {
    this.setState({ spyCardId: target.value });
  };

  render() {
    const { card, showInput, spyCardId, spyCardIdToDisplay, startingColor, cardNotFound } = this.state;

    return (
      <div>
        <div className="find-card-wrapper">
          <p>Looking for a card? <a href="#" onClick={this.toggleInput}>Click here</a> to find a specific card</p>
          {showInput && <form onSubmit={this.findCard}>
            <input className="input" value={spyCardId} onChange={this.changeSpyCardInput} />
            <button className="btn blue">Search</button>
          </form>}
        </div>

        {card && <div className="container spy-master">
          <h1 className="title">Spy master card: {spyCardIdToDisplay}</h1>
          <div className="card-container">
            <div className={`starting-color ${startingColor}`}/>
            <div className="spy-grid">
              {card.cells.map(({ color }, index) => (
                <div className={`card ${color}`} key={index}/>
              ))}
            </div>
            <div className={`starting-color ${startingColor}`}/>
          </div>
        </div>}

        {cardNotFound && <div className="container spy-master">
          <h1 className="title">Spy master card &quot;{spyCardIdToDisplay}&quot; not found</h1>
        </div>}
      </div>
    );
  }
}

SpyMaster.propTypes = {
  match: PropTypes.object,
  history: PropTypes.array,
};

export default SpyMaster;

import React from 'react';
import './SpyMaster.css';

class SpyMaster extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      card: null,
      cardNotFound: false
    }
  }

  async componentDidMount() {
    const results = await fetch('/spy-cards.json');
    const cards = await results.json();
    const card = cards.find(({ id }) => id === this.props.match.params.spyId);
    card ? this.setState({ card }) : this.setState({ cardNotFound: true });
  }

  render() {
    return (
      <div>
        {this.state.card ?
          <div className="container spy-master">
            <h1 className="title">Spy card: {this.props.match.params.spyId}</h1>
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
          <div className="container">
            {this.state.cardNotFound ? <h1 className="title">Spy card "{this.props.match.params.spyId}" not found</h1> : null}
          </div>
      </div>
    );
  }
}


export default SpyMaster;

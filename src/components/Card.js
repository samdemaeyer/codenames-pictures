import React from 'react';
import './Card.css';

class Card extends React.Component {
  setColor(color, { target }) {
    const card = target.closest('.card');
    this.props.card.color = color;
    this.setState({
      cardHeight: card.offsetHeight - 10,
      cardWidth: card.offsetWidth - 10,
    });
  }

  render() {
    const { cardId, cardIsExpanded, contextMenuExpanded } = this.props.card;
    return (
      <div onContextMenu={this.props.onContextMenu} className="card">
        {this.props.card.color ?
          <div
            className={`overlay ${this.props.card.color}`}
            onDoubleClick={this.props.resetColor}
            style={{ height: this.state.cardHeight, width: this.state.cardWidth }}
          ></div>
          : null}
        <img
          onClick={this.props.onClick}
          src={`/codenames-pictures/cards/card-${cardId}.jpg`}
          className={`card-img ${cardIsExpanded ? 'expanded' : ''}`}
        />
        {contextMenuExpanded ?
          <div className="context-menu">
            <p className="menu-action red" onClick={e => this.setColor('red', e)}>Red</p>
            <p className="menu-action blue" onClick={e => this.setColor('blue', e)}>Blue</p>
            <p className="menu-action neutral" onClick={e => this.setColor('neutral', e)}>Neutral</p>
            <p className="menu-action black" onClick={e => this.setColor('black', e)}>Game Over</p>
          </div> : null}
      </div>
    );
  }
}

export default Card;

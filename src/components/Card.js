import React from 'react';
import './Card.css';

class Card extends React.Component {
  setColor(color) {
    this.props.card.color = color;
  }

  render() {
    const { cardId, cardIsExpanded, contextMenuExpanded } = this.props.card;
    return (
      <div onContextMenu={this.props.onContextMenu} className="card">
        {this.props.card.color ? <div className={`overlay ${this.props.card.color}`} onDoubleClick={this.props.resetColor}></div> : null}
        <img
          onClick={this.props.onClick}
          src={`/codenames-pictures/cards/card-${cardId}.jpg`}
          className={`card-img ${cardIsExpanded ? 'expanded' : ''}`}
        />
        {contextMenuExpanded ?
          <div className="context-menu">
            <p className="menu-action red" onClick={() => this.setColor('red')}>Red</p>
            <p className="menu-action blue" onClick={() => this.setColor('blue')}>Blue</p>
            <p className="menu-action neutral" onClick={() => this.setColor('neutral')}>Neutral</p>
            <p className="menu-action black" onClick={() => this.setColor('black')}>Game Over</p>
          </div> : null}
      </div>
    );
  }
}

export default Card;

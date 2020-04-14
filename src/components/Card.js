import React from 'react';
import PropTypes from 'prop-types';
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
        <h5 className="card-id">{this.props.index}</h5>
        {this.props.card.color ?
          <div
            className={`overlay ${this.props.card.color}`}
            onDoubleClick={this.props.resetColor}
            style={{ height: this.state.cardHeight, width: this.state.cardWidth }}
          ></div>
          : null}
        <img
          onClick={this.props.onClick}
          src={`/codenames-pictures/images/cards/card-${cardId}.jpg`}
          className={`card-img ${cardIsExpanded ? 'expanded' : ''}`}
          alt={`codename card-${cardId}`}
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

Card.propTypes = {
  card: PropTypes.objectOf(PropTypes.string),
  onContextMenu: PropTypes.func,
  index: PropTypes.number,
  resetColor: PropTypes.func,
  onClick: PropTypes.func,
};

export default Card;

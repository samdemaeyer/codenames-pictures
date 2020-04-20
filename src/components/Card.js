import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import OutsideClickHandler from './OutsideClickHandler';
import CardContextMenu from './CardContextMenu';

class Card extends OutsideClickHandler {

  constructor() {
    super(...arguments);
    this.state = {
      enlarged: false,
      showMenu: false,
    };
  }

  toggleEnlargeCard = () => {
    this.setState({ enlarged: !this.state.enlarged });
  }

  minimizeCard = () => {
    this.setState({ enlarged: false });
  };

  showMenu = e => {
    e.preventDefault();
    this.minimizeCard();
    this.setState({showMenu: true});
  };

  hideMenu = () => {
    this.setState({showMenu: false});
  };

  onOutsideClick() {
    this.minimizeCard();
  }

  setColor = color => {
    const { setColor, card } = this.props;
    setColor(card, color);
  };

  resetColor = () => { this.setColor(''); };

  render() {
    const { index, card: { cardId, color } } = this.props;
    const { enlarged, showMenu } = this.state;

    return (
      <div onContextMenu={this.showMenu} className="card" ref={ref => this.ref = ref}>
        <h5 className="card-id badge">{index}</h5>

        {color &&
          <div
            className={`overlay ${color}`}
            onDoubleClick={this.resetColor}
          />}
        <button onClick={this.toggleEnlargeCard} className="no-style">
          <img
            src={`/codenames-pictures/images/cards/card-${cardId}.jpg`}
            className={`card-img ${enlarged ? 'enlarged' : ''}`}
            alt={`codename card-${cardId}`}
          />
        </button>

        {showMenu && <CardContextMenu hideMenu={this.hideMenu} setColor={this.setColor}/>}
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  setColor: PropTypes.func,
};

export default Card;

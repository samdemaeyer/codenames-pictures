import React from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from './OutsideClickHandler';
import './CardContextMenu.css';

class CardContextMenu extends OutsideClickHandler {

    colors = [
      {id: 'red', display: 'Red'},
      {id: 'blue', display: 'Blue'},
      {id: 'neutral', display: 'Neutral'},
      {id: 'black', display: 'Game Over'},
    ];

    setColor(color) {
      const { hideMenu, setColor } = this.props;
      hideMenu();
      setColor(color);
    }

    onOutsideClick() {
      this.props.hideMenu();
    }

    render() {
      return (
        <div className="context-menu" ref={ref => this.ref = ref}>
          {this.colors.map(color =>
            <button
              key={color.id}
              className={`menu-action ${color.id}`}
              onClick={() => this.setColor(color.id)}
            >
              {color.display}
            </button>)
          }
        </div>
      );
    }
}

CardContextMenu.propTypes = {
  hideMenu: PropTypes.func,
  setColor: PropTypes.func,
};

export default CardContextMenu;

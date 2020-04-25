import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import CardContextMenu from './CardContextMenu';
import useOutsideClickListener from '../hooks/useOutsideClickListener';
import classNames from 'classnames';

const Card = ({index, card, setColor}) => {
  const {cardId, color} = card;
  const [enlarged, setEnlargement] = React.useState(false);
  const [menuVisible, setMenuVisible] = React.useState(false);
  const container = React.useRef(null);
  useOutsideClickListener(container, () => setEnlargement(false));

  const showMenu = e => {
    e.preventDefault();
    setEnlargement(false);
    setMenuVisible(true);
  };

  const setCardColor = color => setColor(card, color);
  const resetColor = () => setCardColor('');

  return (
    <div
      onContextMenu={showMenu}
      className={classNames('card', {
        'selected': !!color,
        [color]: !!color,
      })}
      ref={container}
      onDoubleClick={resetColor}
    >
      <h5 className="card-id badge">{index}</h5>

      <button onClick={() => setEnlargement(!enlarged)} className="no-style">
        <img
          src={`/codenames-pictures/images/cards/card-${cardId}.jpg`}
          className={classNames('card-img', {'enlarged': enlarged})}
          alt={`codename card-${cardId}`}
        />
      </button>

      {menuVisible && <CardContextMenu
        hideMenu={() => setMenuVisible(false)}
        setColor={setCardColor}
      />}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  setColor: PropTypes.func,
};

export default Card;

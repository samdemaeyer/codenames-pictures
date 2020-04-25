import React from 'react';
import PropTypes from 'prop-types';
import './CardContextMenu.scss';
import useOutsideClickListener from '../hooks/useOutsideClickListener';
import classNames from 'classnames';
import GameContext from '../contexts/gameContext';

const CardContextMenu = ({hideMenu, setColor}) => {
  const container = React.useRef(null);
  const {cardColors} = React.useContext(GameContext);
  useOutsideClickListener(container, hideMenu);
    
  const setCardColor = color => {
    hideMenu();
    setColor(color);  
  };
    
  return (
    <div className="CardContextMenu" ref={container}>
      {cardColors.map(color => <button
        key={color.id}
        className={classNames('menu-action', color.id)}
        onClick={() => setCardColor(color.id)}
      >
        {color.display}
      </button>)}
    </div>
  );
};

CardContextMenu.propTypes = {
  hideMenu: PropTypes.func,
  setColor: PropTypes.func,
};

export default CardContextMenu;

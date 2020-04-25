import React from 'react';
import PropTypes from 'prop-types';
import './CardContextMenu.css';
import useOutsideClickListener from '../hooks/useOutsideClickListener';
import classNames from 'classnames';

const colors = [
  {id: 'red', display: 'Red'},
  {id: 'blue', display: 'Blue'},
  {id: 'neutral', display: 'Neutral'},
  {id: 'black', display: 'Game Over'},
];

const CardContextMenu = ({hideMenu, setColor}) => {
  const container = React.useRef(null);
  useOutsideClickListener(container, hideMenu);
    
  const setCardColor = color => {
    hideMenu();
    setColor(color);  
  };
    
  return (
    <div className="context-menu" ref={container}>
      {colors.map(color => <button
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

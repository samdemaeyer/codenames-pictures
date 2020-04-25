import React from 'react';
import './Menu.css';
import useOutsideClickListener from '../hooks/useOutsideClickListener';
import PropTypes from 'prop-types';

const Menu = ({children}) => {
  const [expanded, setExpanded] = React.useState(false);
  const container = React.useRef(null);
  const onOutsideClick = () => setExpanded(false);
  useOutsideClickListener(container, onOutsideClick);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <button
      className={`menu ${expanded ? 'expanded' : ''}`}
      onClick={toggleExpand}
      ref={container}
    >
      <div className="menu-content">
        {children.map((option, index) =>
          <div
            className="menu-item"
            key={index}
            onClick={toggleExpand}
            onKeyPress={toggleExpand}
            role="button"
            tabIndex={index}
          >
            {option}
          </div>)}
      </div>
      <div className="menu-trigger">Menu</div>
    </button>
  );
};

Menu.propTypes = {
  children: PropTypes.array,
};

export default Menu;

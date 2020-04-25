import React from 'react';
import './Menu.scss';
import useOutsideClickListener from '../../hooks/useOutsideClickListener';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface IProps {
  children?:any;
}

const Menu:React.FC<IProps> = ({children}) => {
  const [expanded, setExpanded] = React.useState(false);
  const container = React.useRef(null);
  const onOutsideClick = () => setExpanded(false);
  const toggleExpand = () => setExpanded(!expanded);
  useOutsideClickListener(container, onOutsideClick);

  return (
    <button
      className={classNames('Menu', {'expanded': expanded})}
      onClick={toggleExpand}
      ref={container}
    >
      {expanded && <div className="menu-content">
        {children.map((option:any, index:number) =>
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
      </div>}
      <div className="menu-trigger">Menu</div>
    </button>
  );
};

Menu.propTypes = {
  children: PropTypes.array,
};

export default Menu;

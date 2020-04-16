import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ActionsMenu.css';

class ActionsMenu extends React.Component {
  render() {
    return (
      <div
        className={`actions-dropdown ${this.props.actionsExpanded ? 'expanded' : ''}`}
        onClick={() => this.props.toggleExpandActions()}
      >
        <div className="dropdown-content">
          <a href="#" className="dropdown-item" onClick={e => this.props.toggleTeamsModal(e)}>
            Teams
          </a>
          <Link className="dropdown-item" target="_blank" to={`/spy-master/${Math.floor(Math.random() * 100)}`}>
            Spy Master
          </Link>
          <a href="#" className="dropdown-item" onClick={e => this.props.newGame(e)}>
            New Game
          </a>
          <Link className="dropdown-item" to="/">
            Rules
          </Link>
        </div>
        <div className="dropdown-trigger">Menu</div>
      </div>
    );
  }
}

ActionsMenu.propTypes = {
  actionsExpanded: PropTypes.bool,
  toggleExpandActions: PropTypes.func,
  toggleTeamsModal: PropTypes.func,
  newGame: PropTypes.func,
}

export default ActionsMenu;

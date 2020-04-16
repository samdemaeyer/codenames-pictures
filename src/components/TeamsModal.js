import React from 'react';
import PropTypes from 'prop-types';
import './TeamsModal.css';
import Team from './Team';

class TeamsModal extends React.Component {

  render() {
    const { toggleTeamsModal, shuffleTeams} = this.props;

    return (
      <div className="modal">
        <div className="modal-content">
          <button className="close-modal" onClick={toggleTeamsModal}>x</button>
          <h3 className="modal-title">Setup your teams</h3>
          <div className="teams-wrapper">
            <Team teamColor="red" {...this.props}/>
            <Team teamColor="blue" {...this.props}/>
          </div>
          <div className="button-wrapper">
            <button className="btn blue" onClick={shuffleTeams}>Shuffle teams</button>
          </div>
        </div>
      </div>
    );
  }
}

TeamsModal.propTypes = {
  addPlayer: PropTypes.func,
  toggleTeamsModal: PropTypes.func,
  updatePlayer: PropTypes.func,
  removePlayer: PropTypes.func,
  shuffleTeams: PropTypes.func,
  teams: PropTypes.object,
};

export default TeamsModal;

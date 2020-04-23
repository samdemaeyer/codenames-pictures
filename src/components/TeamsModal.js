import React from 'react';
import PropTypes from 'prop-types';
import './TeamsModal.css';
import Team from './Team';

const TeamsModal = props => {
  const { toggleTeamsModal, shuffleTeams, pickSpyMasters} = props;

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal" onClick={toggleTeamsModal}>x</button>
        <h3 className="modal-title">Setup your teams</h3>
        <div className="teams-wrapper">
          <Team teamColor="red" {...props}/>
          <Team teamColor="blue" {...props}/>
        </div>
        <div className="button-wrapper">
          <button className="btn blue" onClick={shuffleTeams}>Shuffle teams</button>
          <button className="btn" onClick={pickSpyMasters}>Pick spy masters</button>
        </div>
      </div>
    </div>
  );
};

TeamsModal.propTypes = {
  addPlayer: PropTypes.func,
  toggleTeamsModal: PropTypes.func,
  updatePlayer: PropTypes.func,
  removePlayer: PropTypes.func,
  shuffleTeams: PropTypes.func,
  pickSpyMasters: PropTypes.func,
  teams: PropTypes.object,
};

export default TeamsModal;

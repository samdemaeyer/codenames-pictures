import React from 'react';
import PropTypes from 'prop-types';
import './TeamsModal.css';
import Team from './Team';
import GameContext from '../contexts/gameContext';

const TeamsModal = ({toggleTeamsModal}) => {
  const { shuffleTeams, pickSpyMasters } = React.useContext(GameContext);

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-modal" onClick={toggleTeamsModal}>x</button>
        <h3 className="modal-title">Setup your teams</h3>
        <div className="teams-wrapper">
          <Team teamColor="red"/>
          <Team teamColor="blue"/>
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

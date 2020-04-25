import React from 'react';
import PropTypes from 'prop-types';
import './TeamsModal.scss';
import TeamSetup from './TeamSetup';
import GameContext from '../contexts/gameContext';
import Modal from './library/Modal';

const TeamsModal = ({toggleTeamsModal}) => {
  const { shuffleTeams, pickSpyMasters, teamColors, isDuetGame } = React.useContext(GameContext);

  return (
    <Modal
      title={`Setup your ${isDuetGame ? 'team': 'teams'}`}
      classname="TeamsModal"
      onCloseModal={toggleTeamsModal}
    >
      <div className="teams-wrapper">
        {teamColors.map(color => <TeamSetup color={color} key={color}/>)}
      </div>
      {!isDuetGame && <div className="button-wrapper">
        <button className="btn blue" onClick={shuffleTeams}>Shuffle teams</button>
        <button className="btn" onClick={pickSpyMasters}>Pick spy masters</button>
      </div>}
    </Modal>
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

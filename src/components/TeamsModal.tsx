import React from 'react';
import './TeamsModal.scss';
import TeamSetup from './TeamSetup';
import GameContext from '../contexts/gameContext';
import Modal from './library/Modal';
import {IGameContext} from '../interfaces/Game';

interface IProps {
  onCloseModal: () => void;
}

const TeamsModal:React.FC<IProps> = ({onCloseModal}) => {
  const { shuffleTeams, pickSpyMasters, teamColors, isDuetGame } = React.useContext<IGameContext>(GameContext);

  return (
    <Modal
      title={`Setup your ${isDuetGame ? 'team': 'teams'}`}
      classname="TeamsModal"
      onCloseModal={onCloseModal}
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

export default TeamsModal;

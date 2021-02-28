import React, { useContext, FC } from 'react'
import 'components/TeamsModal.scss'
import TeamSetup from 'components/TeamSetup'
import GameContext from 'contexts/gameContext'
import Modal from 'components/library/Modal'
import { IGameContext } from 'interfaces/Game'

interface IProps {
  onCloseModal: () => void
}

const TeamsModal: FC<IProps> = ({ onCloseModal }) => {
  const { shuffleTeams, pickSpyMasters, teamColors, isDuetGame } = useContext<IGameContext>(GameContext)

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
  )
}

export default TeamsModal

import React, { useContext, useState, FC } from 'react'
import { Link } from 'react-router-dom'
import TeamsModal from 'components/TeamsModal'
import ScoreBoard from 'components/ScoreBoard'
import TeamSummary from 'components/TeamSummary'
import Menu from 'components/library/Menu'
import GameContext from 'contexts/gameContext'
import CardGrid from 'components/CardGrid'
import { IGameContext, TeamColor } from 'interfaces/Game'
import { getRandomInt } from 'utils/number-helpers'
import 'components/Board.scss'

const Board: FC = () => {
  const { newGame, teamColors } = useContext<IGameContext>(GameContext)
  const [showTeamsModal, setShowTeamsModal] = useState<boolean>(false)
  const toggleTeamsModal = () => setShowTeamsModal(!showTeamsModal)

  return (
    <>
      <ScoreBoard/>
      {showTeamsModal && <TeamsModal onCloseModal={toggleTeamsModal}/>}
      <div className="container">
        <div className="inner-container">
          <CardGrid/>
          <div className="side-wrapper">
            <div className="teams-summary">
              {teamColors.map((color: TeamColor) => <TeamSummary key={color} color={color}/>)}
            </div>
            <Menu>
              <Link to="#" onClick={toggleTeamsModal}>
                  Teams
              </Link>
              <Link target="_blank" to={`/spy-master/${getRandomInt(101)}`}>
                  Spy Master
              </Link>
              <Link to="#" onClick={newGame}>
                  New Game
              </Link>
              <Link target="_blank" to="/">
                  Rules
              </Link>
            </Menu>
          </div>
        </div>
      </div>
    </>
  )
}

export default Board

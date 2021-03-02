import React, { useState, useContext, FC } from 'react'
import classNames from 'classnames'
import TeamScore from 'components/TeamScore'
import GameContext from 'contexts/gameContext'
import { TeamColor } from 'interfaces/Game'
import 'components/ScoreBoard.scss'

const ScoreBoard: FC = () => {
  const [expanded, setExpanded] = useState(false)
  const { teams, isDuetGame, teamColors } = useContext(GameContext)
  const teamsSetup = teamColors.every((color: TeamColor) => teams[color].length > 0)

  if (!teamsSetup || isDuetGame)
    return null

  return (
    <div
      className={classNames('ScoreBoard', { 'expanded': expanded })}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="score-wrapper">
        {teamColors.map((color: TeamColor) => <TeamScore color={color} key={color}/>)}
      </div>
    </div>
  )
}

export default ScoreBoard

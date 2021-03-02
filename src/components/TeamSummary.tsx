import React, { useContext, FC } from 'react'
import classNames from 'classnames'
import GameContext from 'contexts/gameContext'
import Badge from 'components/library/Badge'
import { TeamColor } from 'interfaces/Game'
import 'components/TeamSummary.scss'

interface IProps {
  color: TeamColor
}

const TeamSummary: FC<IProps> = ({ color }) => {
  const { teams, getGuessedCardsAmount, startingTeam, isDuetGame } = useContext(GameContext)
  const currentStaringTeam = startingTeam === color
  const totalCards = isDuetGame ? 15 : currentStaringTeam ? 8 : 7

  return (
    <div className={'TeamSummary'}>
      {!!teams[color].length &&
        <>
          <h3 className={classNames('team-title', `text-${color}`)}>
            Team {color}
            <Badge>
              {getGuessedCardsAmount(color)}
              {(startingTeam || isDuetGame) && <>/{totalCards}</>}
            </Badge>
          </h3>
          <ul className="names">
            {teams[color].map((player: string, index: number) => {
              const isSpyMaster = index === 0 && !isDuetGame
              return <li key={index} className={classNames({
                'spymaster': isSpyMaster,
                [`text-${color}`]: isSpyMaster,
              })}>
                {isSpyMaster && '>'} {player}
              </li>
            })}
          </ul>
        </>}
    </div>
  )
}

export default TeamSummary

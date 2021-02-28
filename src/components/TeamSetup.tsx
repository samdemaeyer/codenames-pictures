import React, { useContext, useState, FC, FormEvent } from 'react'
import classNames from 'classnames'
import GameContext from 'contexts/gameContext'
import { IGameContext, TeamColor } from 'interfaces/Game'
import 'components/TeamSetup.scss'

interface IProps {
  color: TeamColor
}

const TeamSetup: FC<IProps> = ({ color }) => {
  const {
    teams,
    startingTeam,
    setStartingTeam,
    addPlayer,
    updatePlayer,
    removePlayer,
  } = useContext<IGameContext>(GameContext)
  const [newPlayer, setNewPlayer] = useState<string>('')

  const addNewPlayer = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (!newPlayer) return
    addPlayer(color, newPlayer)
    setNewPlayer('')
  }

  const updateExistingPlayer = (player: string, idx: number) => updatePlayer(color, player, idx)
  const currentStaringTeam = startingTeam === color

  return (
    <div className={'TeamSetup'}>
      <h3 className={classNames('team-title', `text-${color}`)}>
          Team {color}
        <button
          className={classNames('starting-team', color, { 'active': currentStaringTeam })}
          onClick={() => setStartingTeam(color)}
        />
      </h3>
      <form onSubmit={addNewPlayer}>
        <div className="players">
          {teams[color].map((player, index) => (
            <div className="player-wrap" key={index}>
              <input
                value={player}
                onChange={({ target: { value } }) => updateExistingPlayer(value, index)}
              />
              <button
                type="button"
                onClick={() => removePlayer(color, index)}
                className="remove-player">x</button>
            </div>
          ))}
        </div>
        <input
          value={newPlayer}
          onChange={({ target: { value } }) => setNewPlayer(value)}
        />
        <button type="submit" className="btn">Add player</button>
      </form>
    </div>
  )
}

export default TeamSetup

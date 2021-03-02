import React, { useContext, FC } from 'react'
import Card from 'components/Card'
import GameContext from 'contexts/gameContext'
import { ICard, IGameContext } from 'interfaces/Game'
import 'components/CardGrid.scss'

const CardGrid: FC = () => {
  const { cards } = useContext<IGameContext>(GameContext)

  return (
    <div className="CardGrid">
      {cards.map((card: ICard, index: number) => (
        <Card
          key={card.cardId}
          card={card}
          index={index + 1}
        />
      ))}
    </div>
  )
}

export default CardGrid

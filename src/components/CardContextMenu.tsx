import React, { useRef, useContext, FC } from 'react'
import classNames from 'classnames'
import useOutsideClickListener from 'hooks/useOutsideClickListener'
import GameContext from 'contexts/gameContext'
import { CardColor, ICardColor, IGameContext } from 'interfaces/Game'
import 'components/CardContextMenu.scss'

interface IProps {
  hideMenu: () => void
  setColor: (color: CardColor) => void
}

const CardContextMenu: FC<IProps> = ({ hideMenu, setColor }) => {
  const container = useRef<HTMLDivElement>(null)
  const { cardColors } = useContext<IGameContext>(GameContext)
  useOutsideClickListener(container, hideMenu)

  const setCardColor = (color: CardColor) => {
    hideMenu()
    setColor(color)
  }

  return (
    <div className="CardContextMenu" ref={container}>
      {cardColors.map((color: ICardColor) => <button
        key={color.id}
        className={classNames('menu-action', color.id)}
        onClick={() => setCardColor(color.id)}
      >
        {color.display}
      </button>)}
    </div>
  )
}

export default CardContextMenu

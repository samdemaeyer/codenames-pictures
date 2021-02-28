import React from 'react'
import 'components/CardContextMenu.scss'
import useOutsideClickListener from 'hooks/useOutsideClickListener'
import classNames from 'classnames'
import GameContext from 'contexts/gameContext'
import { CardColor, ICardColor, IGameContext } from 'interfaces/Game'

interface IProps {
  hideMenu: () => void
  setColor: (color: CardColor) => void
}

const CardContextMenu: React.FC<IProps> = ({ hideMenu, setColor }) => {
  const container = React.useRef(null)
  const { cardColors } = React.useContext<IGameContext>(GameContext)
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

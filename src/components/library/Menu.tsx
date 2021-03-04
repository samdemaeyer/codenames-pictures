import React, { useState, useRef, FC } from 'react'
import classNames from 'classnames'
import useOutsideClickListener from 'hooks/useOutsideClickListener'
import 'components/library/Menu.scss'

interface IProps {
  children: JSX.Element[]
}

const Menu: FC<IProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(false)
  const container = useRef<HTMLButtonElement>(null)
  const onOutsideClick = () => setExpanded(false)
  const toggleExpand = () => setExpanded(!expanded)
  useOutsideClickListener(container, onOutsideClick)

  return (
    <button
      className={classNames('Menu', { 'expanded': expanded })}
      onClick={toggleExpand}
      ref={container}
      data-testing="menu-button"
    >
      {expanded && <div className="menu-content">
        {children.map((option: JSX.Element, index: number) =>
          <div
            className="menu-item"
            key={index}
            onClick={toggleExpand}
            onKeyPress={toggleExpand}
            role="button"
            tabIndex={index}
          >
            {option}
          </div>)}
      </div>}
      <div className="menu-trigger">Menu</div>
    </button>
  )
}

export default Menu

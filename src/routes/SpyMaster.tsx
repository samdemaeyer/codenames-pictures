import React, { useState, useRef, useEffect, FC, FormEvent } from 'react'
import { RouteChildrenProps } from 'react-router-dom'
import SpyCard from 'components/SpyCard'
import { ISpyCard } from 'interfaces/SpyMaster'
import 'routes/SpyMaster.scss'

interface IParams {
  spyCardId: string
}

const SpyMaster: FC<RouteChildrenProps<IParams>> = ({ match, history }) => {
  const [searchCardId, setSearchCardId] = useState<string>('')
  const [card, setCard] = useState<ISpyCard>()
  const cardIdToDisplay = match?.params.spyCardId
  const cards = useRef([])

  useEffect(() => {
    fetchCards()
  }, [])

  useEffect(() => {
    setCardToDisplay()
  })

  const fetchCards = async() => {
    const response = await fetch('/codenames-pictures/spy-master-cards.json')
    cards.current = await response.json()
    setCardToDisplay()
  }

  const setCardToDisplay = (spyCardId = match?.params.spyCardId) => {
    const card = cards.current.find(({ id }) => id === spyCardId)
    setCard(card)
  }

  const changeCard = (e: FormEvent) => {
    e.preventDefault()
    setSearchCardId('')
    history.push(searchCardId)
    setCardToDisplay()
  }

  return (
    <div className="SpyMaster">
      <div className="find-card-wrapper">
        <form onSubmit={changeCard}>
          <label htmlFor="card-id">Looking for a card?</label>
          <input
            id="card-id"
            className="input"
            value={searchCardId}
            onChange={({ target: { value } }) => setSearchCardId(value)}
            placeholder="Insert card id"
          />
          <button className="btn blue">Search</button>
        </form>
      </div>

      <div className="container spy-master">
        {card && <><h1 className="title">Spy master card: {cardIdToDisplay}</h1>
          <SpyCard card={card}/>
        </>}

        {cards.current.length && !card &&
          <h1 className="title">Spy master card &quot;{cardIdToDisplay}&quot;<br/>does not exist you twat.</h1>
        }
      </div>
    </div>
  )
}

export default SpyMaster

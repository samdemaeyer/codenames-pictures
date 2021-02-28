import React, { FormEvent } from 'react'
import 'routes/SpyMaster.scss'
import SpyCard from 'components/SpyCard'
import { RouteChildrenProps } from 'react-router-dom'
import { ISpyCard } from 'interfaces/SpyMaster'

interface IParams {
  spyCardId: string
}

const SpyMaster: React.FC<RouteChildrenProps<IParams>> = ({ match, history }) => {
  const [searchCardId, setSearchCardId] = React.useState<string>('')
  const [card, setCard] = React.useState<ISpyCard>()
  const cardIdToDisplay = match?.params.spyCardId
  const cards = React.useRef([])

  React.useEffect(() => {
    fetchCards()
  }, [])

  React.useEffect(() => {
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

import React from 'react';
import PropTypes from 'prop-types';
import './SpyMaster.scss';
import SpyCard from '../components/SpyCard';

const SpyMaster = ({match, history}) => {
  const [searchCardId, setSearchCardId] = React.useState('');
  const [card, setCard] = React.useState(null);
  const cardIdToDisplay = match.params.spyCardId;
  let cards = React.useRef([]);

  React.useEffect(() => {
    fetchCards();
  }, []);

  React.useEffect(() => {
    setCardToDisplay();
  });

  const fetchCards = async() => {
    const response = await fetch('/codenames-pictures/spy-master-cards.json');
    cards.current = await response.json();
    setCardToDisplay();
  };

  const setCardToDisplay = (spyCardId = match.params.spyCardId) => {
    const card = cards.current.find(({ id }) => id === spyCardId);
    setCard(card);
  };

  const changeCard = e => {
    e.preventDefault();
    setSearchCardId('');
    history.push(searchCardId);
    setCardToDisplay();
  };

  return (
    <div className="SpyMaster">
      <div className="find-card-wrapper">
        <form onSubmit={changeCard}>
          <label htmlFor="card-id">Looking for a card?</label>
          <input 
            id="card-id" 
            className="input" 
            value={searchCardId} 
            onChange={({target: {value}}) => setSearchCardId(value)}
            placeholder="Insert card id"
          />
          <button className="btn blue">Search</button>
        </form>
      </div>

      {card && <div className="container spy-master">
        <h1 className="title">Spy master card: {cardIdToDisplay}</h1>
        <SpyCard card={card}/>
      </div>}

      {cards.current.length && !card && <div className="container spy-master">
        <h1 className="title">Spy master card &quot;{cardIdToDisplay}&quot;<br/>does not exist you twat.</h1>
      </div>}
    </div>
  );
};

SpyMaster.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default SpyMaster;

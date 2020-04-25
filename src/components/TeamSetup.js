import React from 'react';
import PropTypes from 'prop-types';
import './TeamSetup.scss';
import classNames from 'classnames';
import GameContext from '../contexts/gameContext';

const TeamSetup = ({ color }) => {
  const {
    teams,
    startingTeam,
    setStartingTeam,
    addPlayer,
    updatePlayer,
    removePlayer,
  } = React.useContext(GameContext);
  const [newPlayer, setNewPlayer] = React.useState('');
  
  const addNewPlayer = e => {
    e.preventDefault();
    if (!newPlayer)
      return;
    addPlayer(color , newPlayer);
    setNewPlayer('');
  };
  
  const updateExistingPlayer = (player, idx) => updatePlayer(color , player, idx);
  const currentStaringTeam = startingTeam === color ;

  return (
    <div className={'TeamSetup'}>
      <h3 className={classNames('team-title', `text-${color }`)}>
          Team {color }
        <button
          className={classNames('starting-team', color , {'active': currentStaringTeam})}
          onClick={() => setStartingTeam(color )}
        />
      </h3>
      <form onSubmit={addNewPlayer}>
        <div className="players">
          {teams[color ].map((player, index) => (
            <div className="player-wrap" key={index}>
              <input
                value={player}
                onChange={({ target: { value } }) => updateExistingPlayer(value, index)}
              />
              <button 
                type="button" 
                onClick={() => removePlayer(color , index)} 
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
  );
};

TeamSetup.propTypes = {
  color : PropTypes.string,
};

export default TeamSetup;

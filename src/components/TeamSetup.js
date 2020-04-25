import React from 'react';
import PropTypes from 'prop-types';
import './TeamSetup.scss';
import classNames from 'classnames';
import GameContext from '../contexts/gameContext';

const TeamSetup = ({teamColor}) => {
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
    addPlayer(teamColor, newPlayer);
    setNewPlayer('');
  };
  
  const updateExistingPlayer = (player, idx) => updatePlayer(teamColor, player, idx);
  const currentStaringTeam = startingTeam === teamColor;

  return (
    <div className={'TeamSetup'}>
      <h3 className={classNames('team-title', `text-${teamColor}`)}>
          Team {teamColor}
        <button
          className={classNames('starting-team', teamColor, {'active': currentStaringTeam})}
          onClick={() => setStartingTeam(teamColor)}
        />
      </h3>
      <form onSubmit={addNewPlayer}>
        <div className="players">
          {teams[teamColor].map((player, index) => (
            <div className="player-wrap" key={index}>
              <input
                value={player}
                onChange={({ target: { value } }) => updateExistingPlayer(value, index)}
              />
              <button 
                type="button" 
                onClick={() => removePlayer(teamColor, index)} 
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
  teamColor: PropTypes.string,
};

export default TeamSetup;

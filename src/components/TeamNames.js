import React from 'react';
import PropTypes from 'prop-types';
import './TeamNames.css';

class TeamNames extends React.Component {
  render() {
    const {color, teamNames} = this.props;

    return (
      <div className={`team-names team-${color}`}>
        {teamNames.length ? <h3 className="teams-title">Team {color}</h3> : null}
        <ul className="names">
          {teamNames.map((player, index) => (
            <li key={index}>
              <p>{player}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

TeamNames.propTypes = {
  color: PropTypes.string,
  teamNames: PropTypes.arrayOf(PropTypes.string),
};

export default TeamNames;

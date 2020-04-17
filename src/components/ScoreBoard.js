import * as React from 'react';
import PropTypes from 'prop-types';
import './ScoreBoard.css';
import TeamScore from './TeamScore';

class ScoreBoard extends React.Component {

  constructor() {
    super(...arguments);
    this.state = {
      expanded: false,
    }
  }
    
  collapse = () => {
    this.setState({
      expanded: false,
    })
  };
    
  expand = () => {
    this.setState({
      expanded: true,
    })
  };
    
  render() {
    const { teams } = this.props;
    const { expanded } = this.state;

    if (!teams.red.length || !teams.blue.length)
      return null;

    return (
      <div 
        className={`score-board ${expanded ? 'expanded' : ''}`}
        onMouseEnter={this.expand} 
        onMouseLeave={this.collapse}
      >
        <div className="score-wrapper">
          <TeamScore color="red" {...this.props}/>
          <TeamScore color="blue" {...this.props}/>
        </div>
      </div>
    )
  }
}

ScoreBoard.propTypes = {
  teams: PropTypes.object,
  score: PropTypes.object,
  addScore: PropTypes.func,
  getGuessedCards: PropTypes.func,
};

export default ScoreBoard;

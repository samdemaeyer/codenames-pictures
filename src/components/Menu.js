import React from 'react';
import './Menu.css';
import OutsideClickHandler from './OutsideClickHandler';

class Menu extends OutsideClickHandler {

  constructor() {
    super(...arguments);
    this.state = {
      expanded: false,
    };
  }

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  onOutsideClick() {
    if (this.state.expanded)
      this.toggleExpand();
  }

  render() {
    const { expanded } = this.state;
    return (
      <div
        className={`menu ${expanded ? 'expanded' : ''}`}
        onClick={this.toggleExpand}
        ref={ref => this.ref = ref}
      >
        <div className="menu-content">
          {/* eslint-disable-next-line react/prop-types */}
          {this.props.children.map((option, index) => 
            <div className="menu-item" key={index} onClick={this.toggleExpand}>
              {option}
            </div>)}
        </div>
        <div className="menu-trigger">Menu</div>
      </div>
    );
  }
}

export default Menu;

import React from 'react';

class OutsideClickHandler extends React.Component {

    ref = null;

    componentDidMount() {
      document.addEventListener('mousedown', this.handleOutsideClick);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleOutsideClick);
    }

    handleOutsideClick = e => {
      if (this.ref && !this.ref.contains(e.target)) {
        this.onOutsideClick();
      }
    };

    onOutsideClick() {}
}

export default OutsideClickHandler;

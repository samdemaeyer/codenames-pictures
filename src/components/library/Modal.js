import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import classNames from 'classnames';

const Modal = ({onCloseModal, title, classname, children}) => {
  return (
    <div className="ModalWrapper">
      <div className={classNames('Modal', classname)}>
        <button className="close-modal" onClick={onCloseModal}>x</button>
        <h3 className="modal-title">{title}</h3>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  title: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.any,
};

export default Modal;

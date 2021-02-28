import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import 'components/library/Modal.scss'

interface IProps {
  title?: string
  classname?: string
  onCloseModal?: () => void
}

const Modal: React.FC<IProps> = ({ onCloseModal, title, classname, children }) => {
  return (
    <div className="ModalWrapper">
      <div className={classNames('Modal', classname)}>
        <button className="close-modal" onClick={onCloseModal}>x</button>
        <h3 className="modal-title">{title}</h3>
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  onCloseModal: PropTypes.func,
  title: PropTypes.string,
  classname: PropTypes.string,
}

export default Modal

import React, { FC } from 'react'
import classNames from 'classnames'
import 'components/library/Modal.scss'

interface IProps {
  title?: string
  classname?: string
  onCloseModal?: () => void
}

const Modal: FC<IProps> = ({ onCloseModal, title, classname, children }) => {
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

export default Modal

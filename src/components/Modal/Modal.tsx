import React from 'react';
import closeIcon from '../../images/close.svg'

type Props = {
  children: JSX.Element,
  isOpen: boolean,
  closeModal: () => void
}

const Modal = ({ children, isOpen, closeModal }: Props) => {
  return (
    <div className={ isOpen ? 'modal modal_open': 'modal' }>
      <div className="modal__content">
      <button className="modal__close" onClick={closeModal}>
        <img src={closeIcon} alt="cross close icon" />
      </button>
        {
          children
        }
      </div>
    </div>
  )
}

export default Modal
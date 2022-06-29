import { Button } from 'components/atoms/Button/Button';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModalWrapper } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ isOpen, handleClose }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <ModalWrapper>
      Hello World
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;

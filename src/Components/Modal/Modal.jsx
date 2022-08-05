import React from 'react';
import styled from 'styled-components';

const Modal = styled.div``;

const Modal = ({ children }) => {
  const [isModal, setIsModal] = React.useState(false);

  return <Modal aria-modal={setIsModal}>{children}</Modal>;
};

export default Modal;

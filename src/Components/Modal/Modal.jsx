import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  position: relative;
  z-index: 1002;
  cursor: pointer;
`;

const ModalTitle = styled.span`
  font-size: 1rem;
  padding: 0.5rem 0;

  &:hover {
    color: white;
  }

  & strong {
    font-size: 0.8rem;
  }
`;

const ModalCont = styled.div`
  position: absolute;
  width: 240px;
  height: 300px;
  top: 100%;
  right: 0px;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  transform: translateY(35px);
  opacity: 0;
  animation: animeToTop 0.3s forwards;

  @keyframes animeToTop {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

const Modal = ({ name, children, ...props }) => {
  const [isModal, setIsModal] = React.useState(false);

  return (
    <>
      {isModal && <Overlay />}
      <ModalContainer
        onMouseEnter={() => setIsModal(true)}
        onMouseLeave={() => setIsModal(false)}
      >
        <ModalTitle>
          {name}
          <br />
          <strong>{props.outer}</strong>
        </ModalTitle>
        {isModal && (
          <ModalCont
            onMouseEnter={() => setIsModal(true)}
            onMouseLeave={() => setIsModal(false)}
            aria-modal={setIsModal}
          >
            {children}
          </ModalCont>
        )}
      </ModalContainer>
    </>
  );
};

export default Modal;

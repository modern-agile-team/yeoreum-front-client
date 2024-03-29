import React, { useRef } from 'react';
import styled from '@emotion/styled';
import useOutsideClick from '../../hooks/useOutsideClick';
import useLockScroll from '../../hooks/useLockScroll';
import ModalPortal from '../modalPortal/ModalPortal';

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ onClose, children }: Props) {
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose?.();
  };

  useOutsideClick(modalRef, handleClose);

  useLockScroll();

  return (
    <ModalPortal>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <Contents>{children}</Contents>
        </ModalWrap>
      </Overlay>
    </ModalPortal>
  );
}

export default Modal;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

const Contents = styled.div``;

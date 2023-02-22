import { IStore } from '@/interfaces/store';
import styled from '@emotion/styled';
import React from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import Button from '../common/Button';

const ModalBox = () => {
  const modalState = useSelector((state: IStore) => state.modal);

  const customStyles = {
    content: {
      width: '15%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      borderRadius: '4px',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      zIndex: '500',
      height: '180px',
    },
  };

  return (
    <Modal isOpen={modalState.isOpen} style={customStyles}>
      <ModalText>
        <p>{modalState.text}</p>
      </ModalText>
      <ButtonWrap>
        <Button buttonType="blue" width="80px" height="34px" onClick={modalState.onClickOk}>
          {modalState.okText ? modalState.okText : '확인'}
        </Button>
        {modalState.onClickCancel && (
          <Button
            buttonType="white"
            width={modalState.cancelText ? '110px' : '80px'}
            height="34px"
            onClick={() => modalState.onClickCancel!(false)}
          >
            {modalState.cancelText ? modalState.cancelText : '취소'}
          </Button>
        )}
      </ButtonWrap>
    </Modal>
  );
};

export default ModalBox;

const ModalText = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 38px;
`;

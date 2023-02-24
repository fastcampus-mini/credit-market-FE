import { createFavor } from '@/apis/favor';
import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { setModal } from '@/store/modalSlice';
import { getCookie } from '@/utils/cookie';
import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../common/Input';

interface Props {
  id: string;
  isFavor: boolean;
  isCart?: boolean;
}

const FavorButton = ({ id, isFavor, isCart = false }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = getCookie('userName');

  const handleFavor = async () => {
    if (!userName) {
      return dispatch(
        setModal({
          isOpen: true,
          onClickOk: () => {
            // dispatch(setModal({ isOpen: false }));
            dispatch(setModal({ route: navigate(ROUTES.LOGIN) }));
          },
          text: MESSAGES.INVALID_AUTH,
        }),
      );
    }

    // await createFavor(id);
    // dispatch(toggleFavor(id));
    alert('Click!❤️');
  };

  return (
    <StyledButton onClick={handleFavor} title="찜하기" isCart={isCart}>
      {isFavor ? '❤️' : '🤍'}
    </StyledButton>
  );
};

export default FavorButton;

const StyledButton = styled.button<{ isCart: boolean }>`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: ${({ isCart }) => (isCart ? '12px' : '0')};
  right: ${({ isCart }) => (isCart ? '30px' : '0')};
  font-size: 18px;
  transition: all 0.2s ease;
  &:hover {
    scale: 1.18;
  }
`;

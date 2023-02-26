import { createFavor, deleteFavor } from '@/apis/favor';
import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { deleteFavorState } from '@/store/favorSlice';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { setModal } from '@/store/modalSlice';
import { getCookie } from '@/utils/cookie';
import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Props {
  productId: string;
  isFavor?: boolean;
  isCart?: boolean;
  setFavor?: any;
}

const FavorButton = ({ productId, isFavor, isCart = false, setFavor }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = getCookie('userName');

  const handleFavor = async () => {
    if (!userName) {
      return dispatch(
        setModal({
          isOpen: true,
          onClickOk: () => {
            dispatch(setModal({ route: navigate(ROUTES.LOGIN) }));
          },
          text: MESSAGES.INVALID_AUTH,
        }),
      );
    }

    try {
      dispatch(showLoading());
      if (isFavor) {
        await deleteFavor(productId);
        dispatch(deleteFavorState(productId));
        setFavor(!isFavor);
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.FAVOR.COMPLETE_DELETE,
          }),
        );
      } else {
        await createFavor(productId);
        setFavor(!isFavor);
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.FAVOR.COMPLETE_CREATE,
          }),
        );
      }
    } catch (error) {
      dispatch(
        setModal({
          isOpen: true,
          onClickOk: () => dispatch(setModal({ isOpen: false })),
          text: isFavor ? MESSAGES.FAVOR.ERROR_DELETE : MESSAGES.FAVOR.ERROR_CREATE,
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <StyledButton onClick={handleFavor} title={isFavor ? '찜하기 해제' : '찜하기'} isCart={isCart}>
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

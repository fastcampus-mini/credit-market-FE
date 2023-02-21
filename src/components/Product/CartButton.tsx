import { createCart } from '@/apis/cart';
import { MESSAGES } from '@/constants/messages';
import { IModal } from '@/interfaces/modal';
import { setModal } from '@/store/modalSlice';
import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  id: string;
  top: string;
  right: string;
}

const CartButton = ({ id, top, right }: Props) => {
  const dispatch = useDispatch();

  const handleCart = async () => {
    // await createCart(id);
    dispatch(
      setModal({
        isOpen: true,
        onClickOk: () => {
          dispatch(setModal({ isOpen: false }));
        },
        text: MESSAGES.CART.COMPLETE_ADD,
      }),
    );
  };

  return (
    <StyledButton type="button" id={id} top={top} right={right} onClick={handleCart}>
      🛒
    </StyledButton>
  );
};

export default CartButton;

const StyledButton = styled.button<{ top: string; right: string }>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
`;

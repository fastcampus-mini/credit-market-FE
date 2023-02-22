import { createCart } from '@/apis/cart';
import { MESSAGES } from '@/constants/messages';
import { setModal } from '@/store/modalSlice';
import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';

interface Props {
  id: string;
}

const CartButton = ({ id }: Props) => {
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
    <StyledButton type="button" id={id} onClick={handleCart} title="장바구니 담기">
      🛒
    </StyledButton>
  );
};

export default CartButton;

const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 30px;
  font-size: 18px;
  transition: all 0.2s ease;
  &:hover {
    scale: 1.18;
  }
`;

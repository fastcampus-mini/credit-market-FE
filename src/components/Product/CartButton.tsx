import { createCart } from '@/apis/cart';
import styled from '@emotion/styled';
import React from 'react';

interface Props {
  id: string;
  top: string;
  right: string;
}

const CartButton = ({ id, top, right }: Props) => {
  const handleCart = async () => {
    // await createCart(id);
    alert('Click!🛒');
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

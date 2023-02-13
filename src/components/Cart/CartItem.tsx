import { ICart } from '@/interfaces/cart';
import colors from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
import { AiFillHeart, AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import Image from '../common/Image';
import Input from '../common/Input';

interface Prop {
  data: ICart;
}

const CartItem = ({ data }: Prop) => {
  return (
    <CartItemContainer>
      <CartItemWrap>
        <Input type="checkbox" />
        <Image src="/public/images/test-cat.jpg" width="50" height="50" />
        <InfoContainer>
          <BankText>{data.bank}</BankText>
          <ProductText>{data.title}</ProductText>
        </InfoContainer>
      </CartItemWrap>
      <IconWrap>
        {/* <AiFillHeart /> */}
        <AiOutlineHeart />
        <AiOutlineClose />
      </IconWrap>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  border: 1px solid #dddddd;
  padding: 0.6rem;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
`;

const CartItemWrap = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
`;

const BankText = styled.p`
  font-size: 14px;
`;

const ProductText = styled.p``;

const IconWrap = styled.div`
  display: flex;
  gap: 8px;
`;

import { ROUTES } from '@/constants/routes';
import { ICart } from '@/interfaces/cart';
import colors from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
import { AiFillHeart, AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Image from '../common/Image';
import Input from '../common/Input';

interface Prop {
  data: ICart;
}

const CartItem = ({ data }: Prop) => {
  const navigate = useNavigate();
  const handleLike = () => {};
  const handleDelete = () => {};

  return (
    <CartItemContainer>
      <CartItemWrap onClick={() => navigate(ROUTES.PRODUCT_DETAIL)}>
        <Input type="checkbox" />
        <InfoContainer>
          <Image src="/public/images/test-cat.jpg" width="50" height="50" />
          <TextContainer>
            <BankText>{data.bank}</BankText>
            <ProductText>{data.title}</ProductText>
          </TextContainer>
        </InfoContainer>
      </CartItemWrap>
      <IconWrap>
        {/* <AiFillHeart /> */}
        <Button buttonType="transparent" width="fit-content" height="16" onClick={handleLike}>
          <AiOutlineHeart />
        </Button>
        <Button buttonType="transparent" width="fit-content" height="16" onClick={handleDelete}>
          <AiOutlineClose />
        </Button>
      </IconWrap>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  border: 1px solid ${colors.lightGray};
  padding: 0.6rem;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.white};
`;

const CartItemWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
`;

const BankText = styled.p`
  font-size: 12px;
`;

const ProductText = styled.p`
  font-size: 14px;
`;

const IconWrap = styled.div`
  display: flex;
  gap: 8px;
`;

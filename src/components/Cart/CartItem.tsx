import { ROUTES } from '@/constants/routes';
import { ICart } from '@/interfaces/cart';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
import { AiFillHeart, AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Image from '../common/Image';
import Input from '../common/Input';

interface Prop {
  data: ICart;
  isCheckBox?: boolean;
}

const CartItem = ({ data, isCheckBox }: Prop) => {
  const navigate = useNavigate();
  const handleLike = () => {};
  const handleDelete = () => {};

  return (
    <CartItemContainer>
      <CartItemWrap>
        {isCheckBox && <Input inputType="checkbox" />}
        <InfoContainer onClick={() => navigate(ROUTES.PRODUCT_BY_ID(data.id))}>
          <Image src="/images/test-cat.jpg" width="50" height="50" />
          <TextContainer>
            <BankText>{data.bank}</BankText>
            <ProductText>{data.title}</ProductText>
          </TextContainer>
        </InfoContainer>
      </CartItemWrap>
      {isCheckBox && (
        <IconWrap>
          {/* <AiFillHeart /> */}
          <Button buttonType="text" width="fit-content" height="16" onClick={handleLike}>
            <AiOutlineHeart />
          </Button>
          <Button buttonType="text" width="fit-content" height="16" onClick={handleDelete}>
            <AiOutlineClose />
          </Button>
        </IconWrap>
      )}
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.li`
  border: 1px solid ${COLORS.lightGray};
  padding: 0.6rem;
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.white};
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
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

import { ROUTES } from '@/constants/routes';
import { ICart } from '@/interfaces/cart';
import COLORS from '@/styles/colors';
import { getBankLogo } from '@/utils/bankLogo';
import styled from '@emotion/styled';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Image from '../common/Image';
import Input from '../common/Input';
import FavorButton from '../Product/FavorButton';

interface Props {
  data: ICart;
  isCheckBox?: boolean;
  handleCheck?(checked: HTMLInputElement['checked'], id: string): void;
  checkId?: Array<string>;
}

const CartItem = ({ data, isCheckBox, handleCheck, checkId }: Props) => {
  const navigate = useNavigate();
  const handleDelete = () => {};

  return (
    <CartItemContainer>
      <CartItemWrap>
        {isCheckBox && (
          <Input
            inputType="checkbox"
            checked={checkId!.includes(data.cartId) ? true : false}
            onChange={(e) => handleCheck!(e.target.checked, data.cartId)}
          />
        )}
        <InfoContainer onClick={() => navigate(ROUTES.PRODUCT_BY_ID(data.cartId))}>
          <ImageWrap>
            <Image
              src={getBankLogo(data.fproductCompanyName) as string}
              width="36px"
              height="36px"
              alt={data.fproductCompanyName}
            />
          </ImageWrap>
          <TextContainer>
            <BankText>{data.fproductCompanyName}</BankText>
            <ProductText>{data.fproductName}</ProductText>
          </TextContainer>
        </InfoContainer>
      </CartItemWrap>
      {isCheckBox && (
        <IconWrap>
          <FavorButton id={data.cartId} isFavor={data.favorite} isCart={true} />
          <Button
            buttonType="text"
            width="fit-content"
            height="16px"
            onClick={handleDelete}
            title={'삭제'}
            scale={'1.3'}
          >
            <AiOutlineClose size="16px" />
          </Button>
        </IconWrap>
      )}
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CartItemWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 50px;
`;

const InfoContainer = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

const ImageWrap = styled.div`
  padding: 4px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

const BankText = styled.p`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${COLORS.primary};
  font-weight: 600;
`;

const ProductText = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

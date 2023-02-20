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

interface Props {
  data: ICart;
  isCheckBox?: boolean;
  handleCheck?(checked: HTMLInputElement['checked'], id: string): void;
  checkId?: Array<string>;
}

const CartItem = ({ data, isCheckBox, handleCheck, checkId }: Props) => {
  const navigate = useNavigate();
  const handleFavor = () => {};
  const handleDelete = () => {};

  return (
    <CartItemContainer>
      <CartItemWrap>
        {isCheckBox && (
          <Input
            inputType="checkbox"
            checked={checkId!.includes(data.id) ? true : false}
            onChange={(e) => handleCheck!(e.target.checked, data.id)}
          />
        )}
        <InfoContainer onClick={() => navigate(ROUTES.PRODUCT_BY_ID(data.id))}>
          <ImageWrap>
            <Image src={getBankLogo(data.bank) as string} width="34" height="34" alt={data.bank} />
          </ImageWrap>
          <TextContainer>
            <BankText>{data.bank}</BankText>
            <ProductText>{data.title}</ProductText>
          </TextContainer>
        </InfoContainer>
      </CartItemWrap>
      {isCheckBox && (
        <IconWrap>
          <Input
            classType="heartBtn"
            inputType="checkbox"
            id={data.id}
            right="60px"
            top="calc(50% - 0.6rem)"
          />
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
  padding: 0.6rem;
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
  gap: 10px;
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
  gap: 6px;
  justify-content: center;
`;

const BankText = styled.p`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;

  .bankLogo {
    display: inline-block;

    width: 20px;
    img {
      width: 100%;
    }
  }
`;

const ProductText = styled.p`
  font-size: 14px;
`;

const IconWrap = styled.div`
  display: flex;
  gap: 8px;
`;

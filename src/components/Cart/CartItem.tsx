import { deleteCart, getCartList } from '@/apis/cart';
import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { ICart } from '@/interfaces/cart';
import { setCartState } from '@/store/cartSlice';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { setModal } from '@/store/modalSlice';
import COLORS from '@/styles/colors';
import { getBankLogo } from '@/utils/bankLogo';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Image from '../common/Image';
import Input from '../common/Input';
import FavorButton from '../Product/FavorButton';

interface Props {
  data: ICart;
  isCheckBox?: boolean;
  handleCheck?(checked: HTMLInputElement['checked'], id: string): void;
  checkId?: string[];
  setCheckId?: any;
}

const CartItem = ({ data, isCheckBox, handleCheck, checkId, setCheckId }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [favor, setFavor] = useState(data.favorite);

  const handleDelete = async () => {
    try {
      dispatch(showLoading());
      await deleteCart({ cartIds: [data.cartId] });
      const cartList = await getCartList();
      dispatch(setCartState(data));
      setCheckId(checkId!.filter((item) => !checkId!.includes(item)));
      dispatch(setCartState(cartList));
      dispatch(
        setModal({
          isOpen: true,
          onClickOk: () => {
            dispatch(setModal({ isOpen: false }));
          },
          text: MESSAGES.CART.COMPLETE_DELETE,
        }),
      );
    } catch (error) {
      dispatch(
        setModal({
          isOpen: true,
          onClickOk: () => dispatch(setModal({ isOpen: false })),
          text: MESSAGES.CART.ERROR_DELETE,
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };

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
        <InfoContainer onClick={() => navigate(ROUTES.PRODUCT_BY_ID(data.productId))}>
          <ImageWrap>
            <Image
              src={data.companyName && (getBankLogo(data.companyName) as string)}
              width="36px"
              height="36px"
              alt={data.companyName}
            />
          </ImageWrap>
          <TextContainer>
            <BankText>{data.companyName}</BankText>
            <ProductText>{data.productName}</ProductText>
          </TextContainer>
        </InfoContainer>
      </CartItemWrap>
      {isCheckBox && (
        <IconWrap>
          <FavorButton
            productId={data.productId}
            isFavor={favor}
            isCart={true}
            setFavor={setFavor}
          />
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

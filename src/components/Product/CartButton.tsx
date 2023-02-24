import { createCart } from '@/apis/cart';
import { MESSAGES } from '@/constants/messages';
import { ROUTES } from '@/constants/routes';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { setModal } from '@/store/modalSlice';
import { RootState } from '@/store/store';
import { getCookie } from '@/utils/cookie';
import styled from '@emotion/styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface Props {
  productId: string;
}

const CartButton = ({ productId }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = getCookie('userName');
  const cartState = useSelector((state: RootState) => state.cart);

  const handleCart = async () => {
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
      const response = await createCart({ fproductId: productId });
      if (response === 'isDupl') {
        return dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => {
              dispatch(setModal({ isOpen: false }));
            },
            onClickCancel: () => {
              dispatch(setModal({ isOpen: false }));
              navigate(ROUTES.CART);
            },
            cancelText: '장바구니 이동',
            text: MESSAGES.CART.ERROR_DUPL,
          }),
        );
      }
    } catch (error) {
      dispatch(
        setModal({
          isOpen: true,
          onClickOk: () => dispatch(setModal({ isOpen: false })),
          text: MESSAGES.CART.ERROR_CREATE,
        }),
      );
    } finally {
      dispatch(hideLoading());
    }

    dispatch(
      setModal({
        isOpen: true,
        onClickOk: () => {
          dispatch(setModal({ isOpen: false }));
        },
        onClickCancel: () => {
          dispatch(setModal({ isOpen: false }));
          navigate(ROUTES.CART);
        },
        cancelText: '장바구니 이동',
        text: MESSAGES.CART.COMPLETE_ADD,
      }),
    );
  };

  return (
    <StyledButton type="button" id={productId} onClick={handleCart} title="장바구니 담기">
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

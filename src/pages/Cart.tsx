import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getCartItemList } from '../apis/cart';
import { ERROR_MESSAGES } from '../constants/messages';
import CartItem from './../components/Cart/CartItem';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../store/loadingSlice';
import colors from '@/styles/colors';
import Button from '@/components/common/Button';

const Cart = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getCartItemList();
        setCart(data);
      } catch (error) {
        alert(ERROR_MESSAGES.ERROR_CART.GET);
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);
  return (
    <CartContainer color={'pink'}>
      {Array.isArray(cart) ? (
        cart.map((item) => <CartItem data={item} />)
      ) : (
        <div>담으신 상품이 없습니다.</div>
      )}
      <p>Cart</p>
      <Button>공통버튼</Button>
    </CartContainer>
  );
};

export default Cart;

export const CartContainer = styled.div<{ color: string }>`
  color: ${({ color }) => color};
  background-color: ${colors.black};
  position: relative;
  z-index: 1;
`;

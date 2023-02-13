import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getCartItemList } from '../apis/cart';
import { ERROR_MESSAGES } from '../constants/messages';
import CartItem from './../components/Cart/CartItem';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../store/loadingSlice';
import colors from '@/styles/colors';
import Button from '@/components/common/Button';
import PageTitle from '@/components/common/PageTitle';
import { ICart } from '@/interfaces/cart';
import Input from '@/components/common/Input';

const Cart = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState<ICart[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        // const data = await getCartItemList();
        // setCart(data);
        const data: ICart[] = [
          { id: '1', title: '직장인 신용대출', bank: '우리은행' },
          { id: '2', title: '주부 신용대출', bank: '국민은행' },
          { id: '3', title: '고양이 신용대출', bank: '신한은행' },
          { id: '4', title: '주부 신용대출', bank: '국민은행' },
          { id: '5', title: '직장인 신용대출', bank: '우리은행' },
          { id: '6', title: '주부 신용대출', bank: '신한은행' },
          { id: '7', title: '고양이 신용대출', bank: '국민은행' },
          { id: '7', title: '대학생 신용대출', bank: '제주은행' },
        ];
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
    <CartContainer>
      <PageTitle title="장바구니" />
      <CheckBoxWrap>
        <AllCheck>
          <Input type="checkbox" />
          <p>전체선택 (0/3)</p>
        </AllCheck>
        <p>선택삭제</p>
      </CheckBoxWrap>
      <CartContent>
        {Array.isArray(cart) ? (
          cart.map((item) => <CartItem data={item} />)
        ) : (
          <div>담으신 상품이 없습니다.</div>
        )}
      </CartContent>
      <ButtonWrap>
        <Button>신청하기</Button>
      </ButtonWrap>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  /* color: ${({ color }) => color}; */
  /* background-color: ${colors.black}; */
  position: relative;
  z-index: 1;
`;

const CheckBoxWrap = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  padding-right: 6px;
`;

const AllCheck = styled.div`
  display: flex;
  gap: 6px;
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 430px;
  overflow-y: auto;
`;

const ButtonWrap = styled.div`
  padding: 1rem 0;
`;

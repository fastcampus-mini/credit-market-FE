import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getCartItemList } from '../apis/cart';
import { MESSAGES } from '../constants/messages';
import CartItem from './../components/Cart/CartItem';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../store/loadingSlice';
import COLORS from '@/styles/colors';
import Button from '@/components/common/Button';
import PageTitle from '@/components/common/PageTitle';
import { ICart } from '@/interfaces/cart';
import Input from '@/components/common/Input';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState<ICart[]>([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/buy');
  };

  const handleDelete = () => {
    if (confirm('선택하신 상품을 삭제하시겠습니까?')) {
    }
  };

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
          { id: '8', title: '대학생 신용대출', bank: '제주은행' },
        ];
        setCart(data);
      } catch (error) {
        alert(MESSAGES.ERROR_CART.GET);
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
          <AllCheckText>전체선택 (0/3)</AllCheckText>
        </AllCheck>
        <Button buttonType="text" width="fit-content" height="fit-content" onClick={handleDelete}>
          선택삭제
        </Button>
      </CheckBoxWrap>
      <CartContent>
        {Array.isArray(cart) ? (
          cart.map((item) => <CartItem key={item.id} data={item} />)
        ) : (
          <div>담으신 상품이 없습니다.</div>
        )}
      </CartContent>
      <ButtonWrap>
        <Button onClick={handleClick}>신청하기</Button>
      </ButtonWrap>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  /* color: ${({ color }) => color}; */
  /* background-color: ${COLORS.black}; */
  padding: 0 10px;
`;

const CheckBoxWrap = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  padding-right: 6px;
`;

const AllCheck = styled.div`
  display: flex;
  gap: 6px;
`;

const AllCheckText = styled.span`
  font-size: 14px;
`;

const BtnDelete = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 14px;
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 460px;
  overflow-y: auto;
`;

const ButtonWrap = styled.div`
  padding: 1rem 0;
`;

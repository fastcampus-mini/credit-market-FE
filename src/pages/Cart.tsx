import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { getCartList } from '../apis/cart';
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
import { ROUTES } from '@/constants/routes';
import { setModal } from '@/store/modalSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState<ICart[]>([]);
  const navigate = useNavigate();
  const [checkId, setCheckId] = useState<string[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        // const data = await getCartList(1);
        // setCart(data);
        const data: ICart[] = [
          {
            cartId: '1',
            fproductName: '직장인 신용대출',
            fproductCompanyName: '우리은행',
            fproductCreditProductTypeName: '',
            favorite: true,
          },
          {
            cartId: '2',
            fproductName: '주부 신용대출',
            fproductCompanyName: '서울은행',
            fproductCreditProductTypeName: '',
            favorite: false,
          },
          {
            cartId: '3',
            fproductName: '고양이 신용대출',
            fproductCompanyName: '국민은행',
            fproductCreditProductTypeName: '',
            favorite: false,
          },
          {
            cartId: '4',
            fproductName: '직장인 신용대출',
            fproductCompanyName: '우리은행',
            fproductCreditProductTypeName: '',
            favorite: false,
          },
          {
            cartId: '5',
            fproductName: '고양이 신용대출',
            fproductCompanyName: '신한은행',
            fproductCreditProductTypeName: '',
            favorite: true,
          },
          // {
          //   cartId: '6',
          //   fproductName: '대학생 신용대출',
          //   fproductCompanyName: '국민은행',
          //   fproductCreditProductTypeName: '',
          //   favorite: false,
          // },
          // {
          //   cartId: '7',
          //   fproductName: '고양이 신용대출',
          //   fproductCompanyName: '제주은행',
          //   fproductCreditProductTypeName: '',
          //   favorite: false,
          // },
          // {
          //   cartId: '8',
          //   fproductName: '대학생 신용대출',
          //   fproductCompanyName: '어떤은행',
          //   fproductCreditProductTypeName: '',
          //   favorite: false,
          // },
        ];
        setCart(data);
      } catch (error) {
        alert(MESSAGES.CART.ERROR_GET);
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  const handleClick = () => {
    navigate(ROUTES.BUY);
  };

  const handleDelete = () => {
    dispatch(
      setModal({
        isOpen: true,
        onClickOk: handleDeleteCart,
        onClickCancel: () => dispatch(setModal({ isOpen: false })),
        text: MESSAGES.CART.CHECK_DELETE,
      }),
    );
  };

  const handleDeleteCart = () => {
    return dispatch(
      setModal({
        isOpen: true,
        onClickOk: () => dispatch(setModal({ isOpen: false })),
        text: MESSAGES.CART.COMPLETE_DELETE,
      }),
    );
  };

  const handleCheck = (checked: HTMLInputElement['checked'], id: string) => {
    if (checked) {
      setCheckId((prev) => [...prev, id]);
    } else {
      setCheckId(checkId.filter((checkedId) => checkedId !== id));
    }
  };

  const handleAllCheck: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.checked) {
      const idArray: Array<string> = [];
      cart.forEach((item) => idArray.push(item.cartId));
      setCheckId(idArray);
    } else {
      setCheckId([]);
    }
  };

  return (
    <CartContainer>
      <PageTitle title="장바구니" />
      <CheckBoxWrap>
        <AllCheck>
          <Input
            inputType="checkbox"
            classType="checkbox"
            onChange={handleAllCheck}
            checked={checkId.length === cart.length ? true : false}
            id="AllCheck"
          />
          <AllCheckText htmlFor="AllCheck">
            전체선택 ({checkId.length}/{cart.length})
          </AllCheckText>
        </AllCheck>
        <Button buttonType="text" width="fit-content" height="fit-content" onClick={handleDelete}>
          선택삭제
        </Button>
      </CheckBoxWrap>
      <CartContent>
        {Array.isArray(cart) ? (
          cart.map((item) => (
            <CartItem
              key={item.cartId}
              data={item}
              isCheckBox={true}
              handleCheck={handleCheck}
              checkId={checkId}
            />
          ))
        ) : (
          <div>담으신 상품이 없습니다.</div>
        )}
      </CartContent>
      <Button width="calc(100% - 10px)" onClick={handleClick}>
        신청하기
      </Button>
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.div`
  height: 100%;
  padding: 0 0 0 10px;
`;

const CheckBoxWrap = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

const AllCheck = styled.div`
  display: flex;
  gap: 6px;
`;

const AllCheckText = styled.label`
  font-size: 14px;
  color: ${COLORS.secondary};
  cursor: pointer;
`;

const CartContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: calc(100% - 185px);
  margin-bottom: 10px;
  overflow-y: auto;
  padding-right: 10px;
`;

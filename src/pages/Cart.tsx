import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { deleteCart, getCartList } from '../apis/cart';
import { MESSAGES } from '../constants/messages';
import CartItem from './../components/Cart/CartItem';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../store/loadingSlice';
import COLORS from '@/styles/colors';
import Button from '@/components/common/Button';
import PageTitle from '@/components/common/PageTitle';
import Input from '@/components/common/Input';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import { setModal } from '@/store/modalSlice';
import Lottie from 'lottie-react';
import CartLottie from '@/lotties/animated-shopping-cart.json';
import { setCartState } from '@/store/cartSlice';
import { ICart } from '@/interfaces/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState<ICart[]>([]);
  const navigate = useNavigate();
  const [checkId, setCheckId] = useState<string[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getCartList();
        setCart(data);
        dispatch(setCartState(data));
      } catch (error) {
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.CART.ERROR_GET,
          }),
        );
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  const handleClick = () => {
    if (checkId.length === 0) {
      return dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.CART.ERROR_NOT_CHECK,
          onClickOk: () => dispatch(setModal({ isOpen: false })),
        }),
      );
    }

    const checkData = cart.filter((item) => checkId.includes(item.cartId));
    navigate(ROUTES.BUY, { state: checkData });
  };

  const handleDelete = () => {
    if (checkId.length === 0) {
      return dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.CART.ERROR_NOT_CHECK,
          onClickOk: () => dispatch(setModal({ isOpen: false })),
        }),
      );
    }

    dispatch(
      setModal({
        isOpen: true,
        onClickOk: handleDeleteCart,
        onClickCancel: () => dispatch(setModal({ isOpen: false })),
        text: MESSAGES.CART.CHECK_DELETE,
      }),
    );
  };

  const handleDeleteCart = async () => {
    try {
      dispatch(showLoading());
      await deleteCart({ cartIds: checkId });
      const data = await getCartList();
      setCart(data);
      dispatch(setCartState(data));
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
      cart.forEach((item) => idArray.push(item.productId));
      setCheckId(idArray);
    } else {
      setCheckId([]);
    }
  };

  return (
    <CartContainer>
      <PageTitle title="장바구니" />
      {cart.length > 0 && (
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
      )}

      <CartContent>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem
              key={item.productId}
              data={item}
              isCheckBox={true}
              handleCheck={handleCheck}
              checkId={checkId}
              setCart={setCart}
            />
          ))
        ) : (
          <NoCart>
            <LottieWrap>
              <Lottie animationData={CartLottie} loop={true} />
            </LottieWrap>
            <NoCartText>아직 담으신 상품이 없습니다.</NoCartText>
            <Button buttonType="blue" width="200px" onClick={() => navigate(ROUTES.SEARCH)}>
              상품 보러가기
            </Button>
          </NoCart>
        )}
      </CartContent>
      {cart.length > 0 && (
        <Button width="calc(100% - 10px)" onClick={handleClick}>
          신청하기
        </Button>
      )}
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

const NoCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
`;

const LottieWrap = styled.div`
  width: 120px;
`;

const NoCartText = styled.p`
  margin-bottom: 20px;
`;

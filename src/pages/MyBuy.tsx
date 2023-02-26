import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { ROUTES } from '@/constants/routes';
import { hideLoading, showLoading } from '../store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { IBuy } from '@/interfaces/buy';
import { setModal } from '@/store/modalSlice';
import styled from '@emotion/styled';
import ProductCard from '../components/Product/ProductCard';
import { getBuyList } from '../apis/buy';
import { RootState } from '@/store/store';
import { setMyBuyState } from '@/store/myBuySlice';

const MyBuy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myBuyList: IBuy[] = useSelector((state: RootState) => state.favor);

  useEffect(() => {
    async function getMyBuy() {
      try {
        dispatch(showLoading());
        const data = await getBuyList(1);
        dispatch(setMyBuyState(data));
      } catch (error) {
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.MYPAGE.BUY.ERROR_GET,
          }),
        );
      } finally {
        dispatch(hideLoading());
      }
    }
    getMyBuy();
  }, []);

  const handleCancelClick = () => {
    return dispatch(
      setModal({
        isOpen: true,
        onClickOk: handleDeleteFromBuy,
        onClickCancel: () => dispatch(setModal({ isOpen: false })),
        text: MESSAGES.MYPAGE.BUY.CHECK_DELETE,
      }),
    );
  };

  const handleDeleteFromBuy = () => {
    dispatch(
      setModal({
        isOpen: true,
        onClickOk: () => {
          dispatch(setModal({ isOpen: false }));
          navigate(ROUTES.MYPAGE_BUY);
        },
        text: MESSAGES.MYPAGE.BUY.COMPLETE_DELETE,
      }),
    );
    console.log('deleted');
  };

  return (
    <MyBuyContainer>
      <MyBuyHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="신청 상품" />
      </MyBuyHeader>
      <MyBuyWrap>
        {myBuyList.map((myBuy) => {
          return <ProductCard key={myBuy.orderId} data={myBuy} />;
        })}
      </MyBuyWrap>
    </MyBuyContainer>
  );
};

export default MyBuy;

const MyBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 0 0 10px;
`;

const MyBuyHeader = styled.div`
  display: flex;
`;

const MyBuyWrap = styled.ul`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  overflow-y: auto;
  height: calc(100% - 90px);
  gap: 5px;
  li {
    list-style-type: none;
  }
`;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { ROUTES } from '@/constants/routes';
import { hideLoading, showLoading } from '../store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { IBuy, IBuyList } from '@/interfaces/buy';
import { setModal } from '@/store/modalSlice';
import styled from '@emotion/styled';
import ProductCard from '@/components/Product/ProductCard';
import { deleteBuy, getBuyList } from '@/apis/buy';
import { RootState } from '@/store/store';
import { deleteMybuyState, setMyBuyState } from '@/store/myBuySlice';
import Lottie from 'lottie-react';
import BuyLottie from '@/lotties/BuyLottie.json';
import Button from '@/components/common/Button';
import PaginationBox from '@/components/common/PaginationBox';

const MyBuy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const myBuyList: IBuy[] = useSelector((state: RootState) => state.myBuy);
  const [page, setPage] = useState(1);
  const [totCnt, setTotCnt] = useState(0);

  useEffect(() => {
    async function getMyBuy() {
      try {
        dispatch(showLoading());
        const data: IBuyList = await getBuyList(1);
        dispatch(setMyBuyState(data.list));
        setTotCnt(data.totalNum);
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

  const handlePageChange = async (page: number) => {
    setPage(page);
    try {
      dispatch(showLoading());
      const buyList: IBuyList = await getBuyList(page);
      dispatch(setMyBuyState(buyList.list));
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
  };

  return (
    <MyBuyContainer>
      <MyBuyHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="신청 상품" />
      </MyBuyHeader>
      <MyBuyWrap>
        {myBuyList.length > 0 ? (
          myBuyList.map((myBuy) => {
            return (
              <ProductCard
                key={myBuy.orderId}
                data={myBuy}
                isBuy={true}
                onClick={async () => {
                  await deleteBuy(myBuy.orderId);
                  dispatch(deleteMybuyState(myBuy.orderId));
                  dispatch(
                    setModal({
                      isOpen: true,
                      onClickOk: () => dispatch(setModal({ isOpen: false })),
                      text: MESSAGES.MYPAGE.BUY.COMPLETE_DELETE,
                    }),
                  );
                }}
                text={myBuy.orderStatus === 0 ? '취소완료' : '취소신청'}
              />
            );
          })
        ) : (
          <NoBuy>
            <LottieWrap>
              <Lottie animationData={BuyLottie} loop={true} />
            </LottieWrap>
            <NoBuyText>구매하신 상품이 없습니다.</NoBuyText>
            <Button buttonType="blue" width="200px" onClick={() => navigate(ROUTES.SEARCH)}>
              상품 보러가기
            </Button>
          </NoBuy>
        )}
        {myBuyList.length > 0 && (
          <PaginationBox page={page} totCnt={totCnt} handlePageChange={handlePageChange} />
        )}
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

const NoBuy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
`;

const LottieWrap = styled.div`
  width: 120px;
`;

const NoBuyText = styled.p`
  margin-bottom: 20px;
`;

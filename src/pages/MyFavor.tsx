import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { IFavor } from '@/interfaces/favor';
import styled from '@emotion/styled';
import { getFavorList } from '@/apis/favor';
import ProductCard from '@/components/Product/ProductCard';
import { setFavorState } from '@/store/favorSlice';
import Button from '@/components/common/Button';
import { ROUTES } from '@/constants/routes';
import Lottie from 'lottie-react';
import CartLottie from '@/lotties/animated-shopping-cart.json';
import { RootState } from '@/store/store';

const MyFavor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorList: IFavor[] = useSelector((state: RootState) => state.favor);

  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getFavorList(1);
        dispatch(setFavorState(data));
      } catch (error) {
        alert(MESSAGES.MYPAGE.FAV.ERROR_GET);
      } finally {
        dispatch(hideLoading());
      }
    }
    getData();
  }, []);

  return (
    <MyFavorContainer>
      <MyFavorHeader>
        <BackButton onClick={() => navigate(-1)} size={25} isMypage={true} />
        <PageTitle title="관심 상품" />
      </MyFavorHeader>
      <MyFavorWrap>
        {favorList.length > 0 ? (
          favorList.map((item) => {
            return <ProductCard key={item.productId} data={item} isFavor={true} />;
          })
        ) : (
          <NoProduct>
            <LottieWrap>
              <Lottie animationData={CartLottie} loop={true} />
            </LottieWrap>
            <NoProductText>관심 상품이 없습니다.</NoProductText>
            <Button buttonType="blue" width="200px" onClick={() => navigate(ROUTES.SEARCH)}>
              상품 보러가기
            </Button>
          </NoProduct>
        )}
      </MyFavorWrap>
    </MyFavorContainer>
  );
};

export default MyFavor;

const MyFavorContainer = styled.div`
  padding: 0 0 0 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MyFavorHeader = styled.div`
  display: flex;
`;

const MyFavorWrap = styled.ul`
  overflow-y: auto;
  height: calc(100% - 86px);
  margin-bottom: 10px;
  padding-right: 10px;
`;

const NoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 170px;
`;

const LottieWrap = styled.div`
  width: 120px;
`;

const NoProductText = styled.p`
  margin-bottom: 20px;
`;

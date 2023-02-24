import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { IFavor } from '@/interfaces/favor';
import styled from '@emotion/styled';
import { getFavorList } from '@/apis/favor';
import ProductCard from '@/components/Product/ProductCard';

const MyFavor = () => {
  const dispatch = useDispatch();
  const [favorList, setFavorList] = useState<IFavor[]>([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function getData() {
      try {
        dispatch(showLoading());
        const data = await getFavorList(1);
        setFavorList(data);
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
        {favorList.map((item) => {
          return <ProductCard key={item.productId} data={item} isFavor={true} />;
        })}
      </MyFavorWrap>
    </MyFavorContainer>
  );
};

export default MyFavor;

const MyFavorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 10px;
`;

const MyFavorHeader = styled.div`
  display: flex;
`;

const MyFavorWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
  height: calc(100% - 115px);
  overflow-y: auto;
  margin-top: 10px;
  gap: 5px;
  li {
    list-style-type: none;
  }
`;

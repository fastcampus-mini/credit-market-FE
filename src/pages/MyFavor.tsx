import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import ProductCardFav from '@/components/common/ProductCardFav';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { IFavor } from '@/interfaces/favor';
import styled from '@emotion/styled';



const MyFavor = () => {
  const dispatch = useDispatch()
  const [favorList, setFavorList] = useState<IFavor[]>([])
  const navigate = useNavigate();


  useEffect(() => {
    async function getFavorList() {
      try {
        dispatch(showLoading());
        const item: IFavor[] = [
          { id: '1', productName: '직장인 신용대출', companyName: '우리', favorite: false, productTypeName: '대출', interestRateAvg: '5.04%', interestType: '대출'},
          { id: '2', productName: '주부 신용대출', companyName: '국민', favorite: false, productTypeName: '대출', interestRateAvg: '4.29%', interestType: '대출'},
          { id: '3', productName: '무직자 신용대출', companyName: '신한', favorite: false, productTypeName: '대출', interestRateAvg: '4.98%', interestType: '대출'},
          { id: '4', productName: '고용주 신용대출', companyName: '기업', favorite: false, productTypeName: '대출', interestRateAvg: '3.98%', interestType: '대출'},
          { id: '5', productName: '고양이 신용대출', companyName: '수협', favorite: false, productTypeName: '대출', interestRateAvg: '4.75%', interestType: '대출'},
        ]
        setFavorList(item);
      } catch (error) {
        alert(MESSAGES.MYPAGE.FAV.ERROR_GET);
      } finally {
        dispatch(hideLoading());
      }
    }
    getFavorList();
  }, []);
      
  return (
    <MyFavorContainer>
      <MyFavorHeader>
        <BackButton onClick={() => navigate(-1)} size={25} isMypage={true} />
        <PageTitle title="관심 상품" />
      </MyFavorHeader>
      <MyFavorWrap>
        {favorList.map((item) => {
          return (
            <ProductCardFav
              key={item.id}
              item={item}
              isFavor={true}
            />
          )
      })}</MyFavorWrap>
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
  height: calc(100% - 115px) ;
  overflow-y: auto;  
  margin-top: 10px;
  gap: 5px;
  li {
    list-style-type: none;
  }
`;



import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import ProductCardFav from '@/components/common/ProductCardFav';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import styled from '@emotion/styled';
import { getBankLogo } from '@/utils/bankLogo';

interface Prop {
  id: string;
  title: string;
  bank: string;
  interestRate: number,
}

const MyFavor = () => {
  const navigate = useNavigate();

  const datas: any[] = [
    { id: '1', title: '직장인 신용대출', bank: '우리', interestRate: 5.04},
    { id: '2', title: '주부 신용대출', bank: '국민', interestRate: 5.04},
    { id: '3', title: '무직자 신용대출', bank: '신한', interestRate: 5.04},
    { id: '4', title: '고용주 신용대출', bank: '기업', interestRate: 5.04},
    { id: '5', title: '고양이 신용대출', bank: '수협', interestRate: 5.04},
  ];  

  return (
    <MyFavorContainer>
      <MyFavorHeader>
        <BackButton onClick={() => navigate(-1)} size={25} isMypage={true} />
        <PageTitle title="관심 상품" />
      </MyFavorHeader>
      <MyFavorWrap>{datas.map((data) => {
        return (
          <ProductCardFav
            key={data.id}
            data={data}
            bankLogo={getBankLogo(data.bank)}
            bankTitle={`${data.bank}은행`}
            productName={data.title}
            loanTitle="대출"
            rateAverage="3.4%"
            rateSort="대출"
            isFavor={false}
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
  gap: 5px;
  li {
    list-style-type: none;
  }
`;

import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { ROUTES } from '@/constants/routes';
import ProductCardBuy from '@/components/common/ProductCardBuy';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getBankLogo } from '@/utils/bankLogo';

const MyBuy = () => {
  const navigate = useNavigate();

  const datas: any[] = [
    { id: '1', title: '무직자 신용대출', bank: '국민', interestRate: 5.04},
    { id: '2', title: '고용주 신용대출', bank: '기업', interestRate: 5.04},
    { id: '3', title: '고양이 신용대출', bank: '수협', interestRate: 5.04},
    { id: '4', title: '고용주 신용대출', bank: '기업', interestRate: 5.04},
    { id: '5', title: '주부 신용대출', bank: '국민', interestRate: 5.04},
  ];  


  return (
    <MyBuyContainer>
      <MyBuyHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="신청 상품" />
      </MyBuyHeader>
      <MyBuyWrap>{datas.map((data) => {
        return (
          <ProductCardBuy
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
      })}</MyBuyWrap>
    </MyBuyContainer>
  );
};

export default MyBuy;

const MyBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 10px;
`;

const MyBuyHeader = styled.div`
  display: flex;
`;

const MyBuyWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
  overflow-y: auto;
  height: 100%;
  gap: 5px;
  li {
    list-style-type: none;
  }
`;

import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import styled from '@emotion/styled';
import React from 'react';
import MyFavCard from '@/components/common/MyFavCard';
import { getBankLogo } from '@/utils/bankLogo';
import { useNavigate } from 'react-router-dom';



const MyFavor = () => {
  const navigate = useNavigate();

  const datas: any [] = [
    { id: '1', title: '직장인 신용대출', bank: '우리은행', interestRate: 5.04, aveLoanAmt: 3420, hashTag: ['마이너스통장', '직장인대출'] },
    { id: '2', title: '직장인 신용대출', bank: '우리은행', interestRate: 5.04, aveLoanAmt: 3420, hashTag: ['마이너스통장', '직장인대출'] },
    { id: '3', title: '직장인 신용대출', bank: '우리은행', interestRate: 5.04, aveLoanAmt: 3420, hashTag: ['마이너스통장', '직장인대출'] },
  ];

  return (
    

    <MypageContainer>
      <MypageHeader>
        <BackButton onClick={() => navigate(-1)} size={25} isMypage={true} />
        <PageTitle title="관심 상품" />
      </MypageHeader>
      <MyFavorWrap>{datas.map((data) => {
        return (
          <MyFavCard
            key={data.id}
            data={data}
            bankLogo={getBankLogo(data.bank)}
            bankTitle={`${data.bank}은행`}
            productName={data.title}
            loanTitle="대출"
            rateAverage="3.4%"
            rateSort="대출"
            Favor={false}
          />
        )
      })}</MyFavorWrap>
    </MypageContainer>
  );
};

export default MyFavor;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MypageHeader = styled.div`
  display: flex;
`;

const MyFavorWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
  height: 100%;
`;

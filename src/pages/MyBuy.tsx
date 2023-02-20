import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyBuy = () => {
  const navigate = useNavigate();

  return (
    <MypageContainer>
      <MypageHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="신청 상품" />
      </MypageHeader>
      <MyBuyWrap>코드작성</MyBuyWrap>
    </MypageContainer>
  );
};

export default MyBuy;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MypageHeader = styled.div`
  display: flex;
`;

const MyBuyWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
  height: 100%;
`;

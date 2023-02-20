import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyFavor = () => {
  const navigate = useNavigate();

  return (
    <MypageContainer>
      <MypageHeader>
        <BackButton onClick={() => navigate(ROUTES.MYPAGE)} size={25} isMypage={true} />
        <PageTitle title="관심 상품" />
      </MypageHeader>
      <MyFavorWrap>코드작성</MyFavorWrap>
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

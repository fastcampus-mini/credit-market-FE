import BackButton from '@/components/common/BackButton';
import PageTitle from '@/components/common/PageTitle';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyInfo = () => {
  const navigate = useNavigate();

  return (
    <MypageContainer>
      <MypageHeader>
        <BackButton onClick={() => navigate(-1)} size={25} isMypage={true} />
        <PageTitle title="개인정보 수정" />
      </MypageHeader>
      <MyInfoWrap>코드작성</MyInfoWrap>
    </MypageContainer>
  );
};

export default MyInfo;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MypageHeader = styled.div`
  display: flex;
`;

const MyInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
  height: 100%;
`;

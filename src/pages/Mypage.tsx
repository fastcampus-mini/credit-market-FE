import React from 'react';
import styled from '@emotion/styled';
import Image from '@/components/common/Image';
import COLORS from '@/styles/colors';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import PageTitle from '@/components/common/PageTitle';

const Mypage = () => {
  return (
    <MypageContainer>
      <TitleWrap>
        <PageTitle title="마이페이지" />
      </TitleWrap>
      <BackgroundWrap />
      <MypageWrap>
        <ProfileContainer>
          <Image src="/images/test-cat.jpg" width="130px" height="130px" borderRadius="80px" />
          <UserNickname>냥냥이</UserNickname>
          <UserDesc>2001년 1월 1일</UserDesc>
        </ProfileContainer>
        <MypageMenu>
          <Link to={ROUTES.MYPAGE_BUY}>
            <MenuItem>신청 상품</MenuItem>
          </Link>
          <Link to={ROUTES.MYPAGE_FAVOR}>
            <MenuItem>관심 상품</MenuItem>
          </Link>
          <Link to={ROUTES.MYPAGE_INFO}>
            <MenuItem>개인정보 수정</MenuItem>
          </Link>
        </MypageMenu>
      </MypageWrap>
    </MypageContainer>
  );
};

export default Mypage;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrap = styled.div`
  padding: 0 10px;
`;

const BackgroundWrap = styled.div`
  background-color: ${COLORS.homeBackground};
  height: 200px;
`;

const MypageWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  position: relative;
`;

const ProfileContainer = styled.div`
  height: 300px;
  position: absolute;
  top: -70px;
  left: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const UserNickname = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const UserDesc = styled.p`
  font-size: 14px;
  color: ${COLORS.gray};
`;

const MypageMenu = styled.ul`
  margin-top: 180px;
  font-size: 18px;
`;

const MenuItem = styled.li`
  padding: 20px 10px;
`;

import React from 'react';
import styled from '@emotion/styled';
import Image from '@/components/common/Image';
import COLORS from '@/styles/colors';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import PageTitle from '@/components/common/PageTitle';
import { BsCartCheck, BsPerson } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

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
            <MenuItem>
              <BsCartCheck size="20" />
              <span>신청 상품</span>
            </MenuItem>
          </Link>
          <Link to={ROUTES.MYPAGE_FAVOR}>
            <MenuItem>
              <AiOutlineHeart size="20" />
              <span>관심 상품</span>
            </MenuItem>
          </Link>
          <Link to={ROUTES.MYPAGE_INFO}>
            <MenuItem>
              <BsPerson size="20" />
              <span>개인정보 수정</span>
            </MenuItem>
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
  background-image: url('/images/mypage_background.png');
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
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
`;

const MenuItem = styled.li`
  padding: 20px 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.lightGray};
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

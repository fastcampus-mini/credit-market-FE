import React from 'react';
import styled from '@emotion/styled';
import Image from '@/components/common/Image';
import COLORS from '@/styles/colors';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import PageTitle from '@/components/common/PageTitle';
import { BsCartCheck, BsPerson } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineRight } from 'react-icons/ai';

const Mypage = () => {
  return (
    <MypageContainer>
      <TitleWrap>
        <PageTitle title="마이페이지" />
      </TitleWrap>
      <BackgroundWrap />
      <MypageWrap>
        <ProfileContainer>
          <Image
            src="/images/test-cat.jpg"
            width="130px"
            height="130px"
            borderRadius="80px"
            alt="cat"
          />
          <UserNickname>냥냥이</UserNickname>
          <UserDesc>2001년 1월 1일</UserDesc>
        </ProfileContainer>
        <MypageMenu>
          <Link to={ROUTES.MYPAGE_BUY}>
            <MenuItem>
              <span>🛒</span>
              <p>
                신청 상품<span>신청한 상품 목록을 확인하실 수 있습니다.</span>
                <AiOutlineRight className="rightArrow" />
              </p>
            </MenuItem>
          </Link>
          <Link to={ROUTES.MYPAGE_FAVOR}>
            <MenuItem>
              <span>❤️</span>
              <p>
                관심 상품<span>등록한 관심 상품 목록을 확인하실 수 있습니다.</span>
                <AiOutlineRight className="rightArrow" />
              </p>
            </MenuItem>
          </Link>
          <Link to={ROUTES.MYPAGE_INFO}>
            <MenuItem>
              <span>✏️</span>
              <p>
                개인정보 수정<span>내 정보를 수정하실 수 있습니다.</span>
                <AiOutlineRight className="rightArrow" />
              </p>
            </MenuItem>
          </Link>
        </MypageMenu>
      </MypageWrap>
      <MyPageCopyright>
        &copy; Copyright KDT3 Mini-project Team4 in Fast campus,
        <br />
        All Rights Reserved.
      </MyPageCopyright>
    </MypageContainer>
  );
};

export default Mypage;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TitleWrap = styled.div`
  padding: 0 10px;
`;

const BackgroundWrap = styled.div`
  background-image: url('/images/mypage_background.png');
  height: 150px;
`;

const MypageWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${COLORS.white};
  padding-bottom: 50px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const ProfileContainer = styled.div`
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserNickname = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 15px 0 10px;
`;

const UserDesc = styled.p`
  font-size: 13px;
  color: ${COLORS.gray};
`;

const MypageMenu = styled.ul`
  margin-top: 160px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${COLORS.lightGray};
  border-bottom: 1px solid ${COLORS.lightGray};

  a {
    border-bottom: 1px solid ${COLORS.lightGray};

    &:last-child {
      border-bottom: none;
    }
  }
`;

const MenuItem = styled.li`
  padding: 20px 10px;
  display: flex;
  gap: 15px;
  align-items: center;
  padding: 20px;
  background-color: ${COLORS.white};
  position: relative;

  p {
    span {
      display: block;
      margin-top: 5px;
      font-size: 13px;
      color: ${COLORS.gray};
    }
  }

  .rightArrow {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: ${COLORS.gray};
  }
`;

const MyPageCopyright = styled.p`
  text-align: center;
  font-size: 11px;
  line-height: 1.4;
  color: ${COLORS.mediumGray};
  margin: 25px 0;
`;

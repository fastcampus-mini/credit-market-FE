import React from 'react';
import styled from '@emotion/styled';
import Image from '@/components/common/Image';
import COLORS from '@/styles/colors';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import PageTitle from '@/components/common/PageTitle';
import { AiOutlineRight } from 'react-icons/ai';
import Lottie from 'lottie-react';
import FundLottie from '@/lotties/funding.json';
import { getCookie } from '@/utils/cookie';

const Mypage = () => {
  const userName = getCookie('userName');

  return (
    <MypageContainer>
      <TitleWrap>
        <PageTitle title="마이페이지" />
      </TitleWrap>
      <BackgroundWrap>
        <Lottie animationData={FundLottie} loop={true} />
      </BackgroundWrap>
      <MypageWrap>
        <ProfileContainer>
          <Image
            src={`https://icotar.com/avatar/${userName}`}
            width="130px"
            height="130px"
            borderRadius="80px"
            alt="cat"
          />
          <UserNickname>{userName}</UserNickname>
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
  height: 190px;
  position: relative;
  overflow: hidden;

  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`;

const MypageWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${COLORS.white};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding-bottom: 27px;
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
  margin-top: 130px;
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
  transition: all 0.2s ease;
  &:hover {
    background-color: #d0daec60;
    & > span {
      transition: all 0.2s ease;
      scale: 1.3;
    }
  }

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
  margin: 32px 0;
`;

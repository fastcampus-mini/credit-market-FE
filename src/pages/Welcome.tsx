import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/constants/routes';
import Button from '@/components/common/Button';
import COLORS from '@/styles/colors';

const Welcome = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(ROUTES.HOME, { state: ROUTES.WELCOME });
  };

  const username = 'USER'; // axios를 통해 데이터 받아오기

  return (
    <WelcomeContainer>
      <WelcomeStyle>
        <img css={ImgStyle} src="../public/images/welcome.png" alt="welcomeImage" />
        <TextStyle>
          <H1PrimaryStyle>{username}님!</H1PrimaryStyle>
          <h1>Credit Market에</h1>
          <h1>오신것을 환영해요!</h1>
        </TextStyle>
        <Button onClick={goHome} fontWeight={900} fontSize="1.1rem" width="80%">
          별말씀을요!
        </Button>
        <SpanStyle>
          버튼을 누르시면 <u>홈화면</u>으로 이동해요
        </SpanStyle>
      </WelcomeStyle>
    </WelcomeContainer>
  );
};

export default Welcome;

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 60px;
`;

const WelcomeStyle = styled.div`
  width: 100%;
  padding: 20px 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const TextStyle = styled.div`
  font-size: 1.4rem;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const SpanStyle = styled.span`
  color: gray;
  font-size: 10px;
`;

const H1PrimaryStyle = styled.h1`
  color: ${COLORS.primary};
`;

const ImgStyle = css`
  width: 100%;
  marginLeft: ;20px;
`;

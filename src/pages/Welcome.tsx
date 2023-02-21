import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/constants/routes';
import Button from '@/components/common/Button';
import COLORS from '@/styles/colors';

const Welcome = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(ROUTES.LOGIN, { state: ROUTES.WELCOME });
  };

  const username = 'USER'; // axios를 통해 데이터 받아오기

  return (
    <WelcomeContainer>
      <WelcomeStyle>
        <div id="welcomeImageWrapper">
          <img src="../public/images/welcome.png" alt="welcomeImage" />
        </div>

        <TextStyle>
          <H1PrimaryStyle>{username}님!</H1PrimaryStyle>
          <h1>Credit Market에</h1>
          <h1>오신것을 환영해요!</h1>
        </TextStyle>
        <Button onClick={goLogin} fontWeight={900} fontSize="1.1rem">
          별말씀을요!
        </Button>
        <SpanStyle>버튼을 누르시면 홈화면으로 이동해요</SpanStyle>
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
  padding: 40px;
`;

const WelcomeStyle = styled.div`
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

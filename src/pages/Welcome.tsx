import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import { ROUTES } from '@/constants/routes';

const Welcome = () => {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(ROUTES.LOGIN, { state: ROUTES.WELCOME });
  };

  return (
    <WelcomeStyle>
      <h1>Welcome</h1>
      <h1>Welcome</h1>
      <h1>Welcome</h1>
      <h1>Welcome</h1>
      <h1>Welcome</h1>
      <h1>Welcome</h1>
      <button onClick={goLogin}>GO TO LOGIN</button>
    </WelcomeStyle>
  );
};

export default Welcome;

const WelcomeStyle = styled.div`
  padding: 20px 10px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

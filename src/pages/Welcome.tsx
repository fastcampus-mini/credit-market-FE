import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

type Props = {};

const Welcome = (props: Props) => {
  const WelcomeStyle = styled.div`
    padding: 20px 10px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const navigate = useNavigate();

  const goLogin = () => {
    navigate('/login', { state: '/signup/welcome' });
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

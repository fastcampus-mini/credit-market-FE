import Button from '@/components/common/Button';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import ErrorLottie from '@/lotties/happy-dog.json';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <LottieWrap>
        <Lottie animationData={ErrorLottie} loop={true} />
      </LottieWrap>
      <p>존재하지 않는 페이지입니다.</p>
      <div>
        <Button width="200px" onClick={() => navigate(ROUTES.HOME)}>
          HOME
        </Button>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LottieWrap = styled.div`
  width: 260px;
  display: flex;
`;

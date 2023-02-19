import Button from '@/components/common/Button';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
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
  margin-top: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  justify-content: center;
  width: 100%;
`;

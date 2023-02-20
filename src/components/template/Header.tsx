import React from 'react';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { FiLogIn } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';
import isCurPath from '@/utils/path';
import LogoutButton from './LogoutButton';

const Header = () => {
  const navigate = useNavigate();

  const logoImage = (logoColor: string) => {
    return <img src={`/images/logo_${logoColor}.png`} alt="메인로고" />;
  };

  if (isCurPath(ROUTES.LOGIN) || isCurPath(ROUTES.SIGNUP)) return null;

  const isLoggedIn = false; // redux로 관리해야할듯..
  const Buttons = () => {
    return (
      <>
        <Button
          width="fit-content"
          height="fit-content"
          onClick={() => navigate(ROUTES.LOGIN)}
          buttonType={isCurPath(ROUTES.HOME) ? 'transparent' : 'text'}
        >
          <FiLogIn />
          <span>LOGIN</span>
        </Button>
        <Button
          width="fit-content"
          height="fit-content"
          onClick={() => navigate(ROUTES.SIGNUP)}
          buttonType={isCurPath(ROUTES.HOME) ? 'transparent' : 'text'}
        >
          <FaUserFriends />
          <span>JOIN</span>
        </Button>
      </>
    );
  };

  return (
    <StyledHeader className="headerInner">
      <Link to="/">{isCurPath(ROUTES.HOME) ? logoImage('white') : logoImage('Main')}</Link>
      <div className="buttons">{isLoggedIn ? <LogoutButton /> : <Buttons />}</div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 30px 10px 0;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
  }

  .buttons {
    display: flex;
    gap: 10px;

    button {
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;

      svg {
        width: 100%;
        height: 13px;
      }

      span {
        font-size: 9px;
      }
    }
  }
`;

import React from 'react';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { FiLogIn } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { showSignPage } from '@/store/signPageSlice';
import locationPath from '@/constants/path';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoImage = (logoColor: string) => {
    return <img src={`/images/logo_${logoColor}.png`} alt="메인로고" />;
  };

  if (locationPath(ROUTES.LOGIN) || locationPath(ROUTES.SIGNUP)) return null;
  const handleLogin = () => {
    dispatch(showSignPage());
    navigate(ROUTES.LOGIN);
  };

  const handleSignUp = () => {
    dispatch(showSignPage());
    navigate(ROUTES.SIGNUP);
  };

  return (
    <StyledHeader className="headerInner">
      <Link to="/">{locationPath(ROUTES.HOME) ? logoImage('white') : logoImage('Main')}</Link>
      <div className="buttons">
        <Button
          width="fit-content"
          height="fit-content"
          onClick={handleLogin}
          buttonType={locationPath(ROUTES.HOME) ? 'transparent' : 'text'}
        >
          <FiLogIn />
          <span>LOGIN</span>
        </Button>
        <Button
          width="fit-content"
          height="fit-content"
          onClick={handleSignUp}
          buttonType={locationPath(ROUTES.HOME) ? 'transparent' : 'text'}
        >
          <FaUserFriends />
          <span>JOIN</span>
        </Button>
      </div>
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

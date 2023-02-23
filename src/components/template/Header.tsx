import React from 'react';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';
import isCurPath from '@/utils/path';
import { getCookie } from '@/utils/cookie';
import { logout } from '@/apis/auth';

const Header = () => {
  const navigate = useNavigate();
  const userName = getCookie('userName');

  console.log(userName);

  const logoImage = (logoColor: string) => {
    return <img src={`/images/logo_${logoColor}.png`} alt="메인로고" />;
  };

  if (isCurPath(ROUTES.LOGIN) || isCurPath(ROUTES.SIGNUP)) return null;
  console.log(logout());

  return (
    <StyledHeader className="headerInner">
      <>
        <Link to="/">{isCurPath(ROUTES.HOME) ? logoImage('white') : logoImage('Main')}</Link>
        <div className="buttons">
          <Button
            width="fit-content"
            height="fit-content"
            onClick={() => (userName ? logout() : navigate(ROUTES.LOGIN))}
            // onClick={() => navigate(ROUTES.LOGIN)}
            // onClick={logout()}
            buttonType={isCurPath(ROUTES.HOME) ? 'transparent' : 'text'}
          >
            {!userName ? <FiLogIn /> : <FiLogOut />}
            {/* <FiLogIn /> */}
            <span>{!userName ? 'LOGIN' : 'LOGOUT'}</span>
            {/* <span>LOGIN</span> */}
          </Button>
          {!userName && (
            <Button
              width="fit-content"
              height="fit-content"
              onClick={() => navigate(ROUTES.SIGNUP)}
              buttonType={isCurPath(ROUTES.HOME) ? 'transparent' : 'text'}
            >
              <FaUserFriends />
              <span>JOIN</span>
            </Button>
          )}
          {/* <Button
            width="fit-content"
            height="fit-content"
            onClick={() => navigate(ROUTES.SIGNUP)}
            buttonType={isCurPath(ROUTES.HOME) ? 'transparent' : 'text'}
          >
            <FaUserFriends />
            <span>JOIN</span>
          </Button> */}
        </div>
      </>
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

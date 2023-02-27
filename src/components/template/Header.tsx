import React from 'react';
import { ROUTES } from '@/constants/routes';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { FaUserFriends } from 'react-icons/fa';
import isCurPath from '@/utils/path';
import { logout } from '@/apis/auth';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { setModal } from '@/store/modalSlice';
import { MESSAGES } from '@/constants/messages';
import { useCookies } from 'react-cookie';
import AvatarIcon from './AvatarIcon';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies();
  const { userName, accessToken } = cookies;

  const logoImage = (logoColor: string) => {
    return <img src={`/images/logo_${logoColor}.png`} alt="메인로고" />;
  };

  if (isCurPath(ROUTES.LOGIN) || isCurPath(ROUTES.SIGNUP)) return null;

  const handleLogout = async () => {
    try {
      dispatch(showLoading());
      await logout();
      removeCookie('userName');
      removeCookie('accessToken');
      dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.LOGOUT.COMPLETE_LOGOUT,
          onClickOk: () => {
            dispatch(
              setModal({
                isOpen: false,
              }),
            );
          },
        }),
      );
      navigate(ROUTES.HOME);
    } catch (error) {
      dispatch(
        setModal({
          isOpen: true,
          onClickOk: () => dispatch(setModal({ isOpen: false })),
          text: MESSAGES.LOGOUT.ERROR_LOGOUT,
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <StyledHeader className="headerInner">
      <>
        <Link to="/">{isCurPath(ROUTES.HOME) ? logoImage('white') : logoImage('Main')}</Link>
        <div className="buttons">
          {userName && <AvatarIcon accessToken={accessToken} width="30px" height="30px" />}
          <Button
            width="fit-content"
            height="fit-content"
            onClick={userName ? handleLogout : () => navigate(ROUTES.LOGIN)}
            buttonType={isCurPath(ROUTES.HOME) ? 'transparent' : 'text'}
          >
            {!userName ? <FiLogIn title="LOGIN" /> : <FiLogOut title="LOGOUT" />}
          </Button>
          {!userName && (
            <Button
              width="fit-content"
              height="fit-content"
              onClick={() => navigate(ROUTES.SIGNUP)}
              buttonType={isCurPath(ROUTES.HOME) ? 'transparent' : 'text'}
            >
              <FaUserFriends title="sign up" />
            </Button>
          )}
        </div>
      </>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  padding: 19px 10px 0;
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
    gap: 15px;
    position: relative;
    align-items: center;

    button {
      padding: 0;
      font-size: 16px;
    }
  }
`;

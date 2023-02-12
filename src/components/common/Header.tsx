import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderStyle>
      <Link to="/">
        <img src="../../../public/images/logo_white.png" alt="메인로고" />
      </Link>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  padding: 30px 10px 0;
  img {
    width: 100px;
  }
`;

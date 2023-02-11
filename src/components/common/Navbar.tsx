import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      Navbar
      <Link to="/cart">장바구니로 이동하기</Link>
    </div>
  );
};

export default Navbar;

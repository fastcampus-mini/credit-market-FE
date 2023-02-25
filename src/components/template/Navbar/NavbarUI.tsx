import React from 'react';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import { ROUTES } from '@/constants/routes';
import isCurPath from '@/utils/path';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { BiDetail } from 'react-icons/bi';
import BubbleMenu from './BubbleMenu';
import Bubble from './Bubble';

const NavbarUI = () => {
  const productById = ROUTES.PRODUCT_BY_ID(location.pathname.split('/')[2]);

  return (
    <StyledNavbar>
      <div id="navbarContainer">
        <div id="navbar">
          <ul id="bubbleWrapper">
            <>
              <Bubble id={1}>{isCurPath(productById) ? <BiDetail /> : <AiFillHome />}</Bubble>
              <Bubble id={2}>
                <RiSearchLine />
              </Bubble>
              <Bubble id={3}>
                <BsFillCartFill />
              </Bubble>
              <Bubble id={4}>
                <FaUserAlt />
              </Bubble>
            </>
          </ul>
          <ul id="menuWrapper">
            <>
              <BubbleMenu id={1} route={ROUTES.HOME}>
                {isCurPath(productById) ? <BiDetail /> : <AiFillHome />}
              </BubbleMenu>
              <BubbleMenu id={2} route={ROUTES.SEARCH}>
                <RiSearchLine />
              </BubbleMenu>
              <BubbleMenu id={3} route={ROUTES.CART}>
                <BsFillCartFill />
              </BubbleMenu>
              <BubbleMenu id={4} route={ROUTES.MYPAGE}>
                <FaUserAlt />
              </BubbleMenu>
            </>
          </ul>
        </div>
        <div id="bgWrapper">
          <div id="bg"></div>
          <div id="bgBubble"></div>
          <div id="bgBubbleWrap"></div>
        </div>
      </div>
      <svg width="0" height="0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </StyledNavbar>
  );
};

export default NavbarUI;

const StyledNavbar = styled.nav`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  bottom: 0;

  #navbar {
    width: 100%;
    height: 60px;
    background-color: ${COLORS.white};
    position: absolute;
    bottom: 0;
    // z-index: 9;
  }

  #bubbleWrapper {
    position: absolute;
    display: flex;
    justify-content: space-around;
    width: 100%;
    bottom: 25px;
  }

  #bgBubbleWrap {
    position: absolute;
    bottom: 0;
    left: -50px;
    width: calc(100% + 50px);
    height: 50px;
    background: ${COLORS.background};
  }

  .bubble {
    background-color: ${COLORS.white};
    width: 50px;
    height: 50px;
    bottom: 85px;
    border-radius: 50%;
    z-index: 10;
    transform: translateY(120%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    opacity: 0;
  }

  #bubble1 {
    transform: translateY(0%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  #bubble1 > span {
    opacity: 0.7;
  }

  #bgWrapper {
    filter: url(#goo);
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 60px;
  }

  #bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 120%;
    height: 100%;
    margin-left: -10%;
    background-color: ${COLORS.primary};
  }

  #bgBubble {
    position: absolute;
    background-color: ${COLORS.background};
    width: 70px;
    height: 70px;
    border-radius: 50%;
    bottom: -50px;
    left: 50px;
    transform: translateX(-50%);
  }

  #menuWrapper {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .menuElement {
    opacity: 0.4;
    transform: translateY(100%);
    cursor: pointer;
  }
  .menuElement:hover {
    opacity: 0.5;
  }

  #contentWrapper {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #contentWrapper h2 {
    color: #fff;
    font-family: sans-serif;
    font-weight: 400;
  }

  .content {
    display: none;
    opacity: 0;
  }
`;

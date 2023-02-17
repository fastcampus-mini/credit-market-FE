import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import COLORS from '@/styles/colors';
import isCurPath from '@/utils/path';
import { ROUTES } from '@/constants/routes';

const Navbar = () => {
  useEffect(() => {
    switch (location.pathname) {
      case ROUTES.HOME:
      case ROUTES.PRODUCTS:
      case ROUTES.PRODUCT_DETAIL:
        return move(1, 105, COLORS.homeBackground);
      case ROUTES.CART:
      case ROUTES.BUY:
        return move(2, 235, COLORS.background);
      case ROUTES.MYPAGE:
      case ROUTES.MYPAGE_BUY:
      case ROUTES.MYPAGE_FAVOR:
      case ROUTES.MYPAGE_INFO:
        return move(3, 365, COLORS.background);
      default:
        break;
    }
  }, []);

  if (isCurPath(ROUTES.LOGIN) || isCurPath(ROUTES.SIGNUP)) return null;

  const move = (id: number, position: number, color: string) => {
    gsap.config({
      nullTargetWarn: false,
    });
    const tl = gsap.timeline();
    tl.to('#bgBubble', { duration: 0.15, bottom: '-30px', ease: 'ease-out' }, 0)
      .to('#bubble1', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to('#bubble2', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to('#bubble3', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to('.icon', { duration: 0.05, opacity: 0, ease: 'ease-out' }, 0)
      .to('#bgBubble', { duration: 0.2, left: `${position}px`, ease: 'ease-in-out' }, 0.1)
      .to('#bgBubble', { duration: 0.15, bottom: '-50px', ease: 'ease-out' }, '-=0.2')
      .to(
        `#bubble${id}`,
        {
          duration: 0.15,
          y: '0%',
          opacity: 1,
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          ease: 'ease-out',
        },
        '-=0.1',
      )
      .to(
        `#bubble${id}> span`,
        { duration: 0.15, y: '0%', opacity: 0.7, ease: 'ease-out' },
        '-=0.1',
      )
      .to(
        '#navbarContainer',
        { duration: 0.3, backgroundColor: COLORS.background, ease: 'ease-in-out' },
        0,
      )
      .to('#bg', { duration: 0.3, backgroundColor: color, ease: 'ease-in-out' }, 0)
      .to(
        '#bgBubble',
        { duration: 0.3, backgroundColor: COLORS.background, ease: 'ease-in-out' },
        0,
      );
  };

  return (
    <StyledNavbar className="navInner">
      <div id="navbarContainer">
        <div id="navbar">
          <div id="bubbleWrapper">
            <div id="bubble1" className="bubble">
              <span className="icon">
                <AiFillHome />
              </span>
            </div>
            <div id="bubble2" className="bubble">
              <span className="icon">
                <BsFillCartFill />
              </span>
            </div>
            <div id="bubble3" className="bubble">
              <span className="icon">
                <FaUserAlt />
              </span>
            </div>
          </div>
          <div id="menuWrapper">
            <div
              id="menu1"
              className="menuElement"
              onClick={() => move(1, 105, COLORS.homeBackground)}
            >
              <Link to="/">
                <>
                  <AiFillHome />
                  {isCurPath(ROUTES.HOME) && move(1, 105, COLORS.homeBackground)}
                </>
              </Link>
            </div>
            <div id="menu2" className="menuElement" onClick={() => move(2, 235, COLORS.background)}>
              <Link to="/cart">
                <BsFillCartFill />
              </Link>
            </div>
            <div id="menu3" className="menuElement" onClick={() => move(3, 365, COLORS.background)}>
              <Link to="/mypage">
                <FaUserAlt />
              </Link>
            </div>
          </div>
        </div>
        <div id="bgWrapper">
          <div id="bg"></div>
          <div id="bgBubble"></div>
          <div id="abc"></div>
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

export default Navbar;

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

  #abc {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: red;
    background: ${COLORS.background};
  }

  .bubble {
    background-color: ${COLORS.white};
    width: 60px;
    height: 60px;
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
    width: 120%;
    height: 100%;
    margin-left: -10%;
    position: absolute;
    bottom: 58px;
  }

  #bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: ${COLORS.homeBackground};
  }

  #bgBubble {
    position: absolute;
    background-color: ${COLORS.homeBackground};
    width: 75px;
    height: 75px;
    border-radius: 50%;
    bottom: -50px;
    left: 105px;
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

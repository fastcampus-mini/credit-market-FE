import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { BiDetail } from 'react-icons/bi';
import COLORS from '@/styles/colors';
import isCurPath from '@/utils/path';
import { ROUTES } from '@/constants/routes';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { MESSAGES } from '@/constants/messages';
import { useDispatch } from 'react-redux';

interface Prop {
  id: string;
  title: string;
  bank: string;
}

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Prop[]>([]);

  useEffect(() => {
    // 새로고침 초기화 방지
    switch (location.pathname) {
      case ROUTES.HOME:
      case ROUTES.PRODUCTS:
        return move(1, 50, COLORS.primary);
      case ROUTES.PRODUCT_BY_ID(location.pathname.split('/')[2]):
        return move(1, 50, COLORS.background);
      case ROUTES.SEARCH:
        return move(2, 147, COLORS.background);
      case ROUTES.CART:
      case ROUTES.BUY:
        return move(3, 244, COLORS.background);
      case ROUTES.MYPAGE:
      case ROUTES.MYPAGE_BUY:
      case ROUTES.MYPAGE_FAVOR:
      case ROUTES.MYPAGE_INFO:
        return move(4, 341, COLORS.background);
      default:
        return move(1, 50, COLORS.background);
    }
  }, [location]);

  useEffect(() => {
    async function getProducts() {
      try {
        dispatch(showLoading());
        const data: Prop[] = [
          { id: '1', title: '직장인 신용대출', bank: '우리' },
          { id: '2', title: '주부 신용대출', bank: '국민' },
          { id: '3', title: '고양이 신용대출', bank: '신한' },
          { id: '4', title: '주부 신용대출', bank: '국민' },
          { id: '5', title: '직장인 신용대출', bank: '우리' },
          { id: '6', title: '주부 신용대출', bank: '신한' },
          { id: '7', title: '고양이 신용대출', bank: '국민' },
          { id: '8', title: '대학생 신용대출', bank: '제주' },
        ];
        setProducts(data);
      } catch (error) {
        alert(MESSAGES.PRODUCT.ERROR_GET_DETAIL);
      } finally {
        dispatch(hideLoading());
      }
    }
    getProducts();
  }, []);

  function move(id: number, position: number, color: string) {
    gsap.config({
      nullTargetWarn: false,
    });
    const tl = gsap.timeline();
    tl.to('#bgBubble', { duration: 0.15, bottom: '-30px', ease: 'ease-out' }, 0)
      .to('#bubble1', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to('#bubble2', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to('#bubble3', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
      .to('#bubble4', { duration: 0.1, y: '120%', boxShadow: 'none', ease: 'ease-out' }, 0)
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
        '#bgBubble, #bgBubbleWrap',
        { duration: 0.3, backgroundColor: COLORS.background, ease: 'ease-in-out' },
        0,
      );
  }

  if (isCurPath(ROUTES.LOGIN) || isCurPath(ROUTES.SIGNUP)) return null;

  return (
    <StyledNavbar>
      <div id="navbarContainer">
        <div id="navbar">
          <div id="bubbleWrapper">
            <div id="bubble1" className="bubble">
              <span className="icon">
                {isCurPath(ROUTES.PRODUCT_BY_ID(location.pathname.split('/')[2])) ? (
                  <BiDetail />
                ) : (
                  <AiFillHome />
                )}
              </span>
            </div>
            <div id="bubble2" className="bubble">
              <span className="icon">
                <RiSearchLine />
              </span>
            </div>
            <div id="bubble3" className="bubble">
              <span className="icon">
                <BsFillCartFill />
              </span>
            </div>
            <div id="bubble4" className="bubble">
              <span className="icon">
                <FaUserAlt />
              </span>
            </div>
          </div>
          <div id="menuWrapper">
            <div id="menu1" className="menuElement">
              <Link to="/">
                {isCurPath(ROUTES.PRODUCT_BY_ID(location.pathname.split('/')[2])) ? (
                  <BiDetail />
                ) : (
                  <AiFillHome />
                )}
              </Link>
            </div>
            <div id="menu2" className="menuElement">
              <Link to="/search">
                <RiSearchLine />
              </Link>
            </div>
            <div id="menu3" className="menuElement">
              <Link to="/cart">
                <BsFillCartFill />
              </Link>
            </div>
            <div id="menu4" className="menuElement">
              <Link to="/mypage">
                <FaUserAlt />
              </Link>
            </div>
          </div>
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
